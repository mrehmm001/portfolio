"use client";

import * as React from "react";
import { MdArrowRight } from "react-icons/md";
import { Card } from "@/components/ui/card";
import SectionHeading from "../elements/SectionHeading";
import ProfileImage from "../../../../assets/profile_picture.jpeg";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function AboutMe() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const ExperienceTag = ({ experience }: { experience: string }) => (
    <p className="flex flex-row items-center">
      <MdArrowRight className="text-blue-500" size={30} />
      <p>{experience}</p>
    </p>
  );

  return (
    <div className="flex flex-col gap-8">
      <SectionHeading>About me</SectionHeading>
      <div className="flex flex-col-reverse gap-8 text-muted md:grid md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p>
            My name is Muneeb Rehman, a software engineer driven by an enduring
            fascination with computers and coding. My journey in software
            development began at a young age, and I&apos;ve since cultivated a
            comprehensive skill set. With proficiency in various programming
            languages and a flair for problem-solving, I have consistently
            contributed to the successful delivery of software projects.
          </p>
          <p>
            I am an adaptable team player who excels in collaborative
            environments and is well-versed in the latest development
            methodologies and tools. My commitment to crafting efficient and
            innovative software solutions remains unwavering, making me a
            valuable asset to any software development team.
          </p>
          <p>
            <span className="text-blue-500">Interests: </span> Full Stack •
            Software Engineering • Data Science • Machine Learning
          </p>
          <p className="text-blue-500">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="flex gap-8">
            <div>
              <ExperienceTag experience="TypeScript" />
              <ExperienceTag experience="React" />
              <ExperienceTag experience="Node.js" />
              <ExperienceTag experience="Next.js" />
            </div>
            <div>
              <ExperienceTag experience="Langchain" />
              <ExperienceTag experience="OpenAI API" />
              <ExperienceTag experience="TensorFlow" />
              <ExperienceTag experience="Scitkit-Learn" />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center border-0 border-solid border-muted/50 px-4 md:border-l-2">
          <BackgroundGradient className="h-full w-[300px] rounded-none p-1">
            <Card className="h-full w-full overflow-hidden border-0 shadow-md">
              <Image
                className="h-full object-cover"
                alt="Profile image"
                src={ProfileImage}
              />
            </Card>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}
