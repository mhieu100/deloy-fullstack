import { ArrowRight, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'

const TerminalWindow = () => {
  return (
    <div className="rounded-xl shadow-2xl overflow-hidden bg-[#1e1e1e] border border-gray-800 font-mono text-sm relative z-10">
      {/* Title Bar */}
      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors"></div>
        </div>
        <div className="text-gray-400 text-xs font-medium flex items-center">
          <Terminal className="w-3 h-3 mr-2" />
          mhieu@dev-machine: ~
        </div>
        <div className="w-14"></div> {/* Spacer */}
      </div>

      {/* Terminal Content */}
      <div className="p-6 text-gray-300 bg-[#1e1e1e]/95 backdrop-blur-sm">
        {/* Command Execution */}
        <div className="flex mb-6">
          <span className="text-[#87d441] font-bold">mhieu@dev</span>
          <span className="text-white">:</span>
          <span className="text-[#4c97f8] font-bold">~</span>
          <span className="text-white">$ neofetch</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          {/* ASCII Art */}
          <div className="hidden sm:block text-[#4c97f8] font-bold whitespace-pre leading-tight select-none opacity-80">
            {`       _    _ 
      | |  | |
      | |__| |
      |  __  |
      | |  | |
      |_|  |_|`}
          </div>

          {/* Info */}
          <div className="space-y-1.5 flex-1">
            <div>
              <span className="text-[#ff5f56] font-bold">mhieu</span>@
              <span className="text-[#ff5f56] font-bold">dev-machine</span>
            </div>
            <div className="text-gray-500">-------------------</div>
            <div className="flex">
              <span className="text-[#ffbd2e] font-bold w-24">OS</span>
              <span>Fullstack OS v2.0</span>
            </div>
            <div className="flex">
              <span className="text-[#27c93f] font-bold w-24">Host</span>
              <span>Localhost</span>
            </div>
            <div className="flex">
              <span className="text-[#4c97f8] font-bold w-24">Kernel</span>
              <span>Spring Boot 3.2</span>
            </div>
            <div className="flex">
              <span className="text-[#d65d0e] font-bold w-24">Uptime</span>
              <span>24/7/365</span>
            </div>
            <div className="flex">
              <span className="text-[#b16286] font-bold w-24">Shell</span>
              <span>Zsh (Oh My Zsh)</span>
            </div>
            <div className="flex">
              <span className="text-[#689d6a] font-bold w-24">Editor</span>
              <span>VS Code</span>
            </div>
            <div className="flex">
              <span className="text-[#458588] font-bold w-24">Stack</span>
              <span>React, Java, AWS</span>
            </div>

            {/* Color Palette */}
            <div className="flex mt-5 gap-3">
              <div className="w-6 h-6 rounded bg-black border border-gray-700"></div>
              <div className="w-6 h-6 rounded bg-red-500"></div>
              <div className="w-6 h-6 rounded bg-green-500"></div>
              <div className="w-6 h-6 rounded bg-yellow-500"></div>
              <div className="w-6 h-6 rounded bg-blue-500"></div>
              <div className="w-6 h-6 rounded bg-purple-500"></div>
              <div className="w-6 h-6 rounded bg-cyan-500"></div>
              <div className="w-6 h-6 rounded bg-white"></div>
            </div>
          </div>
        </div>

        {/* New Prompt */}
        <div className="flex mt-6">
          <span className="text-[#87d441] font-bold">mhieu@dev</span>
          <span className="text-white">:</span>
          <span className="text-[#4c97f8] font-bold">~</span>
          <span className="text-white">
            ${' '}
            <span className="animate-pulse inline-block w-2 h-4 bg-gray-400 align-middle ml-1"></span>
          </span>
        </div>
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 pt-32 pb-16">
      {/* Background Patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <TerminalWindow />
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-4 lg:px-0 lg:m-0 lg:relative lg:h-full flex flex-col justify-center">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
                  <Terminal className="w-4 h-4 mr-2" />
                  Welcome to my digital garden
                </span>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-6">
                <span className="block xl:inline">Mastering the Art of</span>{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Modern Web Development
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 mb-8">
                Dive deep into the world of full-stack development. From React and Spring Boot to
                cloud deployment and system design. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/series"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Learning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 shadow-sm text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Strip */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
            Built with Modern Technologies
          </p>

          <div className="relative w-full overflow-hidden mask-image-linear-gradient">
            <div className="flex whitespace-nowrap animate-scroll">
              {/* First set of items */}
              <div className="flex items-center gap-12 mx-6">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
                    React
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-green-500 transition-colors">
                    Spring Boot
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <span className="text-2xl">📘</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-blue-600 transition-colors">
                    TypeScript
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <span className="text-2xl">🐘</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-purple-500 transition-colors">
                    PostgreSQL
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-orange-500 transition-colors">
                    AWS
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-cyan-500 transition-colors">
                    Tailwind
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <span className="text-2xl">🐳</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-red-500 transition-colors">
                    Docker
                  </span>
                </div>
              </div>

              {/* Duplicate set for seamless scrolling */}
              <div className="flex items-center gap-12 mx-6">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
                    React
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-green-500 transition-colors">
                    Spring Boot
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <span className="text-2xl">📘</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-blue-600 transition-colors">
                    TypeScript
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <span className="text-2xl">🐘</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-purple-500 transition-colors">
                    PostgreSQL
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-orange-500 transition-colors">
                    AWS
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-cyan-500 transition-colors">
                    Tailwind
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <span className="text-2xl">🐳</span>
                  </div>
                  <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-red-500 transition-colors">
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
