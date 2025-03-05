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
            I focus on creating clean, functional, and user-friendly experiences that actually make sense.
          </p>     
          <Image src="/aaa.png" alt="Edited version" width={600} height={600} />
        </div>

        {/* Column-based Sections */}
        <div className="content-wrapper">
          <div className="content-column">
            <div className="content-card work">
              <h3>🌟 My Work</h3>
              <p>Innovative solutions, seamless experiences—turning ideas into reality through technology.</p>
            </div>
            <div className="content-card skills">
              <h3>⚡ My Skill Set</h3>
              <p>Versatile in software development, AI, IoT, and modern web technologies.</p>
            </div>
          </div>
          <div className="content-column">
            <div className="content-card about">
              <h3>🧠 About Me</h3>
              <p>A tech enthusiast skilled in development, problem-solving, and emerging technologies.</p>
            </div>
            <div className="content-card collaborate">
              <h3>🤝 Let’s Collaborate</h3>
              <p>Open to exciting opportunities! Let’s create something impactful together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
