<script setup lang="ts">
import { BriefcaseBusiness } from 'lucide-vue-next';

import {Button} from "~/components/ui/button";
const isOpenMobileMenu = ref(false)
</script>

<template>
  <header class="header-area header-absolute h-30">
    <div class="container flex items-center">
      <div class="logo mr-9">
        <a href="">
          <BriefcaseBusiness class="w-10 h-10" />
        </a>
      </div>
      <div class="hidden md:block">
        <ul class="m-0 p-0 list-none">
          <li class="inline-block">
            <a href="mailto:mohaimen707@gmail.com">mohaimen707@gmail.com</a>
          </li>
        </ul>
      </div>
      <div class="menu-bar mr-auto w-full">
        <div class="flex justify-end items-center">
          <nav class="hidden md:block">
            <ul class="m-0 p-0 flex gap-x-8 list-none">
              <li class="inline-block">
                <a href="/public">About</a>
              </li>
              <li class="inline-block">
                <a href="/public">Portfolio</a>
              </li>
              <li class="inline-block">
                <a href="">Resume</a>
              </li>
              <li class="inline-block">
                <a href="">Skill</a>
              </li>
              <li class="inline-block">
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
          <div class="ml-8">
            <Button as-child>
              <a href="mailto:mohaimen707@gmail.com" class="hire-me-btn">
                Let's Work
              </a>
            </Button>
          </div>
          <Hamburger v-model="isOpenMobileMenu" class="ml-5 block md:hidden" />
        </div>
      </div>
    </div>
  </header>
  <Transition name="slide">
    <div v-if="isOpenMobileMenu" class="mobile_menu_container block md:hidden">
      <ul class="mobile_menu">
        <li class="mobile_menu_list_item">
          <a href="/public">Services</a>
        </li>
        <li class="mobile_menu_list_item">
          <a href="/public">Work</a>
        </li>
        <li class="mobile_menu_list_item">Resume</li>
        <li class="mobile_menu_list_item">Skill</li>
        <li class="mobile_menu_list_item">Contact</li>
      </ul>
    </div>
  </Transition>
</template>

<style scoped>
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

ul li a{
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