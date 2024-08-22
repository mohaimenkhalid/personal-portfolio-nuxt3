<template>
  <div class="skills-section py-[20px] md:pt-[80px] md:pb-[40px]">
    <div class="container">
      <div class="section-header">
        <div class="w-full">
          <h2 class="section-title text-[30px] md:text-[45px]">My Skills</h2>
          <p>
            We put your ideas and thus your wishes in the
            form of a unique web project that inspires
            you and you customers.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap gap-x-6">
        <div class="skill-item group/skillItem">
          <div class="skill-inner" data-aos="flip-right">
            <img class="group-hover/skillItem:scale-125 transition-all ease-in-out duration-700" src="../assets/image/vue.svg">
          </div>
          <h3>Vue JS</h3>
        </div>
        <div class="skill-item group/skillItem">
          <div class="skill-inner" data-aos="flip-right">
            <img class="group-hover/skillItem:scale-125 transition-all ease-in-out duration-700" src="../assets/image/nuxt.svg">
          </div>
          <h3>Nuxt JS</h3>
        </div>
        <div class="skill-item group/skillItem">
          <div class="skill-inner" data-aos="flip-right">
            <img class="group-hover/skillItem:scale-125 transition-all ease-in-out duration-700" src="../assets/image/react.svg">
          </div>
          <h3>React</h3>
        </div>
        <div class="skill-item group/skillItem">
          <div class="skill-inner" data-aos="flip-right">
            <img class="group-hover/skillItem:scale-125 transition-all ease-in-out duration-700" src="../assets/image/nextjs.svg">
          </div>
          <h3>Next JS</h3>
        </div>
        <div class="skill-item group/skillItem">
          <div class="skill-inner" data-aos="flip-right">
            <img class="group-hover/skillItem:scale-125 transition-all ease-in-out duration-700" src="../assets/image/javascript.svg">
          </div>
          <h3>JS</h3>
        </div>
        <div class="skill-item group/skillItem">
          <div class="skill-inner" data-aos="flip-right">
            <img class="group-hover/skillItem:scale-125 transition-all ease-in-out duration-700" src="../assets/image/laravel.svg">
          </div>
          <h3>Laravel</h3>
        </div>
        <div class="skill-item group/skillItem">
          <div class="skill-inner" data-aos="flip-right">
            <img class="group-hover/skillItem:scale-125 transition-all ease-in-out duration-700" src="../assets/image/php.svg">
          </div>
          <h3>PHP</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.skills-section {
  background: transparent;
  position: relative;
  overflow: hidden;
}

.skill-item {
  @apply max-w-[140px] md:max-w-[180px] w-full text-center mb-12 relative transition-all ease-in-out duration-700
}

.skill-inner {
  border-radius: 25px;
  padding: 40px 15px 30px;
  border: 1px solid #e3e3e347;
  margin-bottom: 15px;
  transition: 0.5s;
  background: #ffffff12;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: grayscale(80%);
  height: 150px;
  cursor: pointer;
}

.skill-inner:hover {
  filter: grayscale(0%);
  border: 1px solid var(--tj-theme-primary);
  transform: translate(0, -10px);
}

.skill-item h3 {
  font-weight: 700;
  margin-top: 10px;
  color: var(--tj-theme-primary);
}

.skill-item .skill-inner img {
  width: 60px;
}
@media screen and (max-width: 480px) {
  .skill-inner {
    height: 80px;
    padding: 25px;
  }
  .skill-item {
    max-width: 80px;
  }
}


</style>
<script setup lang="ts">
</script>