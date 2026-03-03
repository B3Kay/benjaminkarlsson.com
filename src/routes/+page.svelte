<script lang="ts">
  import * as config from "$lib/config";
  import { formatDate } from "$lib/utils";
  import IconArrowRight from "~icons/mingcute/arrow-right-line";

  // Frontend
  import SveleIcon from "~icons/cib/svelte";
  import ReactIcon from "~icons/cib/react";
  import NextJsIcon from "~icons/cib/next-js";
  import TypescriptIcon from "~icons/cib/typescript";
  import ReduxIcon from "~icons/cib/redux";
  import GraphqlIcon from "~icons/cib/graphql";
  import StorybookIcon from "~icons/cib/storybook";
  import JestIcon from "~icons/cib/jest";

  // Backend & Infra
  import NodeJsIcon from "~icons/cib/node-js";
  import PythonIcon from "~icons/cib/python";
  import GoIcon from "~icons/cib/go";
  import DockerIcon from "~icons/cib/docker";
  import KubernetesIcon from "~icons/cib/kubernetes";
  import AwsIcon from "~icons/cib/amazon-aws";
  import PostgresqlIcon from "~icons/cib/postgresql";
  import GitIcon from "~icons/cib/git";

  // What I Do card icons
  import IconGroup from "~icons/mingcute/group-line";
  import IconCode from "~icons/mingcute/code-line";
  import IconBrain from "~icons/mingcute/brain-line";
  import IconHammer from "~icons/mingcute/hammer-line";

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
<section class="min-h-[90vh] flex items-center">
  <div class="w-full max-w-5xl mx-auto px-4 py-20">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div class="text-center lg:text-left">
        <p class="text-xs uppercase tracking-widest text-base-content/30 mb-6 animate-fade-in-up">NYC Startup / Tech Lead</p>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] animate-fade-in-up-delay-1">
          Tech Lead &<br />Full Stack Developer
        </h1>

        <p class="mt-6 text-base text-base-content/50 leading-relaxed max-w-md mx-auto lg:mx-0 animate-fade-in-up-delay-2">
          Builder and engineer with {yearsExperience}+ years in tech. Currently
          Tech Lead at a New York-based startup, shipping project management and
          finance tools. I build things end-to-end, leveraging AI agents and
          agentic workflows to move fast.
        </p>

        <!-- Tech icons -->
        <div class="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start text-base-content/20 animate-fade-in-up-delay-2">
          <TypescriptIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <ReactIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <NextJsIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <SveleIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <NodeJsIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <PythonIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <GoIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <GraphqlIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <DockerIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <KubernetesIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <AwsIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <PostgresqlIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <ReduxIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <JestIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <StorybookIcon class="w-8 hover:text-base-content/60 transition-colors" />
          <GitIcon class="w-8 hover:text-base-content/60 transition-colors" />
        </div>

        <div class="flex flex-col sm:flex-row gap-3 mt-10 justify-center lg:justify-start animate-fade-in-up-delay-3">
          <a
            class="px-6 py-3 text-sm font-medium border border-base-300 rounded-lg hover:border-base-content/30 transition-colors"
            href="/asset/Standard - Senior Full stack developer - Benjamin Karlsson.pdf"
            target="_blank">Read my CV</a
          >
          <a
            class="px-6 py-3 text-sm font-medium bg-base-content text-base-100 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            href="#chat-with-ai">Chat with my AI <IconArrowRight /></a
          >
        </div>
      </div>

      <div id="chat-with-ai">
        <ChatBot />
      </div>
    </div>
  </div>
</section>

<!-- Stats Strip -->
<section class="py-16 border-y border-base-300">
  <div class="max-w-5xl mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-3xl md:text-4xl font-bold tracking-tight">{yearsExperience}+</div>
        <div class="text-xs text-base-content/30 mt-2 uppercase tracking-wider">Years Experience</div>
      </div>
      <div>
        <div class="text-3xl md:text-4xl font-bold tracking-tight">20+</div>
        <div class="text-xs text-base-content/30 mt-2 uppercase tracking-wider">Technologies</div>
      </div>
      <div>
        <div class="text-3xl md:text-4xl font-bold tracking-tight">6+</div>
        <div class="text-xs text-base-content/30 mt-2 uppercase tracking-wider">Products Shipped</div>
      </div>
      <div>
        <div class="text-3xl md:text-4xl font-bold tracking-tight">5</div>
        <div class="text-xs text-base-content/30 mt-2 uppercase tracking-wider">Countries Worked From</div>
      </div>
    </div>
  </div>
</section>

<!-- What I Do -->
<section class="py-24 px-4">
  <div class="max-w-5xl mx-auto">
    <div class="mb-16">
      <p class="text-xs uppercase tracking-widest text-base-content/30 mb-3">Services</p>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight">What I Do</h2>
    </div>

    <div class="grid md:grid-cols-2 gap-px bg-base-300 border border-base-300 rounded-xl overflow-hidden">
      <div class="bg-base-100 p-8">
        <IconGroup class="w-6 text-base-content/30 mb-4" />
        <h3 class="text-base font-semibold mb-3">Tech & Team Leadership</h3>
        <p class="text-sm text-base-content/40 leading-relaxed">
          Leading engineering teams, defining architecture, and owning delivery end-to-end. Sprint planning, code reviews, mentoring, and shipping to production.
        </p>
      </div>

      <div class="bg-base-100 p-8">
        <IconCode class="w-6 text-base-content/30 mb-4" />
        <h3 class="text-base font-semibold mb-3">Full Stack Development</h3>
        <p class="text-sm text-base-content/40 leading-relaxed">
          React, Next.js, Svelte, Node, Python, Go. Databases, APIs, Docker, AWS. Whatever it takes to ship the product.
        </p>
      </div>

      <div class="bg-base-100 p-8">
        <IconBrain class="w-6 text-base-content/30 mb-4" />
        <h3 class="text-base font-semibold mb-3">AI-Driven Development</h3>
        <p class="text-sm text-base-content/40 leading-relaxed">
          Building with AI agents, Claude Code, Codex, and agentic workflows. Using the latest tooling to move at startup speed.
        </p>
      </div>

      <div class="bg-base-100 p-8">
        <IconHammer class="w-6 text-base-content/30 mb-4" />
        <h3 class="text-base font-semibold mb-3">Builder & Creator</h3>
        <p class="text-sm text-base-content/40 leading-relaxed">
          Side projects, content creation, and creative experiments. From a 2-meter-tall bicycle featured in Expressen to AI-powered apps.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Featured Projects -->
<section class="py-24 px-4 border-t border-base-300">
  <div class="max-w-5xl mx-auto">
    <div class="flex items-end justify-between mb-16">
      <div>
        <p class="text-xs uppercase tracking-widest text-base-content/30 mb-3">Portfolio</p>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
      </div>
      <a href="/portfolio" class="text-sm text-base-content/40 hover:text-base-content transition-colors hidden md:flex items-center gap-1">
        View all <IconArrowRight />
      </a>
    </div>

    <div class="flex flex-col gap-4">
      {#each data.featuredProjects as project}
        <a
          href="/portfolio/{project.slug}"
          class="group block"
        >
          <div
            class="rounded-lg border border-base-300 overflow-hidden
                   transition-all duration-200
                   hover:border-base-content/20"
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
                  <h3 class="text-lg font-semibold
                             group-hover:text-base-content/70 transition-colors duration-200 mb-3">
                    {project.title}
                  </h3>
                  <p class="text-base-content/40 text-sm mb-5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  {#each project.categories.slice(0, 5) as category}
                    <span class="text-xs px-2 py-1 rounded-md bg-base-200 text-base-content/40">{category}</span>
                  {/each}
                  {#if project.categories.length > 5}
                    <span class="text-xs px-2 py-1 rounded-md bg-base-200 text-base-content/30">
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
      <a href="/portfolio" class="text-sm text-base-content/40 hover:text-base-content transition-colors flex items-center justify-center gap-1">
        View all projects <IconArrowRight />
      </a>
    </div>
  </div>
</section>

<!-- Latest Blog Posts -->
<section class="py-24 px-4 border-t border-base-300">
  <div class="max-w-5xl mx-auto">
    <div class="flex items-end justify-between mb-16">
      <div>
        <p class="text-xs uppercase tracking-widest text-base-content/30 mb-3">Blog</p>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">Latest Posts</h2>
      </div>
      <a href="/blog" class="text-sm text-base-content/40 hover:text-base-content transition-colors hidden md:flex items-center gap-1">
        Read all <IconArrowRight />
      </a>
    </div>

    <div class="grid md:grid-cols-3 gap-4">
      {#each data.featuredPosts as post}
        <a
          href={post.slug}
          class="group rounded-lg border border-base-300 p-6
                 transition-all duration-200
                 hover:border-base-content/20"
        >
          <time class="text-xs text-base-content/30">{formatDate(post.date)}</time>
          <h3 class="text-base font-semibold mt-3 mb-3
                     group-hover:text-base-content/70 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          <p class="text-sm text-base-content/40 leading-relaxed line-clamp-3">
            {post.description}
          </p>
          <div class="flex flex-wrap gap-1.5 mt-4">
            {#each post.categories as category}
              <span class="text-xs px-2 py-1 rounded-md bg-base-200 text-base-content/30">{category}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>

    <div class="text-center mt-8 md:hidden">
      <a href="/blog" class="text-sm text-base-content/40 hover:text-base-content transition-colors flex items-center justify-center gap-1">
        Read all posts <IconArrowRight />
      </a>
    </div>
  </div>
</section>

<!-- Chat Wall -->
<ChatWall />
