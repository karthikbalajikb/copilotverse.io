import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-24 p-24 pt-8 bg-gradient-to-b from-indigo-300 from-30% via-sky-300 via-70% to-green-200 to-90%">
      <div className="flex justify-between items-center w-full p-4 backdrop-blur-lg backdrop-saturate-200 opacity-75 rounded-lg border-white/25 bg-white/15 bg-gradient-to-br from-white/10 to-white/100">
        <h1 className="font-extrabold text-4xl text-white tracking-wide drop-shadow-xl">
          CopilotVerse.IO
        </h1>
        <div className="cursor-pointer hover:rounded-lg hover: border">
          Explore Copilots
        </div>
      </div>

      <div className="flex items-center gap-10 w-full p-4">
        <h1 className="w-1/2 text-5xl leading-[5rem] font-extrabold text-transparent bg-gradient-to-br from-white via-white/1 to-white/60 bg-clip-text">
          Find universe of copilot to enhance your productivity, efficiency
        </h1>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-1/2"
          src="/aitheme2-bg-transparent.png"
          alt="Next.js Logo"
          priority
          width={300}
          height={200}
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://github.com/features/copilot"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-white">
            Github Copilot
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            The AI coding assistant elevating developer workflows
          </p>
        </a>

        <a
          href="https://githubnext.com/projects/copilot-workspace"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-white">
            Copilot Workspace
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            A Copilot-native dev environment, designed for everyday tasks.
          </p>
        </a>

        <a
          href="https://microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-white">
            Copilot Studio
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Design intelligent, actionable, and connected AI assistants for
            employees and customers with Copilot Studio.
          </p>
        </a>

        <a
          href="https://github.blog/2024-05-21-introducing-github-copilot-extensions/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-white">
            Github Copilot Extensions
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Introducing GitHub Copilot Extensions: Unlocking unlimited
            possibilities with our ecosystem of partners
          </p>
        </a>
      </div>
    </main>
  );
}
