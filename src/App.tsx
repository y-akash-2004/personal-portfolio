import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Code2, Database, Brain, Palette, MessageCircle, Shield, Trophy, Target, Award, FileText, Download } from 'lucide-react';

function App() {
  const skills = [
    { name: 'React.js', icon: Code2, color: 'text-blue-400' },
    { name: 'JavaScript', icon: Code2, color: 'text-yellow-400' },
    { name: 'HTML', icon: Code2, color: 'text-orange-400' },
    { name: 'CSS', icon: Palette, color: 'text-pink-400' },
    { name: 'GitHub', icon: Github, color: 'text-gray-400' }
  ];

  const projects = [
    {
      title: 'Fusion – Personal Finance Dashboard',
      description: 'Built a full-stack personal finance platform with secure login and asset management features. Developed Python Flask APIs to handle dynamic data operations and database storage (SQLite). Integrated Gemini AI to provide users with smart financial insights based on entered data.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'Python Flask', 'SQLite', 'Gemini AI'],
      icon: Database,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Music Studio Web App',
      description: 'Built a responsive web-based music player with categorized playlists and a modern UI. Designed interactive sections like Latest Releases, Popular Artists, and Regional Music without JavaScript.',
      technologies: ['HTML', 'CSS', 'Audio API', 'Responsive Design'],
      icon: Palette,
      gradient: 'from-green-500 to-blue-600'
    },
    {
      title: 'Java Chat Application',
      description: 'Built a real-time peer-to-peer chat app with a GUI using Java AWT/Swing and socket programming. Implemented RSA-based end-to-end encryption for secure message exchange.',
      technologies: ['Java', 'AWT', 'Swing', 'Socket Programming', 'RSA Encryption'],
      icon: MessageCircle,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const achievements = [
    {
      title: 'Code360 Problems Solved',
      description: '300+ Problems | MAX Rating 1549',
      icon: Target,
      color: 'text-yellow-400'
    },
    {
      title: 'DSA Expertise',
      description: '200+ Data Structure & Algorithm Problems',
      icon: Brain,
      color: 'text-blue-400'
    },
    {
      title: 'StatusCode 1.0 Winner',
      description: 'Coding Competition at IISER Kolkata',
      icon: Trophy,
      color: 'text-yellow-400'
    },
    {
      title: 'SC2 Lead Organizer',
      description: 'Developer for StatusCode 2.0 official website',
      icon: Award,
      color: 'text-green-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
      </div>
      
      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Profile */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700 shadow-2xl">
              {/* Profile Picture - Professional Male Avatar */}
              <div className="text-center mb-8">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-6 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    {/* Professional Male Avatar - Pixel Art Style */}
                    <svg width="180" height="180" viewBox="0 0 180 180" className="rounded-full">
                      {/* Background */}
                      <rect width="180" height="180" fill="#1f2937"/>
                      
                      {/* Face */}
                      <rect x="45" y="60" width="90" height="90" fill="#d4a574"/>
                      
                      {/* Hair */}
                      <rect x="30" y="30" width="120" height="60" fill="#2d1810"/>
                      <rect x="45" y="45" width="90" height="30" fill="#2d1810"/>
                      
                      {/* Eyes */}
                      <rect x="60" y="75" width="15" height="15" fill="#ffffff"/>
                      <rect x="105" y="75" width="15" height="15" fill="#ffffff"/>
                      <rect x="65" y="80" width="5" height="5" fill="#000000"/>
                      <rect x="110" y="80" width="5" height="5" fill="#000000"/>
                      
                      {/* Nose */}
                      <rect x="87" y="90" width="6" height="12" fill="#c49968"/>
                      
                      {/* Mouth */}
                      <rect x="75" y="105" width="30" height="6" fill="#8b4513"/>
                      
                      {/* Shirt */}
                      <rect x="30" y="150" width="120" height="30" fill="#1e40af"/>
                      
                      {/* Tie */}
                      <rect x="85" y="150" width="10" height="30" fill="#dc2626"/>
                      
                      {/* Collar */}
                      <rect x="60" y="150" width="60" height="15" fill="#ffffff"/>
                    </svg>
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">YAMPARALA AKASH</h1>
                <p className="text-xl text-blue-400 mb-4 font-semibold">Web Developer</p>
                <p className="text-gray-300 leading-relaxed">
                  I'm a Computer Science Engineering student at the Indian Institute of Information Technology, Kalyani. 
                  Passionate about technology and love building clean, user-friendly web applications.
                </p>
              </div>

              {/* Contact Links */}
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/yamparala-akash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-700/50 hover:bg-gray-700/80 rounded-xl transition-all duration-300 border border-gray-600 hover:border-blue-500 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-300">LinkedIn</h3>
                    <p className="text-gray-400 text-sm">yamparala-akash</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/y-akash-2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-700/50 hover:bg-gray-700/80 rounded-xl transition-all duration-300 border border-gray-600 hover:border-gray-400 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-300">GitHub</h3>
                    <p className="text-gray-400 text-sm">y-akash-2004</p>
                  </div>
                </a>

                <a 
                  href="mailto:cse23107@iiitkalyani.ac.in"
                  className="flex items-center gap-4 p-4 bg-gray-700/50 hover:bg-gray-700/80 rounded-xl transition-all duration-300 border border-gray-600 hover:border-green-500 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-300">Email</h3>
                    <p className="text-gray-400 text-sm">cse23107@iiitkalyani.ac.in</p>
                  </div>
                </a>

                {/* Resume Section */}
                <a 
                  href="/Akash_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-700/50 hover:bg-gray-700/80 rounded-xl transition-all duration-300 border border-gray-600 hover:border-orange-500 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-orange-300">Resume</h3>
                    <p className="text-gray-400 text-sm">View my resume</p>
                  </div>
                  <Download size={20} className="text-orange-400 group-hover:text-orange-300" />
                </a>
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white shadow-2xl border border-blue-500/30">
              <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Programming Languages:</h3>
                <p className="font-medium">JavaScript, HTML, CSS, Python, Java</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Frameworks and Tools:</h3>
                <p className="font-medium">React.js, Flask, Chart.js, AWT/Swing, Socket Programming</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Expertise:</h3>
                <p className="font-medium">Full-stack development, AI Integration, Database Management, UI/UX Design</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Achievements Section */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  🏆 Achievements & Recognition
                </span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="bg-gray-700/50 hover:bg-gray-700/80 p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-gray-500 group"
                  >
                    <achievement.icon size={32} className={`${achievement.color} mb-4 group-hover:scale-110 transition-transform`} />
                    <h3 className="text-lg font-semibold mb-2 text-gray-200">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  🚀 Featured Projects
                </span>
              </h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="bg-gray-700/50 hover:bg-gray-700/80 rounded-2xl p-6 transition-all duration-300 transform hover:scale-[1.02] border border-gray-600 hover:border-gray-500 group"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                          <project.icon size={24} className="text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="bg-gray-600/50 px-3 py-1 rounded-full text-xs font-medium border border-gray-500 text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Me Section */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  💼 About Me
                </span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  I enjoy solving problems using Python, Java, and DSA, and I'm skilled in HTML, CSS, JavaScript, React.js, and UI/UX design.
                </p>
                <p className="leading-relaxed">
                  I'm always open to learning new things and growing as a developer. As the winner of StatusCode 1.0 at IISER Kolkata 
                  and the Lead Organizer & Developer for StatusCode 2.0's official website, I've demonstrated both technical excellence and leadership skills.
                </p>
                <p className="leading-relaxed">
                  I specialize in creating scalable web applications, integrating AI solutions, and building 
                  user-centric interfaces that solve real-world problems.
                </p>
                <p className="leading-relaxed">
                  Outside of tech, I'm a movie lover and enjoy playing badminton in my free time. 🎬🏸
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Yamparala Akash. Built with React & Tailwind CSS. 
            <span className="text-blue-400 ml-2">💼 Professional Portfolio</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;