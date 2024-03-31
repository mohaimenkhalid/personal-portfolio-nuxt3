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
        </div>
        <div class="w-1/2">
          <h2>Image Section</h2>
        </div>
      </div>
    </div>
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
</style>
