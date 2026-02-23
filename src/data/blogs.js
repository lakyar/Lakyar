export const blogData = [
  {
    id: 1,
    slug: "how-i-built-and-optimized-my-portfolio-website",
    title: "How I Built and Optimized My Portfolio Website",
    cover:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format",
    date: "2026-02-23",
    readTime: 5,
    excerpt:
      "A deep dive into how I built my portfolio using React, Vite, Tailwind CSS, and GSAP — including architecture decisions, performance optimizations, and the bugs that nearly broke me.",
    content: [
      {
        type: "paragraph",
        text: "I built this portfolio to showcase the projects I've worked on — and to create something genuinely cool for myself.",
      },
      {
        type: "paragraph",
        text: "My goals were straightforward:",
      },
      {
        type: "list",
        text: [
          "A modern, clean UI",
          "Strong performance",
          "A smooth, responsive experience",
        ],
      },
      {
        type: "paragraph",
        text: "The target audience is recruiters, clients, and fellow developers who want to evaluate both my technical execution and design thinking.",
      },
      {
        type: "paragraph",
        text: "Although I had been planning this portfolio since 2025, I only began building it seriously in February 2026. It took approximately seven focused working days. I pushed every feature section-by-section and commit-by-commit, using technologies I am already comfortable with to maximize execution quality.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format",
        caption: "",
      },

      {
        type: "heading1",
        text: "Tech Stack Overview",
      },

      {
        type: "heading2",
        text: "React",
      },
      {
        type: "paragraph",
        text: "React provides a clean component-based architecture. It allows reusable sections, controlled state management, and dynamic routing for project and blog pages. The structure keeps the codebase modular and scalable.",
      },

      {
        type: "heading2",
        text: "Vite",
      },
      {
        type: "paragraph",
        text: "Vite significantly improves developer experience with instant dev server startup, fast hot module replacement, and optimized production builds. The lightweight configuration keeps the project minimal and efficient.",
      },

      {
        type: "heading2",
        text: "Tailwind CSS",
      },
      {
        type: "paragraph",
        text: "Tailwind CSS is my preferred styling framework. The utility-first approach enables rapid UI development while maintaining consistent spacing, typography, and layout control across the entire project.",
      },

      {
        type: "heading2",
        text: "GSAP + ScrollTrigger + Lenis",
      },
      {
        type: "paragraph",
        text: "GSAP (GreenSock Animation Platform) handles scroll-triggered animations with precise timing control. ScrollTrigger synchronizes animations with viewport position, while Lenis provides smooth scrolling to ensure animation fluidity.",
      },

      {
        type: "heading2",
        text: "EmailJS",
      },
      {
        type: "paragraph",
        text: "The contact form uses EmailJS to send messages directly to my inbox without a backend server.",
      },

      {
        type: "heading1",
        text: "Architecture & Structure",
      },
      {
        type: "paragraph",
        text: "The project follows a clean and minimal folder structure:",
      },
      {
        type: "paragraph",
        text: "src/ → assets, components, data, layouts, pages, sections, App.jsx",
      },
      {
        type: "paragraph",
        text: "Dynamic routing is implemented using slug-based routes for projects and blog posts. The layout system ensures shared components like navigation and footer remain consistent across pages.",
      },

      {
        type: "heading1",
        text: "Features Implemented",
      },
      {
        type: "list",
        text: [
          "Lazy-loaded routes",
          "Loading components",
          "Error pages and fallback handling",
          "Skeleton image loading effects",
          "Responsive layout across all screen sizes",
          "Dark and light mode support",
          "Scroll-based animations",
          "Smooth scrolling integration",
        ],
      },
      {
        type: "paragraph",
        text: "I intentionally avoided using a database or CMS for blog content. Images are hosted via ImgBB, while the remaining content is stored locally within the project. This approach ensures faster load times and greater reliability. In Myanmar, certain external services and network routes can be unstable or blocked, so minimizing third-party dependencies significantly improves overall stability.",
      },

      {
        type: "heading1",
        text: "Performance Optimization",
      },
      {
        type: "paragraph",
        text: "Performance testing was done using Lighthouse in production build mode. ",
      },
      {
        type: "list",
        text: [
          "Route-based code splitting",
          "Lazy image loading",
          "Reduced layout shifts",
          "Optimized asset delivery",
          "Minimal third-party dependencies",
        ],
      },

      {
        type: "heading1",
        text: "Challenges & Struggles",
      },
      {
        type: "heading2",
        text: "The Footer Glitch",
      },
      {
        type: "paragraph",
        text: "One persistent issue was a millisecond footer flash during page transitions. The footer rendered faster than other components, creating a visible glitch. I attempted multiple fixes using CSS restructuring, animation adjustments, GSAP tweaks, and even testing alternative animation libraries. After hours of debugging, I accepted that the issue was extremely minor and not noticeable unless intentionally observed. I adjusted background styling to reduce visual impact. If someone finds a clean architectural solution, I welcome a pull request.",
      },
      {
        type: "link",
        text: "Repo Link",
        url: "https://github.com/lakyar/Lakyar",
      },
      {
        type: "heading2",
        text: "Deployment Issues",
      },
      {
        type: "paragraph",
        text: "Deployment to Vercel introduced additional challenges. Due to limited DevOps experience, troubleshooting took several hours. The root causes included file path casing mismatches and ESLint version conflicts. After correcting casing inconsistencies and adjusting dependencies, deployment succeeded.",
      },

      {
        type: "heading1",
        text: "Final Thoughts",
      },
      {
        type: "paragraph",
        text: "I completed this website and wrote this blog post on the evening of February 23, 2026. This project reinforced the importance of production testing, controlled animation usage, and understanding deployment workflows. The portfolio represents my current level and will continue evolving as I improve.",
      },
    ],
    tags: ["React", "Vite", "Tailwind", "GSAP", "Portfolio"],
    author: {
      name: "Lakyar",
      avatar: "/images/avatar.jpg",
    },
  },
];
// {
//   id: 2,
//   slug: "mastering-gsap-scroll-animations",
//   title: "Mastering GSAP Scroll Animations for Modern Websites",
//   cover:
//     "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format",
//   date: "2024-02-28",
//   readTime: 7,
//   views: 892,
//   excerpt:
//     "A comprehensive guide to creating stunning scroll-based animations with GSAP ScrollTrigger. Learn how to make your website stand out.",
//   content: [
//     {
//       type: "paragraph",
//       text: "Scroll animations can transform a static website into an engaging experience. In this post, I'll share my journey mastering GSAP's ScrollTrigger plugin and the techniques I use in my projects.",
//     },
//     {
//       type: "image",
//       src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format",
//       caption: "ScrollTrigger timeline visualization",
//     },
//     {
//       type: "heading",
//       text: "Getting Started with ScrollTrigger",
//     },
//     {
//       type: "paragraph",
//       text: "ScrollTrigger allows you to link animations to scroll progress. The key concepts are triggers, start/end points, and scrubbing. I'll walk you through creating fade-in effects, parallax scrolling, and pinned sections.",
//     },
//   ],
//   tags: ["GSAP", "Animation", "JavaScript"],
//   author: {
//     name: "Lakyar",
//     avatar: "/images/avatar.jpg",
//   },
// },
// {
//   id: 3,
//   slug: "tailwind-v4-whats-new",
//   title: "Tailwind CSS v4: What's New and Why You Should Upgrade",
//   cover:
//     "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format",
//   date: "2024-02-10",
//   readTime: 4,
//   views: 2105,
//   excerpt:
//     "Explore the exciting new features in Tailwind CSS v4 including CSS variables, improved performance, and new utilities.",
//   content: [
//     {
//       type: "paragraph",
//       text: "Tailwind CSS v4 introduces a ton of improvements that make styling even more enjoyable. Let's dive into the most important changes and how they affect your workflow.",
//     },
//   ],
//   tags: ["Tailwind", "CSS", "Web Development"],
//   author: {
//     name: "Lakyar",
//     avatar: "/images/avatar.jpg",
//   },
// },
// {
//   id: 4,
//   slug: "react-compiler-optimization",
//   title: "React Compiler: Automatic Performance Optimization",
//   cover:
//     "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format",
//   date: "2024-01-25",
//   readTime: 6,
//   views: 1567,
//   excerpt:
//     "Learn how React 19's new compiler eliminates the need for useMemo and useCallback, making your code cleaner and faster.",
//   content: [
//     {
//       type: "paragraph",
//       text: "The React Compiler is a game-changer for performance optimization. It automatically memoizes your components, meaning you can focus on writing code without worrying about premature optimizations.",
//     },
//   ],
//   tags: ["React", "Performance", "JavaScript"],
//   author: {
//     name: "Lakyar",
//     avatar: "/images/avatar.jpg",
//   },
// },
// {
//   id: 5,
//   slug: "building-anime-streaming-ui",
//   title: "Building an Anime Streaming UI with Alpine.js",
//   cover:
//     "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format",
//   date: "2023-12-12",
//   readTime: 8,
//   views: 3456,
//   excerpt:
//     "A case study on building Oni-Chan, an anime streaming platform UI using Alpine.js and Tailwind CSS.",
//   content: [
//     {
//       type: "paragraph",
//       text: "Oni-Chan was a fun project that combined my love for anime with my development skills. Here's how I built a Netflix-style anime streaming interface using Alpine.js for interactivity.",
//     },
//   ],
//   tags: ["Alpine.js", "Tailwind", "Anime", "UI Design"],
//   author: {
//     name: "Lakyar",
//     avatar: "/images/avatar.jpg",
//   },
// },

// {
//   type: "hr",
// },
// {
//   type: "br",
// },
