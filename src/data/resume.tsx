import { Icons } from "@/components/icons";
import { HomeIcon, Icon, NotebookIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Sagar Manchakatla",
  initials: "SM",
  url: "https://sagar-manchakatla.vercel.app", // Update with your actual portfolio URL
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Full Stack Developer & AIML Enthusiast. Passionate about building intelligent systems.",
  summary:
    "I'm a **Computer Engineering** student with a strong foundation in **full-stack development** and **AIML technologies**. With experience spanning **frontend development, backend microservices, and AI system integration**, I've built systems handling thousands of daily interactions while optimizing performance and reducing costs. I've also had the privilege of mentoring **200+ students** in **Python** and **web technologies**, helping them build **real-world projects**. My work focuses on creating scalable, efficient solutions that bridge the gap between cutting-edge AI research and practical applications.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Machine Learning",
    "Computer Vision",
    "CrewAi",
    "Langchain",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    {
      href: "/sagar_manchakatla_raw.pdf",
      icon: FileTextIcon,
      label: "Resume",
      external: true,
    },
  ],
  hackathons: [
    {
      title: "NFC - Thadomal Shahani Engineering College",
      dates: "2024",
      location: "Mumbai, India",
      description:
        "Developed a Web application that connects Old age homes and NGOs with people and organizations that are willing to donate.",
      image: "/hackathons/nfc.webp",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sagar-manchakatla/nfc-hackathon",
        },
      ],
    },
    {
      title: "Codenaissance - Thadomal Shahani Engineering College",
      dates: "2024",
      location: "Mumbai, India",
      description:
        "Developed an application for disabled people that will help them travel. Focused on accessibility and mobility solutions.",
      image: "/hackathons/codeissance.webp",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sagar-manchakatla/codenaissance",
        },
      ],
    },
    {
      title: "Bit N Build Around The World",
      dates: "October 2024",
      location: "Virtual",
      description:
        "Participated in global hackathon focusing on innovative solutions using cutting-edge technologies.",
      image: "/hackathons/bit-n-builf.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/sagar-manchakatla",
        },
      ],
    },
    {
      title: "Rubixs Hackathon - Thadomal Shahani Engineering College",
      dates: "January 2025",
      location: "Mumbai, India",
      description:
        "Developed House Finder with 3D virtualization, locality scoring, housing schemes finder, integrated with AI and ML models for intelligent property recommendations.",
      image: "/hackathons/csi.png",
      win: "Finalist",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sagar-manchakatla/rubixs-house-finder",
        },
      ],
    },
    {
      title: "Unplugged 2.0 - DJ Sanghvi",
      dates: "2024",
      location: "Mumbai, India",
      description:
        "Hardware hackathon focused on Traffic Management System using IoT and embedded systems for smart city solutions.",
      image: "/hackathons/unplug.webp",
      win: "Finalist",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sagar-manchakatla/traffic-management-hardware",
        },
      ],
    },
    {
      title: "Tech-a-Thon - Thadomal Shahani Engineering College",
      dates: "2024",
      location: "Mumbai, India",
      description:
        "Hardware Hackathon focused on Crop Classification using computer vision and IoT sensors for agricultural automation.",
      image: "/hackathons/tech-a-thon.jpeg", // Update with actual image path
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sagar-manchakatla/crop-classification", // Update with actual GitHub URL
        },
      ],
    },
    {
      title: "Puch AI Hackathon",
      dates: "2024",
      location: "Virtual",
      description:
        "Developed an MCP server that connects restaurants with NGOs, enabling restaurants to sell/donate their leftover food. Integrated with WhatsApp and NLP processing for seamless communication.",
      image: "/hackathons/puch_ai.png", // Update with actual image path
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sagar-manchakatla/puch-ai-hackathon", // Update with actual GitHub URL
        },
      ],
    },
    {
      title: "Hacksync - Thadomal Shahani Engineering College",
      dates: "March 2025",
      location: "Mumbai, India",
      description:
        "Developed a comprehensive life management application that manages personal and professional life, calendar scheduling, re-scheduling, exercise suggestions, and Pomodoro technique integration.",
      image: "/hackathons/gdg.png", // Update with actual image path
      win: "Finalist",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sagar-manchakatla/hacksync", // Update with actual GitHub URL
        },
      ],
    },
    {
      title: "Hackspark - Thakur College",
      dates: "March 2025",
      location: "Mumbai, India",
      description:
        "Developed a web and mobile application that connects with smart watches and health machines to monitor and manage users' health. Includes period tracking for women and integration with Amazon Alexa for real-time assistance.",
      image: "/hackathons/hackspark.jpeg", // Update with actual image path
      win: "Finalist",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sagar-manchakatla/hackspark-health", // Update with actual GitHub URL
        },
      ],
    },
    {
      title: "TSEC Hacks - Thadomal Shahani Engineering College",
      dates: "2024",
      location: "Mumbai, India",
      description:
        "Built Social Media Pipeline with automated thumbnail generator, content idea suggestions, and automatic upload to YouTube, Twitter, Facebook, and Instagram platforms.",
      image: "/hackathons/codecell.png", // Update with actual image path
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sagar-manchakatla/social-media-pipeline", // Update with actual GitHub URL
        },
      ],
    },
    {
      title: "ScrollHacks",
      dates: "2024",
      location: "Virtual",
      description:
        "Developed FinTech application featuring crowd funding platform, finance learning platform with AI-powered quizzes and personalized financial education content.",
      image: "/hackathons/scrollhacks.png", // Update with actual image path
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sagar-manchakatla/scrollhacks-fintech", // Update with actual GitHub URL
        },
      ],
    },
  ],
  contact: {
    email: "sagarmanchakatla01@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sagarmanchakatla", // Update with your actual GitHub URL
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sagar-manchakatla",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Sagar_8745", // Update with your actual Twitter/X URL if available
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sagarmanchakatla01@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Lonely Bags",
      href: "https://lonelybags.com", // Update with actual company URL if available
      badges: [],
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/lonely-bag.png", // Update with actual logo path
      start: "Jul 2025",
      end: "Sep 2025",
      description:
        "Developed and maintained responsive, user-friendly web pages ensuring consistent UI/UX design. Implemented key frontend features including pagination, cookie management, secure authentication, and debouncing mechanisms. Converted Figma prototypes into optimized React components and enhanced performance through code splitting and lazy loading.",
    },
    {
      company: "Converse AI Labs",
      href: "https://converseailabs.com", // Update with actual company URL if available
      badges: [],
      location: "Remote",
      title: "Full Stack Intern",
      logoUrl: "/converse-ai.jpeg", // Update with actual logo path
      start: "Aug 2025",
      end: "Jul 2025",
      description:
        "Engineered backend microservices using FastAPI and PostgreSQL, reducing API latency by 30% and supporting 1K+ concurrent users. Automated multi-industry AI lead qualification workflows, cutting manual effort by 40%. Built custom WebSocket servers for LLM-based real-time conversations handling 5K+ daily interactions and integrated Portkey.ai to optimize LLM usage costs.",
    },
    {
      company: "Static Int. Educare",
      href: "https://staticinteducare.com", // Update with actual company URL if available
      badges: [],
      location: "Mumbai, India",
      title: "MERN and Python Mentor",
      logoUrl: "/static-int.jpeg", // Update with actual logo path
      start: "Jul 2024",
      end: "Jul 2024",
      description:
        "Mentored 200+ students in Python, data science (NumPy, Pandas, Matplotlib, Streamlit) with 90% project completion rate. Delivered hands-on MERN stack and Python training enabling 10+ student projects. Conducted web development workshops that improved student skill assessments by 25%.",
    },
    {
      company: "Afility Engineering Pvt Ltd",
      href: "https://afilityengineering.com/", // Update with actual company URL if available
      badges: [],
      location: "Mumbai, India",
      title: "Instrumentation Intern",
      logoUrl: "/afility.jpeg", // Update with actual logo path
      start: "Jan 2023",
      end: "Jun 2023",
      description:
        "As part of my final-year diploma at Government Polytechnic, Mumbai, I completed a comprehensive 6-month inplant training at Afility Engineering Pvt. Ltd., a leading EPC (Engineering Procurement and Construction) company. During this internship, I gained hands-on experience in the core areas of instrumentation and control systems.",
    },
  ],
  education: [
    {
      school: "Thadomal Shahani Engineering College",
      href: "https://tsec.edu/",
      degree: "B.E. in Computer Engineering | CGPA: 9.34",
      logoUrl: "/thadomal.jpeg", // Update with actual logo path
      start: "2023",
      end: "2026",
    },
    {
      school: "Government Polytechnic",
      href: "https://gpmumbai.ac.in", // Update with actual institution URL
      degree: "Diploma in Instrumentation Engineering | 94%",
      logoUrl: "/gpm.png", // Update with actual logo path
      start: "2020",
      end: "2023",
    },
    {
      school: "Our Lady of Salvation High School",
      href: "https://www.justdial.com/Mumbai/Our-Lady-Of-Salvation-High-School-Opposite-Portugues-Church-Dadar-West/022P7700730_BZDET", // Update with actual institution URL
      degree: "SSC | 84%",
      logoUrl: "/school.webp", // Update with actual logo path
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Multi-Agent Context Writer",
      href: "https://github.com/sagarmanchakatla/multi_agent_content_pipeline", // Update with actual GitHub URL
      dates: "2024",
      active: true,
      description:
        "Orchestrated multi-agent system using CrewAI with specialized agents for automated content generation. Integrated Gemini LLM for advanced NLP capabilities and developed FastAPI backend to serve the system with RESTful API endpoints.",
      technologies: ["CrewAI", "Gemini LLM", "FastAPI", "Python"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sagarmanchakatla/multi_agent_content_pipeline",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // image: "/projects/multi_agent.jpg",
      video: "/projects/multi_agent.mp4", // Add demo video if available
    },
    {
      title: "RAG DSS for FRA Rules",
      href: "https://github.com/sagar-manchakatla/rag-dss-fra", // Update with actual GitHub URL
      dates: "2024",
      active: true,
      description:
        "Developed Retrieval-Augmented Generation Decision Support System for FRA rules using Pinecone vector database. Implemented semantic search capabilities for accessing relevant regulations and built FastAPI backend with LLM integration for accurate, context-aware regulatory queries.",
      technologies: ["Pinecone", "RAG", "Python", "FastAPI", "LLM Integration"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sagar-manchakatla/rag-dss-fra",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/fra.mp4", // Add demo video if available
    },
    {
      title: "Traffic Management System",
      href: "https://github.com/sagar-manchakatla/traffic-management", // Update with actual GitHub URL
      dates: "2024",
      active: true,
      description:
        "Built AI-driven adaptive traffic signal management system using YOLO-based vehicle detection and real-time computer vision. Implemented Flask backend with WebSocket integration for real-time traffic flow optimization and manual interventions.",
      technologies: ["Python", "YOLO", "Flask", "WebSocket", "Computer Vision"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sagar-manchakatla/traffic-management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/traffic.mp4", // Add demo video if available
    },
    {
      title: "Moodify",
      href: "",
      dates: "2024",
      mobile: true,
      active: true,
      description:
        "Built an AI-powered app using DeepFace-based emotion recognition with 90% accuracy. Designed a cosine similarity ML model to recommend playlists tailored to mood + preferences. Integrated YouTube API for streaming and Supabase for low-latency data storage. Enabled dynamic playlist generation, increasing engagement by 30%.",
      technologies: ["React Native", "Expo", "JavaScript", "Sklearn"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sagarmanchakatla/Moodify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/moodify.mp4", // Add demo video if available
    },
    {
      title: "Balance Life",
      href: "https://github.com/sagar-manchakatla/balance-life", // Update with actual GitHub URL
      dates: "2024",
      active: true,
      description:
        "Developed a comprehensive life management application that manages personal and professional life, calendar scheduling, re-scheduling, exercise suggestions, and Pomodoro technique integration.",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Flask api", "AIML"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sagar-manchakatla/balance-life",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/balance.mp4",
    },
    {
      title: "Connect.io",
      href: "https://github.com/sagar-manchakatla/connect-io", // Update with actual GitHub URL
      dates: "2024",
      active: true,
      description:
        "Created secure video conferencing platform with encrypted chat, attendance tracking, and recording capabilities supporting 200+ active users. Integrated Stream SDK enabling sub-200ms latency video calls with calendar scheduling features.",
      technologies: ["Next.js", "Stream SDK", "Node.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/sagar-manchakatla/connect-io",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/connect.png",
      video: "", // Add demo video if available
    },
  ],
  achievements: [
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      date: "2024",
      description:
        "Official Microsoft certification demonstrating foundational knowledge of cloud services and Azure ecosystem.",
      href: "https://www.credly.com/badges/d42b3223-d79a-42a6-a3ab-9b39176ac7da/linked_in_profile",
      icon: "/certification/azure.png",
    },
    {
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      date: "2024",
      description:
        "Oracle certification validating expertise in AI and machine learning concepts on OCI platform.",
      href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=298908375898DF52337A01D22F811D1722204366B1284BFD24869DF3E53347F6",
      icon: "/certification/oracle.jpg",
    },
    {
      title: "Hackathon Winner: Travel-Ease at Codeissance, TSEC",
      date: "2024",
      description:
        "Won first place for developing an innovative travel solution at college hackathon.",
      href: "/",
      icon: "/hackathons/codeissance.webp",
    },
  ],
};
