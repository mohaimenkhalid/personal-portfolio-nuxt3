<script setup lang="ts">

</script>
<template>
  <section class="resume-container">
    <div class="container">
      <ClientOnly>
        <vue-pdf-app
            style="height: 80vh"
            pdf="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf">
        </vue-pdf-app>
      </ClientOnly>
    </div>
  </section>
</template>

<style scoped>
.resume-container {
  padding: 160px 0 50px;
}

.resume-container:before {
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