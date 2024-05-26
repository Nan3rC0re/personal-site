"use client";
import React, { useRef } from "react";
import DecodeAnimation from "react-decode-animation";
import { projects } from "@/config/data";
import Link from "next/link";
import Navbar from "@/components/nav";

export default function Projects() {
  return (
    <main className="flex justify-center h-screen">
      <div className="w-[800px] flex flex-col py-[16px] h-fit gap-y-[60px] mt-20">
        <h1 className="font-medium px-[16px]">Projects</h1>
        <div className="flex flex-col w-full">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              target="blank"
              className="hover:bg-gray-100 rounded-xl p-[16px]">
              <h1>
                <DecodeAnimation
                  autoplay
                  text={project.name}
                  allowedCharacters={["numbers", "symbols"]}
                />
              </h1>
              <div className="flex flex-row justify-between">
                <p className="w-fit font-semibold text-muted-foreground text-sm">
                  <DecodeAnimation
                    autoplay
                    text={project.type}
                    allowedCharacters={["numbers", "symbols"]}
                  />
                </p>
                <p className="w-fit">
                  <DecodeAnimation
                    autoplay
                    text={project.date}
                    allowedCharacters={["numbers", "symbols"]}
                  />
                </p>
              </div>
              <p className="text-muted-foreground max-md:hidden">
                <DecodeAnimation
                  autoplay
                  text={project.description}
                  allowedCharacters={["numbers", "symbols"]}
                />
              </p>
            </Link>
          ))}
        </div>
        <Navbar />
      </div>
    </main>
  );
}
