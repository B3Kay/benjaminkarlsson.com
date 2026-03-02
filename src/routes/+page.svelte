<script lang="ts">
  import * as config from "$lib/config";
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
</script>

<svelte:head>
  <title>{config.title} - Freelance Full Stack Developer</title>
  <meta name="description" content="Senior Full Stack Developer with 5+ years experience specializing in TypeScript, React, and Svelte. Available for freelance work." />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{config.title} - Freelance Full Stack Developer" />
  <meta property="og:description" content="Senior Full Stack Developer with 5+ years experience specializing in TypeScript, React, and Svelte. Available for freelance work." />
  <meta property="og:url" content={config.url} />
</svelte:head>

<div class="hero min-h-screen">
  <div class="hero-content block lg:flex gap-8 p-0">
    <div class="mt-12 sm:mt-0 max-w-lg text-center md:text-left">
      <div class="badge badge-accent badge-outline mb-4 animate-fade-in-up">Remote First</div>

      <h1 class="lg:text-7xl md:text-6xl text-4xl font-black animate-fade-in-up-delay-1">
        <span class="brightness-150 contrast-150">
          Freelancing Full Stack Developer
        </span>
        <img
          class="w-16 inline"
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Star-Struck.png"
          alt="Star-Struck"
        />
      </h1>
      <p class="py-9 text-base animate-fade-in-up-delay-2">
        Senior with 5+ years experience in front-end development, specializing
        in TypeScript, React.js, and advanced patterns like hooks, Redux, and
        routing. Dedicated to creating user-friendly, feature-rich websites.
        Proficient in Mono repo tools, Styled components, Jest, Storybook, and
        Git.
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

<ChatWall />
