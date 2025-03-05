import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
      <div>
          

          <div className="container">
              {/* Full-Width Hero Section */}
              <div className="hero">
                  <h1>"Hey, I'm Husain."</h1>
                  
                  <p>
Software development isn’t just about writing code—it’s about making things fast, smooth, and reliable.
I focus on creating clean, functional, and user-friendly experiences that actually make sense.</p>
                  
                 
                  
                  
                  
                  
                  
                  
                  <Image src="/aaa.png" alt="Edited version" width={600} height={600} />
    
              </div>

              {/* Column-based Sections */}
              <div className="section">
                  <h2>🚀 Featured Projects</h2>
                  <p>Some of my best projects showcasing UI/UX excellence.</p>
              </div>

              <div className="section">
                  <h2>💡 About Me</h2>
                  <p>A passionate frontend developer with a keen eye for design.</p>
              </div>

              <div className="section">
                  <h2>📩 Let's Connect</h2>
                  <p>Have a project in mind? Let’s collaborate.</p>
              </div>

              <div className="section">
                  <h2>🛠 Tech Stack</h2>
                  <p>Proficient in React, Next.js, JavaScript, and UI/UX design.</p>
              </div>
          </div>
      </div>
  );
}
