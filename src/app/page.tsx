"use client";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import Navbar from "@/components/nav";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const imageVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
export default function Home() {
  return (
    <main className="flex justify-center h-screen">
      <div className="w-[800px] flex flex-col px-[16px] py-[16px] h-fit gap-y-[60px] mt-20 max-md:px-6  ">
        <div className="flex flex-col gap-y-1">
          <h1 className="font-bold">Nana Kofi Okae</h1>
          <h2 className="text-muted-foreground font-medium">
            Web Developer and Product Designer
          </h2>
          <div className="flex flex-row gap-x-10 mt-4 text-muted-foreground">
            <Link target="blank" href="https://github.com/Nan3rOkae">
              <Github />
            </Link>
            <Link
              target="blank"
              href="https://www.linkedin.com/in/nana-kofi-okae/">
              <Linkedin />
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full text-muted-foreground gap-y-2 max-sm:gap-y-6">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}>
            I am currently a Product Design Intern @
            <motion.span
              className="inline-block align-middle ml-2"
              initial="hidden"
              animate="visible"
              variants={imageVariants}>
              <Image
                src="/Duolingo.svg"
                width={50}
                height={45}
                alt="Duolingo Logo"
                className="mr-2 max-sm:w-[35px]"
              />
            </motion.span>
            in the Monetization team on subscription packaging.
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}>
            I was previously a Full Stack Software Engineer Intern @
            <motion.span
              className="inline-block align-middle ml-2"
              initial="hidden"
              animate="visible"
              variants={imageVariants}>
              <Image
                src="/Salesforce.svg"
                width={50}
                height={45}
                alt="Salesforce Logo"
                className="mr-2 max-sm:w-[35px]"
              />
            </motion.span>
          </motion.p>
        </div>
        <Navbar />
      </div>
    </main>
  );
}
