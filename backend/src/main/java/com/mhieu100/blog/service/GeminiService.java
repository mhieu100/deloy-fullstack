package com.mhieu100.blog.service;

import com.mhieu100.blog.dto.AiArticleResponse;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.converter.BeanOutputConverter;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {

    private final ChatClient chatClient;

    public GeminiService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    public AiArticleResponse generateContent(String prompt) {
        System.out.println("Generating content for prompt: " + prompt);
        try {
            BeanOutputConverter<AiArticleResponse> converter = new BeanOutputConverter<>(AiArticleResponse.class);
            String format = converter.getFormat();

            String response = chatClient.prompt()
                    .user(u -> u.text(prompt + "\n\n" + format))
                    .call()
                    .content();

            System.out.println("Generated content: " + response);
            return converter.convert(response);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error generating content: " + e.getMessage());
        }
    }

    public String chat(String prompt) {
        try {
            return chatClient.prompt()
                    .user(prompt)
                    .call()
                    .content();
        } catch (Exception e) {
            e.printStackTrace();
            return "Error generating chat response: " + e.getMessage();
        }
    }
}
