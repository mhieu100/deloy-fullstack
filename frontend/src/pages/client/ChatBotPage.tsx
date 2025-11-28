import { RobotOutlined, UserOutlined } from '@ant-design/icons'
import { Bubble, Sender } from '@ant-design/x'
import { XMarkdown } from '@ant-design/x-markdown'
import { useEffect, useRef, useState } from 'react'
import api from '../../utils/api'

interface Message {
  id: string
  role: 'user' | 'ai'
  content: string
  loading?: boolean
}

const ChatBotPage = () => {
  const [content, setContent] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: 'Hello! I am your AI assistant powered by Ant Design X. How can I help you today?',
    },
  ])
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (nextContent: string) => {
    if (!nextContent) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: nextContent,
    }

    setMessages((prev) => [...prev, userMsg])
    setContent('')
    setLoading(true)

    // Add a temporary loading message
    const loadingMsgId = (Date.now() + 1).toString()
    setMessages((prev) => [...prev, { id: loadingMsgId, role: 'ai', content: '', loading: true }])

    try {
      const response = await api.post('/ai/chat', { prompt: nextContent })

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingMsgId ? { ...msg, content: response.data.content, loading: false } : msg
        )
      )
    } catch (error) {
      console.error('Error chatting with AI:', error)
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingMsgId
            ? {
                ...msg,
                content: 'Sorry, I encountered an error. Please try again.',
                loading: false,
              }
            : msg
        )
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4 h-[calc(100vh-64px)] flex flex-col pt-20">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        AI Assistant (Powered by Ant Design X)
      </h1>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        {messages.map((item) => (
          <Bubble
            key={item.id}
            placement={item.role === 'user' ? 'end' : 'start'}
            content={
              item.loading ? undefined : (
                <div className="dark:text-gray-200">
                  <XMarkdown>{item.content}</XMarkdown>
                </div>
              )
            }
            avatar={
              item.role === 'user' ? (
                <UserOutlined className="dark:text-white" />
              ) : (
                <RobotOutlined className="dark:text-white" />
              )
            }
            loading={item.loading}
            className={
              item.role === 'user'
                ? '[&_.ant-bubble-content]:bg-blue-100 dark:[&_.ant-bubble-content]:bg-blue-900'
                : 'dark:[&_.ant-bubble-content]:bg-gray-700'
            }
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <Sender
        value={content}
        onChange={setContent}
        onSubmit={handleSubmit}
        placeholder="Ask me anything..."
        loading={loading}
        className="dark:bg-gray-800"
      />
    </div>
  )
}

export default ChatBotPage
