// data/blogs.js
export const blogData = [
  {
    id: 1,
    slug: "building-modern-portfolio-with-react",
    title: "Building a Modern Portfolio with React & Tailwind",
    cover:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format",
    date: "2024-03-15",
    readTime: 5,
    views: 1243,
    excerpt:
      "How I built my portfolio website using React 19, Tailwind CSS v4, and GSAP for smooth animations. A deep dive into the tech stack and design decisions.",
    content: [
      {
        type: "paragraph",
        text: "When I decided to rebuild my portfolio, I wanted something that truly represented my skills and personality. The result is a minimalist yet powerful website that showcases my work while providing a smooth user experience.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format",
        caption: "The initial wireframes and design system",
      },
      {
        type: "paragraph",
        text: "I chose React 19 for its component architecture and the new React Compiler which automatically optimizes re-renders. Tailwind CSS v4 made styling a breeze with its utility-first approach and JIT compiler.",
      },
      {
        type: "heading",
        text: "Key Technical Decisions",
      },
      {
        type: "paragraph",
        text: "GSAP (GreenSock Animation Platform) was my go-to for scroll-triggered animations. Combined with Lenis for smooth scrolling, the result feels buttery smooth. I also implemented lazy loading for images and route-based code splitting to keep initial load times minimal.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format",
        caption: "Code structure and component organization",
      },
    ],
    tags: ["React", "Tailwind", "GSAP", "Portfolio"],
    author: {
      name: "Lakyar",
      avatar: "/images/avatar.jpg",
    },
  },
  {
    id: 2,
    slug: "mastering-gsap-scroll-animations",
    title: "Mastering GSAP Scroll Animations for Modern Websites",
    cover:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format",
    date: "2024-02-28",
    readTime: 7,
    views: 892,
    excerpt:
      "A comprehensive guide to creating stunning scroll-based animations with GSAP ScrollTrigger. Learn how to make your website stand out.",
    content: [
      {
        type: "paragraph",
        text: "Scroll animations can transform a static website into an engaging experience. In this post, I'll share my journey mastering GSAP's ScrollTrigger plugin and the techniques I use in my projects.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format",
        caption: "ScrollTrigger timeline visualization",
      },
      {
        type: "heading",
        text: "Getting Started with ScrollTrigger",
      },
      {
        type: "paragraph",
        text: "ScrollTrigger allows you to link animations to scroll progress. The key concepts are triggers, start/end points, and scrubbing. I'll walk you through creating fade-in effects, parallax scrolling, and pinned sections.",
      },
    ],
    tags: ["GSAP", "Animation", "JavaScript"],
    author: {
      name: "Lakyar",
      avatar: "/images/avatar.jpg",
    },
  },
  {
    id: 3,
    slug: "tailwind-v4-whats-new",
    title: "Tailwind CSS v4: What's New and Why You Should Upgrade",
    cover:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format",
    date: "2024-02-10",
    readTime: 4,
    views: 2105,
    excerpt:
      "Explore the exciting new features in Tailwind CSS v4 including CSS variables, improved performance, and new utilities.",
    content: [
      {
        type: "paragraph",
        text: "Tailwind CSS v4 introduces a ton of improvements that make styling even more enjoyable. Let's dive into the most important changes and how they affect your workflow.",
      },
    ],
    tags: ["Tailwind", "CSS", "Web Development"],
    author: {
      name: "Lakyar",
      avatar: "/images/avatar.jpg",
    },
  },
  {
    id: 4,
    slug: "react-compiler-optimization",
    title: "React Compiler: Automatic Performance Optimization",
    cover:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format",
    date: "2024-01-25",
    readTime: 6,
    views: 1567,
    excerpt:
      "Learn how React 19's new compiler eliminates the need for useMemo and useCallback, making your code cleaner and faster.",
    content: [
      {
        type: "paragraph",
        text: "The React Compiler is a game-changer for performance optimization. It automatically memoizes your components, meaning you can focus on writing code without worrying about premature optimizations.",
      },
    ],
    tags: ["React", "Performance", "JavaScript"],
    author: {
      name: "Lakyar",
      avatar: "/images/avatar.jpg",
    },
  },
  {
    id: 5,
    slug: "building-anime-streaming-ui",
    title: "Building an Anime Streaming UI with Alpine.js",
    cover:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format",
    date: "2023-12-12",
    readTime: 8,
    views: 3456,
    excerpt:
      "A case study on building Oni-Chan, an anime streaming platform UI using Alpine.js and Tailwind CSS.",
    content: [
      {
        type: "paragraph",
        text: "Oni-Chan was a fun project that combined my love for anime with my development skills. Here's how I built a Netflix-style anime streaming interface using Alpine.js for interactivity.",
      },
    ],
    tags: ["Alpine.js", "Tailwind", "Anime", "UI Design"],
    author: {
      name: "Lakyar",
      avatar: "/images/avatar.jpg",
    },
  },
];
