"use client";

import * as React from "react";
import SectionHeading from "../elements/SectionHeading";
import { Timeline } from "@/components/ui/timeline";
import { MdArrowRight } from "react-icons/md";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function Experience() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const workExperience = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8kF45WTQsLIS4SGQXtK0h6xZCLJ91EWKJg&s",
      role: "Front-End Software Engineer",
      company: "Alma Economics",
      date: "Mar 2024 - Present",
      description: [
        "Recently accepted this role as a front-end software engineer :)",
        "Will be involved in tackling difficult important problems using technology",
      ],
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwI6SDo2k4az-_c2GdpWT3WU8tu5Jhmcsxlw&s",
      role: "Software Engineer",
      company: "Imagination Technologies",
      date: "Jul 2022 - Dec 2023",
      description: [
        "Researched, designed, developed and maintained tools for the IDE using TypeScript.",
        "worked in an agile methodology workflow",
        "Understood and found my way around the codebase",
        "Detected problems and provided a solution to them",
        "Learnt new technologies on the go",
        "Addressed review feedback and took careful consideration of design & implementation, ensuring the project meets quality standards.",
        "Worked closely with colleagues such as project managers and Engineers, ensuring effective communication and teamwork",
      ],
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwI6SDo2k4az-_c2GdpWT3WU8tu5Jhmcsxlw&s",
      role: "Software Engineer Intern",
      company: "Imagination Technologies (internship)",
      date: "Jun 2021 - Sep 2021 ",
      description: [
        "I undertook a summer placement as a Software Engineer at Imagination Technologies where I contributed towards the development of an IDE for embedded system developers who wish to develop on the RISC-V architecture.",
        "Researched, designed, developed and maintained GUI extensions written in TypeScript for the IDE.",
        "Addressed review feedbacks and took careful consideration of the feasibility of design & implementation, ensuring the project meets quality standards.",
        "Worked closely with colleagues such as project managers and engineers, ensuring effective communication and teamwork.",
        "Was able to identify problems and proposed solutions for them.",
      ],
    },

    {
      image:
        "https://codeyourfuture.io/wp-content/uploads/2023/06/CYF-logo-sml.png",
      role: "Teaching Assistant",
      company: "Code Your Future",
      date: "Feb 2021 - Jun 2021 ",
      description: [
        "CodeYourFuture (CYF) is a UK based non-profit organisation that trains refugees and other disadvantaged people to become web developers and helps them to find work in the tech industry.",
        "assisted the lead teacher in teaching students HTML, CSS & JavaScript during several workshops.",
        "volunteered in marking coursework and giving students feedback",
      ],
    },
  ];

  const data = workExperience.map((experience) => ({
    title: (
      <BackgroundGradient className="h-full w-full rounded-none p-1">
        <img
          alt="Company image"
          src={experience.image}
          className="h-32 w-32 rounded-md"
        />
      </BackgroundGradient>
    ),
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-bold">
            {experience.role}
            <span className="text-blue-500"> @ {experience.company}</span>
          </p>
          <p className="text-blue-500">{experience.date}</p>
        </div>
        <div className="flex flex-col gap-2">
          {experience.description.map((text) => (
            <div key={text} className="grid grid-cols-[30px_auto] items-start">
              <MdArrowRight className="text-blue-500" size={30} />
              <p className="self-center" key={text}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading alignment="middle">Experience</SectionHeading>
      <Timeline data={data} />
    </div>
  );
}
