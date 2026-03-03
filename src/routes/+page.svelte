<script lang="ts">
  import * as config from "$lib/config";
  import { formatDate } from "$lib/utils";
  import IconArrowRight from "~icons/mingcute/arrow-right-line";

  import SveleIcon from "~icons/cib/svelte";
  import ReactIcon from "~icons/cib/react";
  import StorybookIcon from "~icons/cib/storybook";
  import GitIcon from "~icons/cib/git";
  import TypescriptIcon from "~icons/cib/typescript";
  import JavascriptIcon from "~icons/cib/javascript";
  import CssIcon from "~icons/cib/css3-shiled";
  import HtmlIcon from "~icons/cib/html5-shield";
  import FirebaseIcon from "~icons/cib/firebase";
  import FigmaIcon from "~icons/cib/figma";

  import ReduxIcon from "~icons/cib/redux";
  import JestIcon from "~icons/cib/jest";

  import ChatBot from "$lib/components/ChatBot.svelte";
  import ChatWall from "$lib/components/ChatWall.svelte";

  export let data;

  const careerStartYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - careerStartYear;
</script>

<svelte:head>
  <title>{config.title} - Tech Lead & Full Stack Developer</title>
  <meta name="description" content="Tech Lead & Full Stack Developer with {yearsExperience}+ years experience. Currently leading engineering at a NYC startup. Specializing in TypeScript, React, Svelte, and AI-driven development." />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{config.title} - Tech Lead & Full Stack Developer" />
  <meta property="og:description" content="Tech Lead & Full Stack Developer with {yearsExperience}+ years experience. Currently leading engineering at a NYC startup." />
  <meta property="og:url" content={config.url} />
</svelte:head>

<!-- Hero -->
<div class="hero min-h-screen">
  <div class="hero-content block lg:flex gap-8 p-0">
    <div class="mt-12 sm:mt-0 max-w-lg text-center md:text-left">
      <div class="badge badge-accent badge-outline mb-4 animate-fade-in-up">NYC Startup</div>

      <h1 class="lg:text-7xl md:text-6xl text-4xl font-black animate-fade-in-up-delay-1">
        <span class="brightness-150 contrast-150">
          Tech Lead & Full Stack Developer
        </span>
        <img
          class="w-16 inline"
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Star-Struck.png"
          alt="Star-Struck"
        />
      </h1>
      <p class="py-9 text-base animate-fade-in-up-delay-2">
        {yearsExperience}+ years in tech. Currently Tech Lead at a New York-based
        startup, building project management and finance tools. Passionate about
        AI-driven development, agentic workflows, and shipping fast with
        TypeScript, React, and Svelte.
      </p>

      <div
        class="carousel carousel-end mb-9 w-full max-w-80 md:max-w-full text-neutral-600"
      >
        <div class="carousel-item">
          <SveleIcon class="w-12 md:w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <ReactIcon class="w-12 md:w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <ReduxIcon class="w-12 md:w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <StorybookIcon class="w-12 md:w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <TypescriptIcon class="w-12 md:w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <JavascriptIcon class="w-12 md:w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <CssIcon class="w-12 md:w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <HtmlIcon class="w-12 md:w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <JestIcon class="w-12 md:w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <GitIcon class="w-12 md:w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <FirebaseIcon class="w-12 md:w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <FigmaIcon class="w-12 md:w-16 hover:text-neutral-content" />
        </div>
      </div>

      <div class="join-vertical join md:join-horizontal gap-2 animate-fade-in-up-delay-3">
        <a
          class="btn btn-lg md:btn-md btn-neutral btn-wide normal-case ring-primary"
          href="/asset/Standard - Senior Full stack developer - Benjamin Karlsson.pdf"
          target="_blank">Read my cv</a
        >
        <a
          class="btn btn-lg md:btn-md btn-primary btn-wide normal-case"
          href="#chat-with-ai">Chat with my AI <IconArrowRight /></a
        >
      </div>
    </div>
    <div class="h-24 lg:hidden" />

    <div id="chat-with-ai">
      <ChatBot />
    </div>
  </div>
</div>

<!-- Stats Strip -->
<section class="py-16 border-y border-base-300">
  <div class="max-w-5xl mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl md:text-5xl font-black text-primary">{yearsExperience}+</div>
        <div class="text-sm text-base-content/50 mt-2">Years Experience</div>
      </div>
      <div>
        <div class="text-4xl md:text-5xl font-black text-primary">12+</div>
        <div class="text-sm text-base-content/50 mt-2">Technologies</div>
      </div>
      <div>
        <div class="text-4xl md:text-5xl font-black text-primary">6+</div>
        <div class="text-sm text-base-content/50 mt-2">Projects Shipped</div>
      </div>
      <div>
        <div class="text-4xl md:text-5xl font-black text-primary">3</div>
        <div class="text-sm text-base-content/50 mt-2">Countries Worked From</div>
      </div>
    </div>
  </div>
</section>

<!-- What I Do -->
<section class="py-20 px-4">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-14">
      <div class="badge badge-accent badge-outline mb-4">Services</div>
      <h2 class="text-3xl md:text-4xl font-black">
        <span class="brightness-150 contrast-150">What I Do</span>
      </h2>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="rounded-xl border border-base-300 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div class="text-3xl mb-4">
          <SveleIcon class="w-10 text-primary" />
        </div>
        <h3 class="text-lg font-bold mb-3 brightness-150 contrast-150">Tech Leadership</h3>
        <p class="text-sm text-base-content/50 leading-relaxed">
          Leading engineering teams, defining architecture, and shipping products. From sprint planning to production deploys.
        </p>
      </div>

      <div class="rounded-xl border border-base-300 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div class="text-3xl mb-4">
          <FirebaseIcon class="w-10 text-primary" />
        </div>
        <h3 class="text-lg font-bold mb-3 brightness-150 contrast-150">Full Stack Development</h3>
        <p class="text-sm text-base-content/50 leading-relaxed">
          End-to-end web apps with TypeScript, React, Svelte, and modern cloud infrastructure. From idea to production.
        </p>
      </div>

      <div class="rounded-xl border border-base-300 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div class="text-3xl mb-4">
          <FigmaIcon class="w-10 text-primary" />
        </div>
        <h3 class="text-lg font-bold mb-3 brightness-150 contrast-150">AI-Driven Development</h3>
        <p class="text-sm text-base-content/50 leading-relaxed">
          Building with AI agents, Claude Code, Codex, and agentic workflows. Shipping faster by leveraging the latest AI tooling.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Featured Projects -->
<section class="py-20 px-4 border-t border-base-300">
  <div class="max-w-5xl mx-auto">
    <div class="flex items-end justify-between mb-14">
      <div>
        <div class="badge badge-accent badge-outline mb-4">Portfolio</div>
        <h2 class="text-3xl md:text-4xl font-black">
          <span class="brightness-150 contrast-150">Featured Projects</span>
        </h2>
      </div>
      <a href="/portfolio" class="btn btn-ghost btn-sm normal-case gap-1 hidden md:flex">
        View all <IconArrowRight />
      </a>
    </div>

    <div class="flex flex-col gap-6">
      {#each data.featuredProjects as project}
        <a
          href="/portfolio/{project.slug}"
          class="group block"
        >
          <div
            class="rounded-xl border border-base-300 overflow-hidden
                   transition-all duration-300
                   hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div class="flex flex-col md:flex-row">
              {#if project.imageUrl && project.imageUrl.trim() !== ""}
                <div class="md:w-2/5 overflow-hidden bg-base-200">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    class="w-full h-48 md:h-full object-cover
                           transition-transform duration-500
                           group-hover:scale-105"
                  />
                </div>
              {/if}
              <div class="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 class="text-xl md:text-2xl font-bold brightness-150 contrast-150
                             group-hover:text-primary transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  <p class="text-base-content/50 text-sm md:text-base mb-5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  {#each project.categories.slice(0, 5) as category}
                    <span class="badge badge-sm badge-neutral">{category}</span>
                  {/each}
                  {#if project.categories.length > 5}
                    <span class="badge badge-sm badge-ghost">
                      +{project.categories.length - 5}
                    </span>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <div class="text-center mt-8 md:hidden">
      <a href="/portfolio" class="btn btn-ghost btn-sm normal-case gap-1">
        View all projects <IconArrowRight />
      </a>
    </div>
  </div>
</section>

<!-- Latest Blog Posts -->
<section class="py-20 px-4 border-t border-base-300">
  <div class="max-w-5xl mx-auto">
    <div class="flex items-end justify-between mb-14">
      <div>
        <div class="badge badge-accent badge-outline mb-4">Blog</div>
        <h2 class="text-3xl md:text-4xl font-black">
          <span class="brightness-150 contrast-150">Latest Posts</span>
        </h2>
      </div>
      <a href="/blog" class="btn btn-ghost btn-sm normal-case gap-1 hidden md:flex">
        Read all <IconArrowRight />
      </a>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      {#each data.featuredPosts as post}
        <a
          href={post.slug}
          class="group rounded-xl border border-base-300 p-6
                 transition-all duration-300
                 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
        >
          <time class="text-xs text-base-content/40">{formatDate(post.date)}</time>
          <h3 class="text-lg font-bold mt-2 mb-3 brightness-150 contrast-150
                     group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p class="text-sm text-base-content/50 leading-relaxed line-clamp-3">
            {post.description}
          </p>
          <div class="flex flex-wrap gap-1.5 mt-4">
            {#each post.categories as category}
              <span class="badge badge-sm badge-ghost">{category}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>

    <div class="text-center mt-8 md:hidden">
      <a href="/blog" class="btn btn-ghost btn-sm normal-case gap-1">
        Read all posts <IconArrowRight />
      </a>
    </div>
  </div>
</section>

<!-- Chat Wall -->
<ChatWall />
