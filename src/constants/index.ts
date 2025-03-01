import { HomeIcon, LayersIcon, PersonIcon } from "@radix-ui/react-icons"

export const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    icon: LayersIcon,
  },
  {
    label: "About",
    href: "/about",
    icon: PersonIcon,
  },
]

export const contacts = [
  {
    label: "Github",
    iconURL: "/icons/github.svg",
    link: "https://github.com/janleven01",
  },
  // {
  //   label: "LinkedIn",
  //   iconURL: "/icons/linkedin.svg",
  //   link: "https://www.linkedin.com/in/janleven01",
  // },
]

export const techStack = [
  {
    id: 1,
    name: "HTML5",
    image: "/icons/html.svg",
  },
  {
    id: 2,
    name: "CSS3",
    image: "/icons/css.svg",
  },
  {
    id: 3,
    name: "Javascript",
    image: "/icons/javascript-2.svg",
    className: "bg-yellow_javascript",
  },
  {
    id: 4,
    name: "Typescript",
    image: "/icons/typescript-2.svg",
    className: "bg-blue_typescript",
  },
  {
    id: 5,
    name: "React",
    image: "/icons/react.svg",
  },
  {
    id: 6,
    name: "NextJS",
    image: "/icons/nextjs.svg",
  },
  {
    id: 7,
    name: "Tailwind",
    image: "/icons/tailwind.svg",
  },
  {
    id: 8,
    name: "NextAuth",
    image: "/icons/nextauth.svg",
  },
  {
    id: 9,
    name: "Mongodb",
    image: "/icons/mongodb.svg",
  },
  {
    id: 10,
    name: "Appwrite",
    image: "/icons/appwrite.svg",
  },
  {
    id: 11,
    name: "Supabase",
    image: "/icons/supabase.svg",
  },
]

export const projects = [
  {
    title: "Tri-GL Trading",
    description:
      "An industrial product platform that lets users browse products, add to a request list, and send quotations, with an admin panel for inventory management—boosting credibility and online presence.",
    websiteLive: "https://www.trigltrading.com/",
    imgURL: "/trigltrading.png",
    techStack: [
      { name: "NextJs", iconURL: "/icons/nextjs.svg", className: "size-8" },
      {
        name: "Typescript",
        iconURL: "/icons/typescript.svg",
        className: "size-5",
      },
      { name: "Tailwind", iconURL: "/icons/tailwind.svg", className: "size-5" },
      { name: "Supabase", iconURL: "/icons/supabase.svg", className: "size-5" },
    ],
  },
  {
    title: "Medix",
    description:
      "A health care management system project that streamlines patient registration, appointment scheduling, and administrative tasks.",
    vercelLink: "https://medix-pi.vercel.app/",
    githubLink: "https://github.com/janleven01/medix",
    imgURL: "/medix.png",
    techStack: [
      { name: "NextJs", iconURL: "/icons/nextjs.svg", className: "size-8" },
      {
        name: "Typescript",
        iconURL: "/icons/typescript.svg",
        className: "size-5",
      },
      { name: "Tailwind", iconURL: "/icons/tailwind.svg", className: "size-5" },
      { name: "Appwrite", iconURL: "/icons/appwrite.svg", className: "size-5" },
    ],
  },
  {
    title: "UntreeStore",
    description:
      "An online clothing store offers a user-friendly search feature, convenient add-to-cart functionality, and a well-structured shop, cart, and checkout page.",
    vercelLink: "https://untree-store.vercel.app/",
    githubLink: "https://github.com/janleven01/untree-store",
    imgURL: "/untree.png",
    techStack: [
      { name: "NextJs", iconURL: "/icons/nextjs.svg", className: "size-8" },
      {
        name: "Typescript",
        iconURL: "/icons/typescript.svg",
        className: "size-5",
      },
      { name: "Tailwind", iconURL: "/icons/tailwind.svg", className: "size-5" },
    ],
  },
  {
    title: "TrackEcom",
    description:
      "A simple CRUD inventory system designed to enhance skills in building RESTful APIs and handling data storage with MongoDB.",
    vercelLink: "https://track-ecom.vercel.app/login",
    githubLink: "https://github.com/janleven01/TrackEcom",
    imgURL: "/trackecom.png",
    techStack: [
      { name: "NextJs", iconURL: "/icons/nextjs.svg", className: "size-8" },
      {
        name: "Typescript",
        iconURL: "/icons/typescript.svg",
        className: "size-5",
      },
      { name: "Tailwind", iconURL: "/icons/tailwind.svg", className: "size-5" },
      { name: "Mongodb", iconURL: "/icons/mongodb.svg", className: "size-5" },
      { name: "NextAuth", iconURL: "/icons/nextauth.svg", className: "size-5" },
    ],
  },
  {
    title: "SquareUp",
    description:
      "A Figma design converted into a fully functional front-end with pixel-perfect accuracy, reusable components, and a responsive web interface.",
    vercelLink: "https://squareup-beige.vercel.app/",
    githubLink: "https://github.com/janleven01/squareup",
    figmaLink: "https://www.figma.com/community/file/1305400086109606332",
    imgURL: "/squareup.png",
    techStack: [
      { name: "NextJs", iconURL: "/icons/nextjs.svg", className: "size-8" },
      {
        name: "Typescript",
        iconURL: "/icons/typescript.svg",
        className: "size-5",
      },
      { name: "Tailwind", iconURL: "/icons/tailwind.svg", className: "size-5" },
    ],
  },
  {
    title: "Furni",
    description:
      "A luxury chairs e-commerce store streamlining the shopping experience with seamless add-to-cart functionality and a well-organized shop, cart, and checkout page.",
    vercelLink: "https://furni-red.vercel.app/",
    githubLink: "https://github.com/janleven01/Furni",
    imgURL: "/furni.png",
    techStack: [
      { name: "React", iconURL: "/icons/react.svg", className: "size-5 my-2" },
      {
        name: "Javascript",
        iconURL: "/icons/javascript.svg",
        className: "size-5",
      },
      { name: "Tailwind", iconURL: "/icons/tailwind.svg", className: "size-5" },
    ],
  },
  {
    title: "Apple Landing Page",
    description:
      "A visually stunning landing page showcasing the 3D feature, allowing users to take a closer look at the iphone.",
    vercelLink: "https://apple-website-neon.vercel.app/",
    githubLink: "https://github.com/janleven01/apple_website",
    imgURL: "/apple.png",
    techStack: [
      { name: "Nextjs", iconURL: "/icons/nextjs.svg", className: "size-8" },
      {
        name: "Typescript",
        iconURL: "/icons/typescript.svg",
        className: "size-5",
      },
      { name: "Tailwind", iconURL: "/icons/tailwind.svg", className: "size-5" },
      { name: "ThreeJS", iconURL: "/icons/threejs.svg", className: "size-5" },
    ],
  },
  {
    title: "Money Tracker Landing Page",
    description:
      "A dashboard for finance tracking, with activity charts and interactive graphs.",
    vercelLink: "https://money-tracker-lilac.vercel.app/",
    githubLink: "https://github.com/janleven01/Money-Tracker",
    imgURL: "/money-tracker.png",
    techStack: [
      { name: "React", iconURL: "/icons/react.svg", className: "size-5 my-2" },
      {
        name: "Javascript",
        iconURL: "/icons/javascript.svg",
        className: "size-5",
      },
      { name: "Tailwind", iconURL: "/icons/tailwind.svg", className: "size-5" },
    ],
  },
  {
    title: "Parking System",
    description:
      "A detailed parking information system that detects cars, identifies their type and color, and monitors the availability of parking spaces.",
    youtubeLink: "https://www.youtube.com/watch?v=fIcd6eE700M",
    githubLink: "https://github.com/janleven01/parkingSystem_YOLOV5_SORT",
    imgURL: "/thesis.jpg",
    techStack: [
      {
        name: "YOLOv5",
        iconURL: "/icons/yolov5.svg",
        className: "w-16 h-4 rounded-xl",
      },
      {
        name: "Python",
        iconURL: "/icons/python.svg",
        className: "size-5 my-2",
      },
      { name: "OpenCV", iconURL: "/icons/opencv.svg", className: "size-6" },
    ],
  },
]

export const content = [
  {
    title: "Full Stack Developer",
    companyName: "Tri-GL Industrial Trading",
    jobDuration: "Oct 2024 - Present",
    descriptions: [
      {
        title: "Full-Stack Web Application Development:",
        description:
          "Developed a full-stack web application from scratch to showcase industrial products and enhance remote customer engagement.",
      },
      {
        title: "Product Listing and Quotation System:",
        description:
          "Implemented a seamless product listing system, allowing users to add items to a list and request quotes efficiently.",
      },
      {
        title: "Admin Dashboard for Inventory Management:",
        description:
          "Created an intuitive admin dashboard to streamline inventory management and facilitate product updates.",
      },
    ],
  },
  {
    title: "Product Researcher and Developer",
    companyName: "Reyari, Ltd. - UK",
    jobDuration: "May 2023 - Jun 2024",
    descriptions: [
      {
        title: "Market Analysis and Trend Identification:",
        description:
          "Conducted in-depth market analysis and consumer behavior studies to identify trends and opportunities for Amazon FBA products.",
      },
      {
        title: "Cross-Functional Collaboration:",
        description:
          "Collaborated with product designers and manufacturing representatives to ensure product alignment with customer needs.",
      },
      {
        title: "Performance Evaluation and Insights:",
        description:
          "Utilized analytics tools to assess product performance and consumer feedback, translating data insights into actionable recommendations for product improvements.",
      },
      {
        title: "Product Launch Management:",
        description:
          "Managed product launch timelines and deliverables, including inventory investment, target pricing, and margin forecasts, for comprehensive revenue and cost analysis for informed decision-making.",
      },
      {
        title: "Usability Testing and Design Refinement:",
        description:
          "Facilitated usability testing with target users to refine product designs and enhance the user experience.",
      },
    ],
  },
  {
    title: "Web Developer",
    companyName: "Edfolio",
    jobDuration: "Jun 2022 - Aug 2022",
    descriptions: [
      {
        title: "Basic CRUD Application Development:",
        description:
          "Developed a basic CRUD to-do list application using Laravel, as part of my initial assignment.",
      },
      {
        title: "Payment Interface Design and Implementation:",
        description:
          "Collaborated with another intern to design and implement a user-friendly payment interface, enhancing teamwork and practical development experience.",
      },
    ],
  },
]
