const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

// const blogPosts = [
//     {
//         id: 1,
//         date: "Sep 2, 2025",
//         title:
//             "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
//         image: "/images/blog1.png",
//         link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
//     },
//     {
//         id: 2,
//         date: "Aug 28, 2025",
//         title: "The Ultimate Guide to Mastering Three.js for 3D Development",
//         image: "/images/blog2.png",
//         link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
//     },
//     {
//         id: 3,
//         date: "Aug 15, 2025",
//         title: "The Ultimate Guide to Mastering GSAP Animations",
//         image: "/images/blog3.png",
//         link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
//     },
// ];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Bootstrap", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Django", "Flask"],
    },
    {
        category: "Database",
        items: ["MongoDB", "SQLite", "MySQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Firebase", "Vite"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/anirudh-satheesh",
    },
    {
        id: 2,
        text: "WhatsApp",
        icon: "/icons/whatsapp.svg",
        bg: "#4bcb63",
        link: "https://wa.me/918754055591",
    },
    {
        id: 3,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/cjb-anirudh",
    },
    // {
    //     id: 4,
    //     text: "Twitter/X",
    //     icon: "/icons/twitter.svg",
    //     bg: "#ff866b",
    //     link: "https://x.com/jsmasterypro",
    // },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/sih2k23.png",
    },
    {
        id: 2,
        img: "/images/vcet2k24.jpg",
    },
    {
        id: 3,
        img: "/images/sih2k24.png",
    }
];

export {
    navLinks,
    navIcons,
    dockApps,
    // blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "AI-based Career Roadmap Generator",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-10", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "AI-Roadmap.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-5",
                    description: [
                        "Kaizen (Meaning - continuous improvement) is an AI-powered personalized learning roadmap engine designed to guide users based on their goals and current skill level.",
                        "The system analyzes user inputs and generates structured, step-by-step learning paths tailored to individual needs.",
                        "It transforms complex learning journeys into simple, visually organized roadmaps, helping users stay focused and avoid confusion.",
                        "Whether starting from scratch or advancing in a new domain, it provides clear direction through adaptive and easy-to-follow progression paths.",
                        "Built using Next.js and Tailwind CSS, it ensures fast performance, responsive design, and a clean, modern user experience.",
                    ],
                },
                {
                    id: 2,
                    name: "nike.com (upcoming)",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "",
                    position: "top-10 left-50",
                },
                {
                    id: 4,
                    name: "Roadmap.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-10 right-10",
                    imageUrl: "/images/roadmap.png",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "AI Resume Analyzer - Resumemind",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-55",
            windowPosition: "top-[20vh] left-5",
            children: [
                {
                    id: 1,
                    name: "AI Resume Analyzer Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-5",
                    description: [
                        "AI Resume Analyzer is a simple but powerful tool that helps you perfect your resume with instant feedback.",
                        "Instead of guessing what HR wants, it shows you the right keywords, fixes formatting issues, and highlights what actually makes your resume stand out.",
                        "Basically, it works like a personal career assistant—pointing out what’s good, what’s not, and how to improve it for better interview chances.",
                        "It's built with Next.js and Tailwind, so it runs fast, and works seamlessly on any device — exactly how a modern tool should feel.",
                    ],
                },
                {
                    id: 2,
                    name: "ai-resume-analyzer.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://resumemindai.vercel.app/",
                    position: "top-10 left-50",
                },
                {
                    id: 3,
                    name: "ai-resume-analyzer.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-10 right-10",
                    imageUrl: "/images/ai-resume.png",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Workout Tracker App - Strive",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 right-5",
            windowPosition: "top-[35vh] left-5",
            children: [
                {
                    id: 1,
                    name: "Workout Tracker App.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-10",
                    description: [
                        "Strive is a simple, clean, and effective workout tracker built for anyone who wants to stay consistent with their fitness goals.",
                        "It helps you log workouts, track progress, and stay accountable—without all the unnecessary clutter most fitness apps have.",
                        "Whether you're lifting, running, or just starting out, Strive makes it easy to see how far you’ve come and what to improve next.",
                        "Designed with a smooth UI and user-friendly features, it focuses on what matters: helping you build habits and stay on track.",
                    ],
                },
                {
                    id: 2,
                    name: "Strive.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://strive-gym.vercel.app/",
                    position: "top-10 left-55",
                },
                {
                    id: 3,
                    name: "Strive.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-10 right-10",
                    imageUrl: "/images/strive.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/anirudh.png",
        },
        {
            id: 2,
            name: "me-2.0.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-50",
            imageUrl: "/images/anirudh-2.png",
        },
        {
            id: 3,
            name: "hackathon-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 right-10",
            imageUrl: "/images/vcet2k24.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-40 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/anirudh.png",
            description: [
                "Hey! I’m Anirudh 👋, a web developer who loves building clean, fast, and modern web experiences.",
                "I mainly work with JavaScript, React, and Next.js, and I’m all about smooth UI, simple UX, and writing code that doesn’t make future-me cry.",
                "I enjoy turning ideas into real, functional products and making them look good while I’m at it.",
                "And when I’m not coding, you’ll probably find me experimenting with new designs, obsessing over tiny UI details, or fixing something that was ‘working fine’ a minute ago 😅.",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            position: "top-10 left-5",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-40",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };