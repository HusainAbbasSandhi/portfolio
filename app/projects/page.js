import React from "react";
import "./Projects.css";

const projects = [
    {
        title: "Conversational AI Chatbot",
        image: "ai.png",
        description: "A conversational chatbot using NLP for real-time responses and user assistance.",
        link: "#"
    },
    {
        title: "ElectionIntel Pro",
        image: "/jb.png",
        description: "Comprehensive Election Financial Intelligence dashboard designed to empower voters by providing real-time",
        link: "#"
    },
    {
        title: "IoT Smart Parking",
        image: "/smp.jpg",
        description: "A parking system using IoT to detect available spots and guide drivers.",
        link: "#"
    },
    {
        title: "Neuro-Home Automation",
        image: "/nh.jpg",
        description: "An IoT-powered smart home system for automation, security, and energy efficiency.",
        link: "#"
    },
    {
        title: "Portfolio Website",
        image: "/port.jpg",
        description: "A personal website showcasing my projects, skills, and experience.",
        link: "https://portfolio-chi-topaz-25.vercel.app/"
    },
    {
        title: "YOLO Traffic Detection",
        image: "/yol.png",
        description: "Professional engineering services with excellence.",
        link: "#"
    }
];

export default function Projects() {
    return (
        <div className="projects-container">
    <h1>My Projects</h1>
    
    <div className="projects-grid">
        {projects.map((project, index) => (
            <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a 
                        href={project.link} 
                        className="visit-button" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Visit Project
                    </a>
                </div>
            </div>
        ))}
    </div>
</div>
    );
}
