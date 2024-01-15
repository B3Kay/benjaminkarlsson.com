<script lang="ts">
  import IconLinkedin from "~icons/mingcute/linkedin-fill";
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

  let inputRef: HTMLAnchorElement;

  const onClickFocus = () => {
    inputRef.focus();
  };
</script>

<div class="hero min-h-screen">
  <div class="hero-content block lg:flex gap-8 p-0">
    <div class="mt-12 sm:mt-0 max-w-lg text-center md:text-left">
      <!-- <h6 class="uppercase">Welcome to Benjamin Karlsson</h6> -->
      <div class=" badge badge-accent badge-outline mb-4">Remote First</div>

      <h1 class="lg:text-7xl md:text-6xl text-4xl font-black">
        <span class="brightness-150 contrast-150">
          Freelancing Fullstack Excellence
        </span>
        <img
          class="w-16 inline"
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Star-Struck.png"
          alt="Star-Struck"
        />
      </h1>
      <p class="py-9 text-base">
        Senior experience in front-end development, specializing in TypeScript,
        React.js, and advanced patterns like hooks, Redux, and routing.
        Dedicated to creating user-friendly, feature-rich websites. Proficient
        in Mono repo tools, Styled components, Jest, Storybook, and Git.
      </p>

      <div class="carousel carousel-end mb-9 w-full text-neutral-600">
        <div class="carousel-item">
          <SveleIcon class="w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <ReactIcon class="w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <ReduxIcon class="w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <StorybookIcon class="w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <TypescriptIcon class="w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <JavascriptIcon class="w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <CssIcon class="w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <HtmlIcon class="w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <JestIcon class="w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <GitIcon class="w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <FirebaseIcon class="w-16 hover:text-neutral-content" />
        </div>
        <div class="carousel-item">
          <FigmaIcon class="w-16 hover:text-neutral-content" />
        </div>
      </div>
      <!-- <div class="flex gap-4 text-primary mb-9">
        <SveleIcon class="" />
        <ReactIcon class="" />
        <ReduxIcon class="" />
        <StorybookIcon class="" />
        <TypescriptIcon class="" />
        <JavascriptIcon class="" />
        <CssIcon class="" />
        <HtmlIcon class="" />
        <JestIcon class="" />
        <GitIcon class="" />
        <FirebaseIcon class="" />
        <FigmaIcon class="" />
      </div> -->
      <div class=" join-vertical join md:join-horizontal gap-2">
        <a
          class="btn btn-lg md:btn-md btn-neutral btn-wide normal-case ring-primary"
          href="/asset/Benjamin CV Fullstack Typescript - 2023.pdf"
          target="_blank">Read my cv</a
        >
        <a
          on:click={onClickFocus}
          class="btn btn-lg md:btn-md btn-primary btn-wide normal-case"
          href="#contact-info-benjamin">Get in touch <IconArrowRight /></a
        >
      </div>
    </div>
    <div class="h-24 lg:hidden" />
    <!-- Chatt window -->
    <!-- <div class="mockup-window border border-base-300">
      <div
        class="flex justify-center px-4 py-8 md:py-16 border-t border-base-300"
      >
        <div>
          <div class="chat pt-4 md:pt-1 chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGZhY2UlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                />
              </div>
            </div>
            <div class="chat-header">
              You
              <time class="text-xs opacity-50">5 min ago</time>
            </div>
            <div class="chat-bubble">👋Hi Benji! Impressed by your skills!</div>
          </div>
          <div class="chat pt-4 md:pt-1 chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  src="/asset/cv-no-smile-fancy-500.jpg"
                />
              </div>
            </div>
            <div class="chat-header">
              Benji
              <time class="text-xs opacity-50">3 min ago</time>
            </div>

            <div class="chat-bubble">😁Thanks! What's up?</div>
          </div>

          <div class="chat pt-4 md:pt-1 chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGZhY2UlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                />
              </div>
            </div>
            <div class="chat-header">
              You
              <time class="text-xs opacity-50">1 min ago</time>
            </div>
            <div class="chat-bubble">
              📞 Interested in a chat? Drop your email. 😁😉
            </div>
          </div>
          <div class="chat pt-4 md:pt-1 chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full" />
            </div>
            <div class="chat-header">
              Benji
              <time class="text-xs opacity-50">Just now</time>
            </div>
            <div class="chat-bubble">
              Sure 👍, here it is

              <a
                class="link link-primary"
                href="hi@benjaminkarlsson.com"
                target="_blank"
                rel="noopener noreferrer">hi@benjaminkarlsson.com</a
              >
              or reach me at
              <a
                class="link link-primary"
                href="https://www.linkedin.com/in/benjik/"
                target="_blank"
                rel="noopener noreferrer">linkedin.com/in/benjik</a
              >
            </div>
          </div>
          <div class="chat pt-4 md:pt-1 chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  src="/asset/cv-no-smile-fancy-500.jpg"
                />
              </div>
            </div>
            <div class="chat-header" />
            <div class="chat-bubble">Have a good time! 😉😁</div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- chat wwindow 2 -->
    <div class="mockup-window border border-base-300 backdrop-blur">
      <div
        class="flex justify-center px-4 py-8 md:py-16 border-t border-base-300"
      >
        <div class="text-xl sm:text-lg md:text-base">
          <div class="chat pt-4 md:pt-1 chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGZhY2UlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                />
              </div>
            </div>

            <div class="chat-bubble">👋Hi Benji! Impressed by your skills!</div>
          </div>
          <div class="chat pt-4 md:pt-1 chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img src="/asset/cv-no-smile-fancy-500.jpg" />
              </div>
            </div>

            <div class="chat-bubble chat-bubble-primary">
              Thanks! Nice to hear that 😁
            </div>
          </div>

          <div class="chat pt-4 md:pt-1 chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGZhY2UlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                />
              </div>
            </div>

            <div class="chat-bubble">
              Interested in a chat? Drop your email. <br />
              I'll send an invite for the call 😉
            </div>
          </div>
          <div class="chat pt-4 md:pt-1 chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full" />
            </div>

            <div
              class="relative block rounded-2xl min-h-[2.75rem] min-w-6 px-4 py-2 max-w-9/10
            chat-bubble-primary
            focus-within:bg-primary-focus
            focus-within:text-slate
            focus-within:ring-2
            ring-primary
            ring-offset-2
            ring-offset-slate-900
            "
              id="contact-info-benjamin"
              tabindex="-1"
            >
              <p>
                Sure 👍, here it is

                <a
                  bind:this={inputRef}
                  class="link font-semibold inline-block"
                  href="mailto:hi@benjaminkarlsson.com"
                  target="_blank"
                  rel="noopener noreferrer">hi@benjaminkarlsson.com</a
                >
                or reach me at
                <a
                  class="link font-semibold inline-block"
                  href="https://www.linkedin.com/in/benjik/"
                  target="_blank"
                  rel="noopener noreferrer">linkedin.com/in/benjik</a
                >
                and
                <a
                  class="link font-semibold inline-block"
                  href="tel:+46-73 182 86 65">+46-73 182 86 65</a
                >
              </p>
            </div>
          </div>
          <div class="chat pt-4 md:pt-1 chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img src="/asset/cv-no-smile-fancy-500.jpg" />
              </div>
            </div>
            <div class="chat-header" />
            <div class="chat-bubble chat-bubble-primary">
              Have a good time! 😉😁
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of chat window -->
  </div>
</div>
