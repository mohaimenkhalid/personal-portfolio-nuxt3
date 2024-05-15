<script setup>
import {Download, Linkedin, Github} from 'lucide-vue-next';
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <div class="w-full flex">
        <div class="w-full md:w-2/3">
          <span class="hero-sub-title font-bold">Welcome to my site.</span>
          <h1 class="heading-hero ">I'm <strong>Abdul Mohaimen</strong>, a Frontend developer.</h1>
          <ul class="sm:scrollbar-none -mx-4 mb-2 flex items-center gap-6 overflow-x-auto px-4 pb-2 text-[15px] font-medium">
            <li class="flex items-center gap-2 text-gray-500 d:text-gray-400">
              <svg
                  class="text-sm me-0 w-7 h-7 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out"
                  viewBox="0 0 128 128" height="1em" width="1em" data-v-c5baed57="">
                <path fill="currentColor" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                      data-v-c5baed57=""></path>
                <path fill="#565758" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-c5baed57=""></path>
              </svg>
              Vue JS
            </li>

            <li class="flex items-center gap-2 text-gray-500 d:text-gray-400">
              <svg height="1em" width="1em" viewBox="-10.5 -9.45 21 18.9" fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                   class="text-sm me-0 w-7 h-7 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out">
                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                <g stroke="currentColor" stroke-width="1" fill="none">
                  <ellipse rx="10" ry="4.5"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
              </svg>
              React JS
            </li>
            <li class="flex items-center gap-2 text-gray-500 d:text-gray-400">
              <svg class="text-black dark:text-white block w-7 h-7" stroke-width="0" height="1em" width="1em"
                   viewBox="0 0 300 200"
                   fill="none" xmlns="http://www.w3.org/2000/svg">

                <path
                    d="M168 200H279C282.542 200 285.932 198.756 289 197C292.068 195.244 295.23 193.041 297 190C298.77 186.959 300.002 183.51 300 179.999C299.998 176.488 298.773 173.04 297 170.001L222 41C220.23 37.96 218.067 35.7552 215 34C211.933 32.2448 207.542 31 204 31C200.458 31 197.067 32.2448 194 34C190.933 35.7552 188.77 37.96 187 41L168 74L130 9.99764C128.228 6.95784 126.068 3.75491 123 2C119.932 0.245087 116.542 0 113 0C109.458 0 106.068 0.245087 103 2C99.9323 3.75491 96.7717 6.95784 95 9.99764L2 170.001C0.226979 173.04 0.00154312 176.488 1.90993e-06 179.999C-0.0015393 183.51 0.229648 186.959 2 190C3.77035 193.04 6.93245 195.244 10 197C13.0675 198.756 16.4578 200 20 200H90C117.737 200 137.925 187.558 152 164L186 105L204 74L259 168H186L168 200ZM89 168H40L113 42L150 105L125.491 147.725C116.144 163.01 105.488 168 89 168Z"
                    fill="#565967"></path>
              </svg>
              Nuxt JS
            </li>
            <li class="flex items-center gap-2 text-gray-500 d:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" fill="none"
                   class="h-7 w-7 text-gray-400 d:text-gray-300/80">
                <mask id="nextjs_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"
                      style="mask-type: alpha;">
                  <circle cx="90" cy="90" r="90" fill="#000"></circle>
                </mask>
                <g mask="url(#nextjs_svg__a)">
                  <circle cx="90" cy="90" r="87" fill="currentColor" stroke="transparent" stroke-width="6"></circle>
                  <path
                      d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 0 0 9.509-7.325Z"
                      fill="url(#nextjs_svg__b)"></path>
                  <path fill="url(#nextjs_svg__c)" d="M115 54h12v72h-12z"></path>
                </g>
                <defs>
                  <linearGradient id="nextjs_svg__b" x1="109" y1="116.5" x2="144.5" y2="160.5"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="nextjs_svg__c" x1="121" y1="54" x2="120.799" y2="106.875"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              Next.js
            </li>
            <li class="flex items-center gap-2 text-gray-500 d:text-gray-400">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24"
                   class="h-7 w-7 text-gray-400 d:text-gray-300/80" height="1em" width="1em"
                   xmlns="http://www.w3.org/2000/svg"><title></title>
                <path
                    d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
              </svg>
              Tailwind
            </li>
            <li class="flex items-center gap-2 text-gray-500 d:text-gray-400">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 45 55"
                   class="h-7 w-7 text-gray-400 d:text-gray-300/80" height="1em" width="1em"
                   xmlns="http://www.w3.org/2000/svg"><title></title>
                <path xmlns="http://www.w3.org/2000/svg"
                      d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z"
                      fill="currentColor"/>
              </svg>
              Laravel
            </li>
          </ul>
          <div class="w-full block md:hidden my-6">
            <div class="hero-image">
              <img class="!w-[250px] !h-[300px]" src="../assets/image/mohaimen_desk.webp" alt="mohaimen-img"/>
            </div>
          </div>
          <p class="text-gray-400 text-xl tracking-tight">
            As a Software Engineer with over 4+ years of experience 🚀,
            I specialize in designing and implementing highly scalable API-based
            solutions with a focus on improving performance. My biggest achievements
            include creating efficient systems that have significantly improved business
            operations for various clients.

          </p>
          <p class="text-gray-400 mt-4 text-xl tracking-tight">
            Currently I lead a frontend team. As a <strong class="base-highlighter">Lead Frontend Developer</strong> at @<strong>JATRI</strong>, I thrive on mentoring and leading
            development teams.
            I've consistently upheld and strengthened my abilities in communication and collaboration,
            cultivating fruitful connections with designers, frontend developers, backend developers and stakeholders.
          </p>
          <div class="flex mt-10 items-center gap-5 flex-col md:flex-row">
            <a class="btn-download" href="">
              Download Resume
              <Download class="h-5 w-5"/>
            </a>
            <div class="flex gap-x-2">
              <a class="social-icon" href="">
                <Linkedin class="h-5 w-5"/>
              </a>
              <a class="social-icon" href="">
                <Github class="h-5 w-5"/>
              </a>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 hidden md:block">
          <div class="hero-image">
            <img src="../assets/image/mohaimen_desk.webp" alt="mohaimen-img"/>
          </div>
        </div>
      </div>
    </div>

    <!--    -webkit-box-shadow: 0px 0px 91px 0px rgba(135,80,247,0.51);-->
    <!--    -moz-box-shadow: 0px 0px 91px 0px rgba(135,80,247,0.51);-->
    <!--    box-shadow: 0px 0px 91px 0px rgba(135,80,247,0.51);-->
  </section>
</template>

<style scoped>

.heading-hero {
  margin-bottom: 1rem;
  font-size: 4.5rem;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -.05em;
}

.heading-hero strong {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #06b6d4;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: rgba(14, 165, 233, 0);
  --tw-gradient-to: #3b82f6;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 800;
  color: transparent;
}

.hero-section {
  background: var(--tj-theme-accent-1);
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 160px 0 50px;
}

.hero-section:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 322px;
  height: 308px;
  border-radius: 50%;
  background: var(--tj-theme-primary);
  background: -o-linear-gradient(190deg, var(--tj-theme-primary) 0%, rgba(115, 67, 210, 0) 100%);
  background: linear-gradient(260deg, var(--tj-theme-primary) 0%, rgba(115, 67, 210, 0) 100%);
  -webkit-filter: blur(150px);
  filter: blur(150px);
  margin-right: -5%;
  margin-top: -5%;
  z-index: -1;
}

.hero-image {
  display: flex;
  justify-content: center;
  position: relative;
}

.hero-image img {
  width: 400px;
  height: 500px;
  border: 3px solid var(--tj-theme-primary);
  border-radius: 38px;
  -webkit-transform: rotate(4.29deg);
  -ms-transform: rotate(4.29deg);
  transform: rotate(4.29deg);
  position: relative;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.5s;
}

/*mix-blend-mode: luminosity;*/

.hero-image img:hover {
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  mix-blend-mode: normal;
}

.hero-image:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: var(--tj-theme-primary);
  background: -o-linear-gradient(190deg, var(--tj-theme-primary) 0%, rgba(115, 67, 210, 0) 100%);
  background: linear-gradient(260deg, var(--tj-theme-primary) 0%, rgba(115, 67, 210, 0) 100%);
  -webkit-filter: blur(150px);
  filter: blur(150px);
  margin-left: -5%;
  margin-bottom: -5%;
}

.btn-download {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--tj-theme-primary);
  padding: 17px 35px;
  border-radius: 50px;
  letter-spacing: 1px;
  font-size: 16px;
  transition: .5s;
}

.btn-download:hover {
  background-color: var(--tj-theme-primary);
  -webkit-box-shadow: 0px 0px 91px 0px var(--tj-theme-primary);
  -moz-box-shadow: 0px 0px 91px 0px var(--tj-theme-primary);
  box-shadow: 0px 0px 91px 0px var(--tj-theme-primary);
}

.social-icon:hover {
  background-color: var(--tj-theme-primary);
  -webkit-box-shadow: 0px 0px 91px 0px var(--tj-theme-primary);
  -moz-box-shadow: 0px 0px 91px 0px var(--tj-theme-primary);
  box-shadow: 0px 0px 91px 0px var(--tj-theme-primary);
}

.base-highlighter {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #06b6d4;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: rgba(14, 165, 233, 0);
  --tw-gradient-to: #3b82f6;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}


</style>
