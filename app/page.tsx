import About from "@/components/about";
import Experience from "@/components/experience";
import Technologies from "@/components/technologies";
import TitleBar from "@/components/ui/titlebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-neutral-100 dark:bg-neutral-800">
      <TitleBar />
      <About />
      <Technologies />
      <Experience />
    </main>
  );
}
