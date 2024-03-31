<script setup lang="ts">
import {Button} from "~/components/ui/button";
import Hamburger from "~/components/ui/hamburger/Hamburger.vue";
const isOpenMobileMenu = ref(false)
</script>

<template>
  <header class="header-area header-absolute h-30">
    <div class="container flex items-center">
      <div class="logo mr-9">
        <a href="">
          <img width="80px" src="https://themejunction.net/html/gerold/demo/assets/img/logo/logo.png" alt="">
        </a>
      </div>
      <div>
        <ul class="m-0 p-0 list-none">
          <li class="inline-block">
<!--            <a>mohaimen707@gmail.com</a>-->
          </li>
        </ul>
      </div>
      <div class="menu-bar mr-auto w-full">
        <div class="flex justify-end items-center">
          <nav class="hidden md:block">
            <ul class="m-0 p-0 flex gap-x-8 list-none">
              <li class="inline-block">Services</li>
              <li class="inline-block">Work</li>
              <li class="inline-block">Resume</li>
              <li class="inline-block">Skill</li>
              <li class="inline-block">Contact</li>
            </ul>
          </nav>
          <div class="ml-8">
            <Button as-child>
              <a href="/" class="hire-me-btn">
                Hire Me
              </a>
            </Button>
          </div>
          <Hamburger v-model="isOpenMobileMenu" class="ml-5" />
        </div>
      </div>
    </div>
  </header>
<!--  v-if="isOpenMobileMenu"-->
  <Transition name="slide">
    <div v-if="isOpenMobileMenu" class="mobile_menu_container">
      <ul class="mobile_menu">
        <li class="mobile_menu_list_item">Services</li>
        <li class="mobile_menu_list_item">Work</li>
        <li class="mobile_menu_list_item">Resume</li>
        <li class="mobile_menu_list_item">Skill</li>
        <li class="mobile_menu_list_item">Contact</li>
      </ul>
    </div>
  </Transition>
</template>

<style>
.header-absolute {
  position: absolute;
  background-color: transparent;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
}

.header-area {
  padding: 40px 0 20px;
}

.menu-bar ul li {
  font-weight: var(--tj-fw-medium);
  font-size: var(--tj-fz-btn);
}

.slide-enter-active {
  transition: all 0.6s ease-out;
}

.slide-leave-active {
  transition: all 0.6s ease-in-out;
}

.slide-enter-from {
  transform: translateX(-500px);
}
.slide-leave-to {
  transform: translateX(500px);
}

</style>