import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-background sm:items-start">
        <div className="text-4xl font-bold text-primary tracking-tight">
          CAMPAS
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-foreground">
            University Innovation & Collaboration Platform
          </h1>
          <p className="max-w-md text-lg leading-8 text-foreground/80">
            Connect, collaborate, and innovate with students, researchers, and
            institutions worldwide. Join competitions, find teammates, and
            showcase your projects.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="btn-primary flex h-12 w-full items-center justify-center px-5 md:w-[158px]"
            href="/join"
          >
            Get Started
          </a>
          <a
            className="flex h-12 w-full items-center justify-center border border-border px-5 transition-colors hover:border-primary hover:bg-surface md:w-[158px] text-foreground"
            href="/explore"
          >
            Explore Projects
          </a>
        </div>
      </main>
    </div>
  );
}
