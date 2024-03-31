<script setup>
import { Download, Linkedin, Github } from 'lucide-vue-next';
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <div class="w-full flex">
        <div class="w-1/2">
          <span class="hero-sub-title">I am Mohaimen</span>
          <h1 class="hero-title">Software Engineer <br /> <span>(Frontend)</span></h1>
          <p class="hero-lead">
            I break down complex user experience
            problems to create Integrity focussed solutions that connect billions of people
          </p>
          <div class="flex mt-10 items-center gap-x-5">
            <a class="btn-download" href="">
              Download CV
              <Download class="h-5 w-5" />
            </a>
            <a class="social-icon" href="">
              <Linkedin class="h-5 w-5" />
            </a>
            <a class="social-icon" href="">
              <Github class="h-5 w-5" />
            </a>
          </div>
        </div>
        <div class="w-1/2">
          <div class="hero-image">
            <img src="../assets/image/mohaimen_dark.jpg"  alt="mohaimen-img" />
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
  width: 450px;
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
  mix-blend-mode: luminosity;
}

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
