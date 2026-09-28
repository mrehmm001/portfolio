import agileSaver from './assets/agilesaver.webp'
import dhania from './assets/dhania.webp'
import dissertation from './assets/dissertation.webp'
import emnist from './assets/emnist.webp'
import matlab from './assets/matlab.webp'
import mri from './assets/mri.webp'
import portfolio from './assets/portfolio.webp'
import almaLogo from './assets/logos/alma.svg'
import cyfLogo from './assets/logos/codeyourfuture.png'
import imaginationLogo from './assets/logos/imagination.png'
import pismoLogo from './assets/logos/pismo.svg'
import visaLogo from './assets/logos/visa.svg'

export interface Role {
  role: string
  company: string
  start: string
  end: string
  /** Transparent mark, light or brand-coloured to sit on the dark theme */
  logo: string
  /** Parent company, shown as "Company, a <logo> company" */
  parent?: { name: string; logo: string }
  points: string[]
}

export type Category = 'ai' | 'web' | 'mobile' | 'desktop'

export const categoryLabels: Record<Category, string> = {
  ai: 'AI and ML',
  web: 'Web',
  mobile: 'Mobile',
  desktop: 'Desktop',
}

export interface Project {
  name: string
  categories: Category[]
  year: string
  description: string
  stack: string[]
  github?: string
  live?: string
  image?: string
  /** Logos and title pages should be shown whole rather than cropped */
  imageFit?: 'contain'
}

export const currentEmployer = { name: 'Pismo', parent: 'Visa', parentLogo: visaLogo }

export const links = {
  email: 'muneeb73@outlook.com',
  github: 'https://github.com/mrehmm001',
  linkedin: 'https://www.linkedin.com/in/muneeb-rehman-5257101b7/',
  cv: `${import.meta.env.BASE_URL}CV.pdf`,
}

export const aboutStatement =
  "I started programming young and never really stopped. Since then I've built IDE tooling for embedded developers, product front ends for an economics consultancy, and now Control Center, the operations interface for Pismo's banking platform."

export const about = [
  "I'm a software engineer with a long-running fascination for computers and code, and I've worked across the whole stack.",
  'I work well in teams, care about the quality of what ships, and pick up new tools as the work demands. I enjoy the problem-solving side of engineering as much as the building.',
]

export const interests = ['Full-stack development', 'Software engineering', 'Data science', 'Machine learning']

export const skills: { group: string; items: string[] }[] = [
  { group: 'Back end', items: ['Go', 'GraphQL', 'Node.js', 'Django', 'Kubernetes', 'AWS'] },
  { group: 'Front end', items: ['TypeScript', 'React', 'Next.js', 'Storybook', 'Jest'] },
  { group: 'AI and ML', items: ['LangChain', 'OpenAI', 'TensorFlow', 'scikit-learn'] },
]

export const experience: Role[] = [
  {
    role: 'Software Engineer',
    company: 'Pismo',
    parent: { name: 'Visa', logo: visaLogo },
    logo: pismoLogo,
    start: 'Feb 2026',
    end: 'Present',
    points: [
      "Full-stack engineer in Operations UI, an eight-person squad building Control Center: the web interface business operations teams use to build, manage and configure financial programs on Pismo's cloud-native banking platform.",
      'Actively working on account management, across micro-frontends and the backend-for-frontend (BFF) services behind them.',
      'Front end in React and TypeScript, tested with Jest and React Testing Library and documented in Storybook.',
      'Back end in Go, running on Kubernetes and AWS, with Grafana for observability.',
      'The platform is a real-time, event-driven banking API built for digital finance. We work in an agile way with GitHub, Jira and Confluence.',
    ],
  },
  {
    role: 'Front-End Software Engineer',
    company: 'Alma Economics',
    logo: almaLogo,
    start: 'Mar 2024',
    end: 'Feb 2026',
    points: [
      'Part of a small, highly skilled team of seven.',
      'Led the initial front-end development of two greenfield, high-impact projects: Cobflow and Evidence Maps.',
      'Maintained and developed several ad-hoc dashboards and visualisation tools, including Theory of Change and Evidence Map.',
      'Built front ends in React and TypeScript, then moved into a full-stack role contributing to the Django backend.',
      "Revamped the company's website in WordPress and Elementor, and built the backend for careers page submissions.",
      'Worked in a hybrid of waterfall and agile, using GitHub and ClickUp.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Imagination Technologies',
    logo: imaginationLogo,
    start: 'Jul 2022',
    end: 'Dec 2023',
    points: [
      'Researched, designed, developed and maintained IDE tools in TypeScript.',
      'Worked in an agile team, finding my way around a large codebase and learning new technologies on the go.',
      'Detected problems and proposed solutions for them.',
      'Addressed review feedback with careful attention to design and implementation, so the project met quality standards.',
      'Worked closely with project managers and engineers, keeping communication and teamwork effective.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Imagination Technologies',
    logo: imaginationLogo,
    start: 'Jun 2021',
    end: 'Sep 2021',
    points: [
      'Summer placement contributing to an IDE for embedded developers building on the RISC-V architecture.',
      'Researched, designed, developed and maintained GUI extensions for the IDE in TypeScript.',
      'Addressed review feedback, weighing the feasibility of design and implementation to meet quality standards.',
      'Worked closely with project managers and engineers, and identified problems and proposed solutions.',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'CodeYourFuture',
    logo: cyfLogo,
    start: 'Feb 2021',
    end: 'Jun 2021',
    points: [
      'CodeYourFuture is a UK non-profit that trains refugees and other disadvantaged people to become web developers and helps them find work in tech.',
      'Assisted the lead teacher in teaching HTML, CSS and JavaScript across several workshops.',
      'Volunteered to mark coursework and give students feedback.',
    ],
  },
]

export const featuredProjects: Project[] = [
  {
    name: 'Dhania',
    categories: ['ai', 'web'],
    year: '2023 – 2025',
    description:
      'A retrieval-augmented generation (RAG) assistant that gives contextually relevant answers grounded in the data you give it. Built on Next.js, Prisma and LangChain on AWS serverless infrastructure, with careful prompt engineering.',
    stack: ['Next.js', 'Prisma', 'Clerk', 'LangChain', 'Socket.IO'],
    github: 'https://github.com/mrehmm001/Dhania-ai-nextjs',
    image: dhania,
    imageFit: 'contain',
  },
  {
    name: 'Deep image colourisation',
    categories: ['ai'],
    year: '2022',
    description:
      'My final-year dissertation: a research project analysing deep learning techniques for image colourisation, comparing autoencoders with conditional adversarial networks.',
    stack: ['TensorFlow', 'Keras', 'Python', 'scikit-image'],
    github:
      'https://github.com/mrehmm001/Deep-Image-Colourisation-comparing-AutoEncoders-and-Conditional-Adversarial-Networks',
    image: dissertation,
    imageFit: 'contain',
  },
  {
    name: 'AgileSaver',
    categories: ['mobile', 'ai'],
    year: '2021',
    description:
      'A second-year group project: seven of us designed, prototyped and built an Android budgeting app that uses machine learning to track expenses, learn spending patterns and suggest changes to your routine that save money.',
    stack: ['Android', 'Java', 'Node.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/mrehmm001/AgileSaver/tree/main',
    image: agileSaver,
  },
  {
    name: 'MRI brain tumour classifier',
    categories: ['ai'],
    year: '2022',
    description: 'A deep learning model that identifies brain tumours from MRI images.',
    stack: ['TensorFlow', 'Keras', 'Python', 'OpenCV'],
    github: 'https://github.com/mrehmm001/MRI-brain-cancer-classifier',
    image: mri,
  },
  {
    name: 'This portfolio',
    categories: ['web'],
    year: '2022, rebuilt 2026',
    description:
      'The site you are on: my experience, projects and CV. Rebuilt with React, Vite and TypeScript.',
    stack: ['React', 'TypeScript', 'Vite'],
    github: 'https://github.com/mrehmm001/portfolio',
    live: 'https://muneebrehman.co.uk/',
    image: portfolio,
  },
  {
    name: 'Handwriting classifier',
    categories: ['ai'],
    year: '2021',
    description: 'A deep learning model that classifies handwritten digits and letters.',
    stack: ['TensorFlow', 'Keras', 'Python', 'OpenCV'],
    github: 'https://github.com/mrehmm001/Hand-written-digit-and-letter-classifier',
    image: emnist,
  },
  {
    name: 'Two-layer neural network',
    categories: ['ai'],
    year: '2021',
    description: 'A two-layer feed-forward neural network implemented from scratch.',
    stack: ['MATLAB'],
    github: 'https://github.com/mrehmm001/2-layer-Neural-Network-Implementation',
    image: matlab,
  },
]

export const otherProjects: Project[] = [
  {
    name: 'Game project',
    categories: ['web'],
    year: '2019',
    description:
      'A 2D game from my first year of university, built with p5.js and since updated with multiplayer over Socket.IO.',
    stack: ['p5.js', 'JavaScript', 'Socket.IO'],
    github: 'https://github.com/mrehmm001/Game-Project',
    live: 'https://game-project.onrender.com/',
  },
  {
    name: 'Todo app',
    categories: ['desktop'],
    year: '2021',
    description: 'A Java Swing desktop app for organising tasks, tracking deadlines and progress.',
    stack: ['Java', 'Swing'],
    github: 'https://github.com/mrehmm001/Todo-list',
  },
  {
    name: 'Goldories',
    categories: ['web'],
    year: '2021',
    description: 'A full-stack web app for calculating the calories in food.',
    stack: ['Node.js', 'Express', 'MongoDB', 'bcrypt'],
    live: 'https://www.doc.gold.ac.uk/usr/422/',
  },
  {
    name: 'Data visualisation',
    categories: ['web'],
    year: '2020',
    description: 'An app for exploring datasets such as a population map, the solar system and GDP.',
    stack: ['p5.js', 'JavaScript'],
    github: 'https://github.com/mrehmm001/Data-visualisation-project',
  },
  {
    name: 'Connect Three',
    categories: ['mobile'],
    year: '2020',
    description: 'An Android game in the spirit of Connect 4 and tic-tac-toe: get three in a row to beat a friend.',
    stack: ['Android', 'Java'],
    github: 'https://github.com/mrehmm001/Connect-Three',
  },
]
