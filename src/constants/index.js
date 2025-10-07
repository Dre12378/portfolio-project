export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Creations',
        href: '#creations',
    },
    {
        id: 4,
        name: 'Work',
        href: '#work',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const colleagueReviews = [
    {
        id: 1,
        name: 'John Lebarios',
        position: 'Package Application Developer at Accenture',
        img: 'assets/laurence.jpg',
        review:
            'Working with Andre was great! I acknowledge him for his exceptional performance as a colleague and a friend, His dedication and demeanor makes a significant impact around him in Work and as a person.',
    },
    {
        id: 2,
        name: 'Cris Fernandez',
        position: 'Quality Analyst in SEO Hacker',
        img: 'assets/cris-avatar.png',
        review:
            'I had the pleasure of working with one of the most talented and genuine colleagues I’ve ever met. His strong work knowledge, skills, and great personality made him not only a valuable teammate but also a good friend outside of work.s',
    },
    {
        id: 3,
        name: 'Mike Dorio',
        position: 'Senior Web Developer at SEO Hacker',
        img: 'assets/mike-avatar.jpg',
        review:
            'I’ve had the chance to work with Andre as his senior, and even in a short period of time he has shown impressive growth and initiative. He is innovative, quick to pick up new things, and very proactive in his work. He’s not afraid to ask questions and makes sure to seek validation before finalizing outputs that may have a big impact, which shows both responsibility and maturity. Andre is also easy to collaborate with, adaptable, and brings a positive energy to the team, making him a great teammate to work alongside.',
    },
    {
        id: 4,
        name: 'Mikke Degala',
        position: 'Security Analyst at Accenture',
        img: 'assets/Mikke-review.jpg',
        review:
            'It was a pleasure working with Andre at Accenture. In a fast-paced environment, he consistently proved to be a quick study and a reliable teammate. What really stands out is his proactive approach to problem-solving and his genuine willingness to support his colleagues. He\'s a sharp, adaptable developer with a great attitude, and he would be a valuable asset to any team.',
    },
];

export const myProjects = [
    {
        title: 'Sentiment Analysis',
        desc: 'A high-performance, serverless REST API for real-time sentiment analysis of financial news headlines, tailored for accuracy in a financial services context.',
        subdesc:
            'In the fast-paced world of finance, market sentiment can shift in minutes based on breaking news. This project provides a robust and scalable solution to automatically classify financial text as positive, negative, or neutral.',
        href: 'https://sentiment-analysis-beta.streamlit.app/',
        texture: 'textures/project/project4.mp4',
        logo: 'assets/analysis.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: 'assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg',
            },
            {
                id: 2,
                name: 'Streamlit',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg',
            },
            {
                id: 3,
                name: 'FastAPI',
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-plain.svg',
            },
            {
                id: 4,
                name: 'Hugging Face',
                path: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
            },
        ],
    },
    {
        title: 'Movie App',
        desc: 'Built using React.js for the user interface, Appwrite for the Trending Movies algorithm (MovieDB) and API, and styled with Tailwind CSS, Movie App is my project that was dedicated to learn the fundamentals for react',
        subdesc:
            'The app provides a clean and modern experience for browsing and discovering movies. It features a simple search bar and a built-in checker to display the trending movies currently being searched on the platform',
        href: 'https://dre12378.github.io/movie-project/',
        texture: 'textures/project/projectmovie.mp4',
        logo: 'assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: 'assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: 'assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'AppWrite',
                path: 'assets/appwrite.png',
            },
            {
                id: 4,
                name: 'Movie DB',
                path: 'assets/movieDB.png',
            },
        ],
    },
    {
        title: 'Megaworld BGC',
        desc: 'Developed a bespoke WordPress website for a premier real estate client to showcase luxury properties in Bonifacio Global City. The site serves as a primary digital channel for marketing and lead generation and SEO Ranking.',
        subdesc:
            'I implemented a custom WordPress solution from the ground up, featuring unique post types for properties and powerful custom fields that allow the client to update content effortlessly. The result is a seamless, informative platform that effectively connects potential investors with their future properties.',
        href: 'https://www.megaworld-bgc.com/',
        texture: 'textures/project/project2.mp4',
        logo: 'assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: 'assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: 'assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: 'assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: 'assets/framer.png',
            },
        ],
    },
    {
        title: 'Facial Care Centre',
        desc: 'Provided comprehensive web development and technical maintenance for the official website of a leading national skincare clinic. My primary role was to ensure the site remained secure, functional, and up-to-date with fresh content for SEO Ranking.',
        subdesc:
            'Responsibilities included creating new posts and service pages, implementing custom back-end PHP snippets to enhance database queries, and hardening site security through strategic plugin deployment. I also handled critical troubleshooting, such as resolving issues with the contact form to maintain vital lead generation channels.',
        href: 'https://www.facialcarecentre.com.ph',
        texture: 'textures/project/project3.mp4',
        logo: 'assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: 'assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: 'assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: 'assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: 'assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? .8 : isMobile ? 1.2 : 1.5,
        cubeScale: isMobile ? 1.2 : 1,
        targetScale: isSmall ? 1.9 : isMobile ? 2 : 2.5,
        deskPosition: isMobile ? [0, -0.5, 0] : [0, -2.3, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [10, -5.5, 10],
        reactLogoPosition: isSmall ? [5, 5, 0] : isMobile ? [8.5, 4, 4] : isTablet ? [10, 4, 8] : [12, 3, 8],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-21, 9.5, 1],
        targetPosition: isSmall ? [-6, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-19, -14, -3],
    };
};
export const workExperiences = [
    {
        id: 1,
        name: "SEO Hacker",
        pos: "Junior Web Developer",
        duration: "May 2025 - Present",
        title: "Leveraged WordPress to build and maintain dynamic client websites, focusing on custom theme development and plugin integration. Drove innovation by exploring and implementing new web technologies and performance optimization techniques to enhance site speed and user engagement. Collaborated in an Agile environment to efficiently deliver new features and improvements.",
        icon: "assets/SEO-Hacker.png",
        animation: "salute"
    },
    {
        id: 1,
        name: 'Accenture',
        pos: 'SW/App/Cloud Tech Support Associate',
        duration: 'Febuary 2024 - May 2025',
        title: "I specialize in troubleshooting complex system issues, optimizing application performance, and ensuring seamless cloud operations. I provide technical solutions that enhance efficiency, minimize downtime, and improve user experience.",
        icon: 'assets/acn-logo.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'STI College',
        pos: 'IT Instructor',
        duration: '2023 - 2024',
        title: "I specialize in teaching Object-Oriented Programming (OOP), Java, Python, IT Service Management, and Mobile & Web Development. I mentor students in building strong technical foundations, applying industry best practices, and developing real-world problem-solving skills.",
        icon: 'assets/sti-logo.png',
        animation: 'clapping',
    }
];