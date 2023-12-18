import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/compontents/ui/button";
import { LuAlarmClock } from "react-icons/lu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold mb-4">Button Example</h1>
      <ul className="flex flex-col gap-2">
        <li>
          Docs:{" "}
          <Link href="https://ui.shadcn.com/docs/components/button">
            https://ui.shadcn.com/docs/components/button
          </Link>
        </li>
        <li>
          Install:{" "}
          <code className="p-2 bg-slate-200 rounded-sm">
            npx shadcn-ui@latest add button
          </code>
        </li>
      </ul>
      <div className="container flex flex-row flex-wrap gap-4 border border-slate-200 rounded-md max-w-xl mt-10 p-10 bg-slate-100">
        <Button size="lg">Primary</Button>
        <Button size="lg" variant="secondary">
          Secondary
        </Button>
        <Button size="lg" variant="outline">
          Outline
        </Button>
        <Button size="lg" variant="destructive">
          Destructive
        </Button>
        <Button size="lg" variant="ghost">
          Ghost
        </Button>
        <Button>
          <LuAlarmClock className="mr-2 h-4 w-4" /> I have an Icon!
        </Button>
        <Button className="bg-pink-400">Tailwind Color</Button>
        <Button className="bg-[#bada55] dark:bg-slate-700 dark:text-[#bada55] dark:font-bold text-black">
          Custom Colors
        </Button>
      </div>
    </main>
  );
}
