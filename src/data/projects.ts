import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Campus Connect Website",
    description:" Campus Connect is a platform created to help students quickly discover nearby sports facilities around their college including gyms, swimming pools, turfs, grounds, courts, and sports shops.",
    image: "/images/campus-connect.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://campus-connect-green.vercel.app/",
    githubUrl: "https://github.com/yashaarya/campus-connect-website",
   
  },
  {
    id: 2,
    title: "HelperBuddy - Learning Resource Recommender",
    description: "This project is a hybrid learning recommendation system . It combines content-based filtering and collaborative filtering to provide personalized learning resources.",
    image: "/images/helper-buddy.png",
    technologies: ["Streamlit", "Python", "Pandas", "Scikit-learn"],
    liveUrl: "https://helperbuddy.vercel.app",
    githubUrl: "https://github.com/yashaarya/HelperBuddy---learning_resource_app",
   
  },
  {
    id: 3,
    title: "Real Estate Chatbot",
    description: "A smart, AI-powered assistant that helps users analyze property details, estimate prices, compare locations, and get quick insights on real-estate trends. It provides instant responses, data-driven recommendations, and a smooth conversational interface for faster decision-making.",
    image: "/images/real-estate-chatbot.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Python", "Django"],
    liveUrl: "https://real-estate-chatbot.vercel.app",
    githubUrl: "https://github.com/yashaarya/real_estate_chatbot",
  
  },
];