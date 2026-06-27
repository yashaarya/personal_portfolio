import { Skills } from '@/types';

export const skills: Skills = {
  frontend: [
    { name: "React", level: "advanced", icon: "⚛️" },
    { name: "TypeScript", level: "advanced", icon: "📘" },
    { name: "Next.js", level: "intermediate", icon: "▲" },
    { name: "Tailwind CSS", level: "advanced", icon: "🎨" },
    { name: "JavaScript", level: "advanced", icon: "🟨" },
    { name: "HTML5", level: "advanced", icon: "📄" },
    { name: "CSS", level: "advanced", icon: "🎨" },

  ],
  backend: [
    { name: "Node.js", level: "advanced", icon: "🟢" },
    { name: "Express.js", level: "advanced", icon: "🚂" },
    { name: "PostgreSQL", level: "intermediate", icon: "🐘" },
    { name: "MongoDB", level: "intermediate", icon: "🍃" },
    { name: "FastAPI", level: "intermediate", icon: "⚡" },
    { name: "MySQL", level: "advanced", icon: "🗄️" },
    { name: "C++", level: "advanced",icon: "💻"  }

  ],
  tools: [
    { name: "Git", level: "advanced", icon: "📦" },
    { name: "Azure", level: "intermediate", icon: "☁️" },
    { name: "Vercel", level: "advanced", icon: "▲" },
    { name: "Figma", level: "intermediate", icon: "🎨" },
    { name: "Postman", level: "advanced", icon: "📮" },
  ]
};