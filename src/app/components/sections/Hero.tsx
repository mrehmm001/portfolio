import Link from "next/link";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
const words = [
  {
    text: "A",
    className: "text-white",
  },
  {
    text: "TypeScript",
    className: "text-white",
  },
  {
    text: "and",
    className: "text-white",
  },
  {
    text: "React/Next.js",
    className: "text-white",
  },
  {
    text: "developer",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export function HeroSection() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <div id="title-section" className="flex flex-col gap-2 text-center">
        <p className="text-lg italic text-muted">
          Hello, I&apos;m Muneeb. A Passionate Software Engineer.
        </p>
        <h1 className="text-5xl font-bold">
          {/* A TypeScript and React/Next.js{" "}
          <span className="text-blue-500">developer</span> */}
          <TypewriterEffectSmooth words={words} />
        </h1>
      </div>
      <div id="socials-section" className="flex items-center gap-8">
        <Link
          className="text-5xl"
          href="https://www.linkedin.com/in/muneeb-rehman-5257101b7/"
        >
          <FaGithub />
        </Link>
        <Link className="text-5xl" href="https://github.com/mrehmm001">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}
