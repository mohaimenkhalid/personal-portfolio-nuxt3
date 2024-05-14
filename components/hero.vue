<script setup>
import { Download, Linkedin, Github } from 'lucide-vue-next';
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <div class="w-full flex">
        <div class="w-full md:w-2/3">
          <span class="hero-sub-title">Welcome to my site.</span>
          <h1 class="heading-hero ">I'm <strong>Abdul Mohaimen</strong>, a Frontend developer.</h1>


<!--          <h1 class="hero-title bg-clip text-[32px] md:text-[65px]">Abdul Mohaimen</h1>-->
<!--          <h1 class="hero-title bg-clip text-[32px] md:text-[30px]">Sr. Frontend Engineer</h1>-->
          <div class="w-full block md:hidden my-6">
            <div class="hero-image">
              <img class="!w-[250px] !h-[300px]" src="../assets/image/mohaimen_desk.webp"  alt="mohaimen-img" />
            </div>
          </div>
          <p class="">
            As a seasoned Software Engineer with over 7 years of experience 🚀,
            I specialize in designing and implementing highly scalable API-based
            solutions with a focus on improving performance. My biggest achievements
            include creating efficient systems that have significantly improved business
            operations for various clients.


            With <strong>[4+ years]</strong> of experience in the industry, I've honed my skills in
            crafting elegant frontend architectures that blend modern technology
            with best practices in user experience design.
          </p>
          <p class="mt-4">
            As a <strong>Lead Frontend Developer</strong> in @<strong>JATRI</strong>, I thrive on mentoring and leading development teams.
            I've consistently upheld and strengthened my abilities in communication and collaboration,
            cultivating fruitful connections with designers, frontend developers, backend developers, and stakeholders.
          </p>
          <div class="flex mt-10 items-center gap-5 flex-col md:flex-row">
            <a class="btn-download" href="">
              Download CV
              <Download class="h-5 w-5" />
            </a>
            <div class="flex gap-x-2">
              <a class="social-icon" href="">
                <Linkedin class="h-5 w-5" />
              </a>
              <a class="social-icon" href="">
                <Github class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 hidden md:block">
          <div class="hero-image">
            <img src="../assets/image/mohaimen_desk.webp"  alt="mohaimen-img" />
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
  --tw-gradient-to: rgba(14,165,233,0);
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
  -webkit-box-shadow: 0px 0px 91px 0px rgba(135,80,247,1);
  -moz-box-shadow: 0px 0px 91px 0px rgba(135,80,247,1);
  box-shadow: 0px 0px 91px 0px rgba(135,80,247,1);
}



</style>
