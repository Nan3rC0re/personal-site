"use client";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import Navbar from "@/components/nav";
import { useState, useEffect } from "react";

export default function Home() {
  const [color, setColor] = useState("black");
  useEffect(() => {
    const colors = ["red", "blue", "green", "orange", "purple"];
    let index = 0;
    const intervalId = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <main className="flex justify-center items-center h-screen">
      {/* <div className="max-w-[800px] flex flex-col px-[16px] py-[16px] h-fit gap-y-[60px] mt-20 max-md:px-6 ">
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
      
        <div className="flex flex-col text-muted-foreground gap-y-2 ">
          <p className="flex items-center flex-wrap ">
            I am currently a Product Design Intern @
            <span className="inline-block mx-2">
              <Image
                src="/Duolingo.svg"
                width={45}
                height={45}
                alt="Duolingo Logo"
                className="h-auto w-auto inline-block"
              />
            </span>
            in the Monetization team on subscription packaging.
          </p>
          <p className="flex items-center flex-wrap  ">
            I was previously a Full Stack Software Engineer Intern @
            <span className="inline-block mx-2">
              <Image
                src="/Salesforce.svg"
                width={50}
                height={50}
                alt="Salesforce Logo"
                className="h-auto w-auto inline-block"
              />
            </span>
          </p>
        </div>
        <Navbar />
      </div> */}
      <h1 className="text-3xl font-bold" style={{ color }}>
        Rebuilding... Sorry :(
      </h1>
    </main>
  );
}
