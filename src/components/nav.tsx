import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-center py-6">
      <div className="flex flex-row gap-x-12 font-medium">
        <Link href="/" className="group flex flex-row gap-x-2">
          Home
          <MoveRight className="w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link href="/projects" className="group flex flex-row gap-x-2">
          Projects
          <MoveRight className="w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link
          target="blank"
          href="/nana's_resume.pdf"
          className="group flex flex-row gap-x-2">
          Resume
          <MoveRight className="w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </nav>
  );
}
