<template>
  <div class="contact-section">
    <div class="container">
      <div class="flex">
        <div class="w-full md:w-1/2">
          <div class="contact-form p-10 rounded-xl">
            <h2 class="section-title text-[30px] md:text-[45px]">
              Let’s work together!
            </h2>
            <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
            <form>
              <div class="">
                <input type="text" placeholder="Name">
              </div>
              <div class="">
                <input type="email" placeholder="Email">
              </div>
              <div class="">
                <input type="number" placeholder="Phone">
              </div>
              <div class="">
                <textarea placeholder="Message"></textarea>
              </div>
            </form>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="py-3">
            test
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .contact-section {
    background: var(--tj-theme-accent-1);
    position: relative;
    overflow: hidden;
  }

  .contact-form {
    background: var(--tj-theme-accent-2);
  }
</style>
<script setup lang="ts">
</script>