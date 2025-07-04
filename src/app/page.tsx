import { SplittingText } from "@/components/animate-ui/text/splitting";

/* app/page.tsx */
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col px-8">
      {/* Navbar */}
      <nav className="flex justify-between items-center text-xs sm:text-sm text-[var(--color-muted)] py-4">
        <div className="space-x-3 sm:space-x-6">
          <a href="#about" className="hover:text-[var(--color-accent)]">01. About</a>
          <a href="#experience" className="hover:text-[var(--color-accent)]">02. Experience</a>
          <a href="#projects" className="hover:text-[var(--color-accent)]">03. Projects</a>
        </div>
        <a href="/resume.pdf" className="border border-[var(--color-accent)] text-[var(--color-accent)] px-2 sm:px-4 py-1 rounded hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] transition text-xs sm:text-sm">
          Resume
        </a>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center">
        <p className="text-[var(--color-accent)] text-sm mb-2">Hi, I’m</p>
        <h1 className="text-6xl font-bold text-[var(--color-heading)]">Mark.</h1>
        <SplittingText type="chars"
          className="text-4xl font-semibold text-[var(--color-muted)] mt-2"
          text="I’m a software engineer focused on building scalable backend systems, CLI tools, and full-stack experiences." />
        {/* <h2 className="text-4xl font-semibold text-[var(--color-muted)] mt-2">
          I’m a software engineer focused on building scalable backend systems, CLI tools, and full-stack experiences.
        </h2> */}

        <div className="mt-8 space-x-6 text-[var(--color-accent)] text-lg">
          <a href="/resume.pdf" className="hover:underline">→ Resume</a>
          <a href="https://github.com/varagos" className="hover:underline">→ GitHub</a>
          <a href="#projects" className="hover:underline">→ Projects</a>
        </div>
      </section>
    </main>
  );
}
