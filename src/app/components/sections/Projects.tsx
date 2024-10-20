"use client";

import * as React from "react";
import SectionHeading from "../elements/SectionHeading";
import { Timeline } from "@/components/ui/timeline";
import { MdArrowRight } from "react-icons/md";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import DhaniaImage from "../../../../assets/dhania.png";
// import DissertationImage from "../../../../assets/dissertation.JPG";

export function Projects() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const featuredProjects = [
    {
      name: "Dhania (ongoing)",
      date: "2023",
      description: `Dhania is my ongoing project, which I started in 2023. It is a
        RAG (Retrieval Augmented Generation) AI model, designed to
        enhance conversational interactions by providing contextually
        relevant responses based on the input data. Dhania leverages
        a robust stack of cutting-edge technologies, including Next.js,
        Prisma, Langchain, AWS serverless infrastructure, and prompt
        engineering.`,
      github: "https://github.com/mrehmm001/Dhania-ai-nextjs",
      liveLink: "",
      techList: ["NextJs", "Prisma", "Clerk", "Langchain", "Socketio"],
      imageURL: DhaniaImage,
    },
    {
      name: "Dissertation: Deep Image Colourisation: comparing AutoEncoders and CGans ",
      date: "2022",
      description: `For my final year dissertation I worked on a research project. This investigation was aimed at analysing deep learning techniques
        used for image colourisation, specifically AutoEncoders and Conditional Adversarial networks.`,
      github:
        "https://github.com/mrehmm001/Deep-Image-Colourisation-comparing-AutoEncoders-and-Conditional-Adversarial-Networks",
      liveLink: "",
      techList: ["TensorFlow", "Keras", "Python", "Scikit-image"],
      imageURL: "assets/dissertation.JPG",
    },
    {
      name: "Agile Saver",
      date: "2021",
      description:
        "AgileSaver is my 2nd year project wherein a group of 7, designed, prototyped and implemented a personal budgeting android application that uses machine learning/AI to keep track of expenses learns spending patterns and recommends deviations to the user’s day or routine in order to save them money.",
      github: "https://github.com/mrehmm001/AgileSaver/tree/main",
      liveLink: "",
      techList: [
        "Android Studio",
        "Java",
        "XML",
        "Node.js",
        "Express.js",
        "PostgreSQL",
      ],
      imageURL: "assets/AgileSaver.png",
    },
    {
      name: "MRI Brain cancer classifier",
      date: "2022",
      description:
        "Developed a deep learning model capable of identifying brain tumors from MRI images.",
      github: "https://github.com/mrehmm001/MRI-brain-cancer-classifier",
      liveLink: "",
      techList: ["TensorFlow", "Keras", "Python", "OpenCV"],
      imageURL: "../../assets/MRI.jpg",
    },
    {
      name: "Portfolio website",
      date: "2022",
      description:
        "The page you are currently on is used to show my projects, github repository and CV. ",
      github: "https://github.com/mrehmm001/portfolio",
      liveLink: "https://mrehmm001.github.io/portfolio/",
      techList: ["React.js", "JavaScript", "Material-UI"],
      imageURL: "../../assets/portfolio.JPG",
    },
    {
      name: "Handwriting digit and letter classifier",
      date: "2021",
      description:
        "Developed a deep learning model capable for classifying numbers & letters from handwriting.",
      github:
        "https://github.com/mrehmm001/Hand-written-digit-and-letter-classifier",
      liveLink: "",
      techList: ["TensorFlow", "Keras", "Python", "OpenCV"],
      imageURL: "../../assets/EMNIST.png",
    },
    {
      name: "2 layer neural network",
      date: "2021",
      description:
        "Developed a 2 layer feed forward neural network capable of peforming complex tasks.",
      github:
        "https://github.com/mrehmm001/2-layer-Neural-Network-Implementation",
      liveLink: "",
      techList: ["MatLab"],
      imageURL: "../../assets/matlab.JPG",
    },
  ];

  const otherProjects = [
    {
      name: "Game project",
      date: "2019",
      description:
        "I made a fun 2D game project during my first year of University. I used Javascript with the help of P5JS library to make this. The game has recently been updated to include multiplayer feature, using socket.io!",
      github: "https://github.com/mrehmm001/Game-Project",
      liveLink: "https://game-project.onrender.com/",
      techList: ["P5.js", "JavaScript", "Socket.io"],
      imageURL: "../../assets/gameProject.png",
    },
    {
      name: "Todo app (Java app)",
      date: "2021",
      description:
        "Developed a TODO GUI application using Java Swing library. The application is used for organising tasks, remember deadlines & to keep track of progress.",
      github: "https://github.com/mrehmm001/Todo-list",
      liveLink: "",
      techList: ["Java", "Swing"],
      imageURL: "../../assets/Todo.png",
    },
    {
      name: "Goldories (Web app)",
      date: "2021",
      description:
        "Goldories is a full stack 2nd-year dynamic web application project used for calculating calories from food.",
      github: "",
      liveLink: "https://www.doc.gold.ac.uk/usr/422/",
      techList: ["HTML", "CSS", "Node.js", "Express.js", "MongoDB", "Bcrypt"],
      imageURL: "../../assets/Goldories.png",
    },
    {
      name: "Data visualisation project",
      date: "2020",
      description:
        "Developed a Data visualisation app which you can visualise several data, such as population map, Solar System, GDP data etc.",
      github: "https://github.com/mrehmm001/Data-visualisation-project",
      liveLink: "",
      techList: ["P5.js", "JavaScript", "HTML", "CSS"],
      imageURL: "../../assets/DataVis.png",
    },
    {
      name: "Connect three app",
      date: "2020",
      description:
        "Developed a fun android app called Connect 3 based off the game, Connect 4 and TicTacToe. Where the goal is to connect 3 in a row to win, you can play this game with a friend.",
      github: "https://github.com/mrehmm001/Connect-Three",
      liveLink: "",
      techList: ["Android Studio", "Java", "XML"],
      imageURL: "../../assets/connect3.png",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading alignment="right">Projects</SectionHeading>
      {/* {featuredProjects.map((project) => (
        <Card className="">
          <div>
            <p>Featured project</p>
            <p className="border-muted/50 border-0 border-b-2 border-solid text-lg">
              {project.name}
            </p>
            <p>{project.description}</p>
            <div>
              {project.techList.map((tech) => (
                <Badge variant={"outline"}>{tech}</Badge>
              ))}
            </div>
          </div>
          <Image
            width={100}
            height={100}
            src={project.imageURL}
            alt={`Image of ${project.name}`}
          />
        </Card>
      ))} */}
      <SectionHeading alignment="middle">Other projects</SectionHeading>
    </div>
  );
}
