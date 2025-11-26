import { Github, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-2xl animate-pulse"></div>
            <img
              src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Avery"
              alt="Profile"
              className="w-full h-full rounded-full border-4 border-white/30 shadow-2xl object-cover relative z-10"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hi, I'm <span className="text-yellow-300"> MHieu100</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              I'm a Full Stack Developer passionate about building scalable web applications and
              sharing my knowledge with the community. I write about Java, React, Cloud Computing,
              and System Design.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link
                to="/about"
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                More About Me
              </Link>
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="/"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="/"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
