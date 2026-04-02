<script lang="ts">
  import * as config from "$lib/config";
  import { formatDate } from "$lib/utils";
  import IconArrowRight from "~icons/mingcute/arrow-right-line";

  // What I Do card icons
  import IconCode from "~icons/mingcute/code-line";
  import IconBrain from "~icons/mingcute/sparkles-line";

  // How I Work card icons
  import IconGroup from "~icons/mingcute/group-line";
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
  <meta name="description" content="Tech Lead & Full Stack Developer with {yearsExperience}+ years experience. Leading engineering at Hailstorm Talent. AI-accelerated development, remote team leadership, and full stack delivery." />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{config.title} - Tech Lead & Full Stack Developer" />
  <meta property="og:description" content="Tech Lead & Full Stack Developer with {yearsExperience}+ years experience. Leading engineering at Hailstorm Talent." />
  <meta property="og:url" content={config.url} />
</svelte:head>

<!-- Hero -->
<section class="min-h-[90vh] flex items-center">
  <div class="w-full max-w-5xl mx-auto px-4 py-20">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div class="text-center lg:text-left">
        <p class="text-xs uppercase tracking-widest text-base-content/30 mb-6 animate-fade-in-up">Hailstorm Talent / Tech Lead</p>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] animate-fade-in-up-delay-1">
          Tech Lead &<br />Full Stack Developer
        </h1>

        <p class="mt-6 text-base text-base-content/50 leading-relaxed max-w-md mx-auto lg:mx-0 animate-fade-in-up-delay-2">
          {yearsExperience}+ years leading remote engineering teams and shipping
          products end-to-end. I hire lean teams, coach developers, and use
          AI-accelerated workflows to deliver at 10-20x the pace of a
          traditional setup. Your startup gets senior technical leadership
          without the overhead.
        </p>

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
        <div class="text-3xl md:text-4xl font-bold tracking-tight">6+</div>
        <div class="text-xs text-base-content/30 mt-2 uppercase tracking-wider">Developers Led</div>
      </div>
      <div>
        <div class="text-3xl md:text-4xl font-bold tracking-tight">6+</div>
        <div class="text-xs text-base-content/30 mt-2 uppercase tracking-wider">Products Shipped</div>
      </div>
      <div>
        <div class="text-3xl md:text-4xl font-bold tracking-tight">10-20x</div>
        <div class="text-xs text-base-content/30 mt-2 uppercase tracking-wider">AI Productivity Boost</div>
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

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="rounded-lg border border-base-300 p-6">
        <IconGroup class="w-6 text-base-content/30 mb-4" />
        <h3 class="font-semibold mb-2">Hire & Lead Remote Teams</h3>
        <p class="text-sm text-base-content/40 leading-relaxed">
          Recruit developers globally, onboard them fast, and coach them into a high-performing team. No overhead, no fluff.
        </p>
      </div>
      <div class="rounded-lg border border-base-300 p-6">
        <IconCode class="w-6 text-base-content/30 mb-4" />
        <h3 class="font-semibold mb-2">Full Stack Delivery</h3>
        <p class="text-sm text-base-content/40 leading-relaxed">
          React, Next.js, Svelte, Node, Python, Go — from database to deploy. I ship the whole product, not just features.
        </p>
      </div>
      <div class="rounded-lg border border-base-300 p-6">
        <IconBrain class="w-6 text-base-content/30 mb-4" />
        <h3 class="font-semibold mb-2">AI-Accelerated Output</h3>
        <p class="text-sm text-base-content/40 leading-relaxed">
          AI agents for code generation, PR reviews, and testing. A 3-person team shipping like a 10-person one.
        </p>
      </div>
      <div class="rounded-lg border border-base-300 p-6">
        <IconHammer class="w-6 text-base-content/30 mb-4" />
        <h3 class="font-semibold mb-2">Architecture & Code Reviews</h3>
        <p class="text-sm text-base-content/40 leading-relaxed">
          Set up the technical foundation, enforce quality through reviews, and make sure the codebase scales with the business.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- How I Work -->
<section class="py-24 px-4 border-t border-base-300">
  <div class="max-w-5xl mx-auto">
    <div class="mb-16">
      <p class="text-xs uppercase tracking-widest text-base-content/30 mb-3">Engagement</p>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight">How I Work</h2>
      <p class="text-sm text-base-content/40 mt-4 max-w-lg">
        Two ways to work together, depending on what you need. Typical engagements run 6-24 months.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <!-- Path 1: Embed -->
      <div class="rounded-lg border border-base-300 p-8 md:p-10 flex flex-col">
        <IconGroup class="w-6 text-base-content/30 mb-6" />
        <h3 class="text-xl font-semibold mb-2">Embed in your team</h3>
        <p class="text-sm text-base-content/40 leading-relaxed mb-6">
          I join as your Tech Lead or fractional CTO. I bring structure, coach your developers, and make sure the team ships consistently.
        </p>
        <ul class="text-sm text-base-content/40 space-y-2 mb-8 flex-1">
          <li class="flex gap-2"><span class="text-base-content/20">-</span> Technical leadership & hiring</li>
          <li class="flex gap-2"><span class="text-base-content/20">-</span> Developer coaching & PR reviews</li>
          <li class="flex gap-2"><span class="text-base-content/20">-</span> AI workflow integration</li>
          <li class="flex gap-2"><span class="text-base-content/20">-</span> Architecture & code quality</li>
        </ul>
        <a href="mailto:hi@benjaminkarlsson.com?subject=Embed in our team" class="text-sm font-medium text-center py-3 border border-base-300 rounded-lg hover:border-base-content/30 transition-colors">
          Get in touch
        </a>
      </div>

      <!-- Path 2: Own -->
      <div class="rounded-lg border border-base-content/20 bg-base-200 p-8 md:p-10 flex flex-col">
        <IconHammer class="w-6 text-base-content/50 mb-6" />
        <h3 class="text-xl font-semibold mb-2">Own the delivery</h3>
        <p class="text-sm text-base-content/40 leading-relaxed mb-6">
          I take full project ownership. Hire the right remote team, set up the architecture, and ship your product from zero to production.
        </p>
        <ul class="text-sm text-base-content/40 space-y-2 mb-8 flex-1">
          <li class="flex gap-2"><span class="text-base-content/20">-</span> End-to-end project ownership</li>
          <li class="flex gap-2"><span class="text-base-content/20">-</span> Global team hiring & coordination</li>
          <li class="flex gap-2"><span class="text-base-content/20">-</span> AI-accelerated delivery (10-20x output)</li>
          <li class="flex gap-2"><span class="text-base-content/20">-</span> Architecture to production deploy</li>
        </ul>
        <a href="mailto:hi@benjaminkarlsson.com?subject=Project inquiry" class="text-sm font-medium text-center py-3 bg-base-content text-base-100 rounded-lg hover:opacity-90 transition-opacity">
          Discuss a project
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Why This Works -->
<section class="py-24 px-4 border-t border-base-300">
  <div class="max-w-5xl mx-auto">
    <div class="max-w-2xl">
      <p class="text-xs uppercase tracking-widest text-base-content/30 mb-3">The advantage</p>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-6">A Lean Team That Ships Like a Big One</h2>
      <div class="text-base text-base-content/50 leading-relaxed space-y-4">
        <p>
          Most startups either hire too many developers too early, or hire too few and move too slowly.
          I solve that gap. I hire a small, senior remote team — then multiply their output with
          AI-accelerated workflows across code generation, PR reviews, and testing.
        </p>
        <p>
          The result: a 3-person team delivering what normally takes 10. Less burn rate,
          faster shipping, higher code quality. You get technical leadership, a working team,
          and a product in production — without building a full engineering org from scratch.
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
