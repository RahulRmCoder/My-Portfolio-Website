
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: " AI Text Processing Application",
    description: " Django App – AI-powered text summarization & style-based rewriting using Groq API, with user authentication & historytracking. ",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg",
    technologies: ["HTML", "CSS", "Javascript", "Django","MongoDB","Generative AI","Gemini API"],
    codeLink: "https://github.com/RahulRmCoder/AI-Text-Processing-Application"
  },
  {
    id: 2,
    title: "Jira Automation with REST Assured & TestNG",
    description: "Automated Jira workflows using Atlassian Jira Cloud REST APIs, Rest Assured, and TestNG, enabling creation and management of Epics, Stories, Subtasks, Bugs, and Sprints.",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.analyticsvidhya.com%2Fblog%2F2024%2F04%2Ftop-coding-platforms-for-data-science-beginners%2F&psig=AOvVaw2NI_6z2ZGCSpdL0mSYc_9F&ust=1762281902857000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPje7ejR1pADFQAAAAAdAAAAABAl",
    technologies: ["Java", "REST Assured", "TestNG", "Maven","Jira Cloud REST API v3"],
    codeLink: "https://github.com/RahulRmCoder/Jira-Automation-with-REST-Assured-TestNG"
  },
  {
    id: 3,
    title: "Word Weave: Blogging Website",
    description: "Word Weave – AI-powered modern blogging platform with a dark theme, intuitive writing, social engagement, and advanced analytics. ",
    image: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    technologies: ["HTML", "CSS", "Javascript", "Expess.js","MongoDB","Generative AI","Gemini API"],
    codeLink: "https://github.com/RahulRmCoder/Word-Weave-Blogging-Website"
  },
  {
    id: 4,
    title: " CraveCrafters: Food Ordering Web Application",
    description: " CraveCrafters – AI-powered food ordering web app with a chatbot for menu browsing, orders & support. Built with Node.js, FastAPI, MongoDB & JS.",
    image: "https://media.istockphoto.com/id/2166408604/photo/group-adult-asia-male-female-freelance-typing-write-prompt-ai-bot-it-app-smart-program-nomad.webp?a=1&b=1&s=612x612&w=0&k=20&c=MVxFXRqN3d3UMU11rRitHUU6-KQ6lmIRf0GJAnVn-2k=",
    technologies: ["HTML","CSS",'Javascript',"Express.js","MongoDB","Machine Learning","Generative AI","ChatBot","Gemini API"],
    codeLink: "https://github.com/RahulRmCoder/CraveCrafters-Food-App"
  },
  {
    id: 5,
    title: "GrammarGuru",
    description: "GrammarGuru is a web application that provides instant feedback on grammar, punctuation, and style to help users improve their writing. Whether you're drafting emails, writing content, or communicating in English as a second language, GrammarGuru helps you express yourself clearly and correctly.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fHww",
    technologies: ["HTML", "Tailwind CSS", "Typescript","React","Lyzr AI Agent"],
    demoLink: "https://elegant-grammar-glow.lovable.app/",
    codeLink: "https://github.com/RahulRmCoder/elegant-grammar-glow"
  }
];
