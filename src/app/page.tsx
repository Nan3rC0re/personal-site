import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center h-screen">
      <div className="max-w-[800px] flex flex-col px-[16px] py-[16px] h-fit gap-y-[60px] mt-20 max-md:px-6 ">
        <div className="flex flex-col gap-y-1">
          <h1 className="font-bold">Nana Kofi Okae</h1>
          <h2 className="text-muted-foreground font-medium">
            Web Developer and Product Designer
          </h2>
          <div className="flex flex-row gap-x-10 text-muted-foreground">
            <Link target="blank" href="https://github.com/Nan3rOkae">
              Github
            </Link>
            <Link
              target="blank"
              href="https://www.linkedin.com/in/nana-kofi-okae/">
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-muted-foreground gap-y-2">
          <p className="flex items-center ">
            I am currently a Product Design Intern @
            <span className="inline-block mx-2">
              <Image
                src="/Duolingo.svg"
                width={45}
                height={45}
                alt="Duolingo Logo"
              />
            </span>
            in the Monetization team on subscription Packaging.
          </p>
          <p className="flex items-center ">
            I was previously a Full Stack Software Engineer intern @
            <span className="inline-block mx-2">
              <Image
                src="/Salesforce.svg"
                width={50}
                height={50}
                alt="Salesforce Logo"
              />
            </span>
          </p>
        </div>

        <div className="flex flex-row gap-x-12 font-medium">
          <Link href="">Resume</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </main>
  );
}
