<script setup>
import {BriefcaseBusiness, ExternalLink, GraduationCap} from 'lucide-vue-next'
</script>

<template>
  <div class="experience-section">
    <div class="container">
      <div class="flex gap-x-40 flex-col md:flex-row">
        <div class="w-full md:w-1/2">
          <div class="flex items-center mb-10 md:my-12">
            <div>
              <BriefcaseBusiness class="w-10 h-10 md:w-16 md:h-16 text-[color:var(--tj-theme-primary)]"/>
            </div>
            <h2 class="section-title text-[30px] md:text-[45px] ml-2">
              My Experience
            </h2>
          </div>
          <div class="flex flex-col">
            <div class="card group/resume hover:bg-[color:var(--tj-theme-primary)]">
              <div class="resume-item">
                <div
                    class="group-hover/resume:text-white text-xl font-extrabold mb-2 text-[color:var(--tj-theme-primary)]">
                  2020 - Present
                </div>
                <h3 class="text-lg md:text-2xl font-bold uppercase mb-2">Lead Software Engineer</h3>
                <div class="">
                  <a href="" class="flex items-center">
                    <!--                  <img src="../assets/image/jatri.png" />-->
                    <span> Jatri Service Limited</span>
                    <ExternalLink
                        class="w-5 h-5 ml-2 hidden group-hover/resume:block transition-all ease-in-out duration-700"/>
                  </a>
                </div>
              </div>
            </div>
            <div class="card group/resume hover:bg-[color:var(--tj-theme-primary)]">
              <div class="resume-item">
                <div
                    class="group-hover/resume:text-white text-xl font-extrabold mb-2 text-[color:var(--tj-theme-primary)]">
                  2020 - Present
                </div>
                <h3 class="text-lg md:text-2xl font-bold uppercase mb-2">Software Engineer</h3>
                <div class="">
                  <a href="" class="flex items-center">
                    <!--                  <img src="../assets/image/jatri.png" />-->
                    <span> Jatri Service Limited</span>
                    <ExternalLink
                        class="w-5 h-5 ml-2 hidden group-hover/resume:block transition-all ease-in-out duration-700"/>

                  </a>
                </div>
              </div>
            </div>
            <div class="card group/resume hover:bg-[color:var(--tj-theme-primary)]">
              <div class="resume-item">
                <div
                    class="group-hover/resume:text-white text-xl font-extrabold mb-2 text-[color:var(--tj-theme-primary)]">
                  2020 - Present
                </div>
                <h3 class="text-lg md:text-2xl font-bold uppercase mb-2">FullStack Developer</h3>
                <div class="">
                  <a href="" class="flex items-center">
                    <!--                  <img src="../assets/image/jatri.png" />-->
                    <span> Jatri Service Limited</span>
                    <ExternalLink
                        class="w-5 h-5 ml-2 hidden group-hover/resume:block transition-all ease-in-out duration-700"/>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="flex items-center mb-10 md:my-12">
            <div>
              <GraduationCap class="w-10 h-10 md:w-16 md:h-16 text-[color:var(--tj-theme-primary)]"/>
            </div>
            <h2 class="section-title text-[30px] md:text-[45px] ml-2">
              My Education
            </h2>
          </div>
          <div class="flex flex-col">
            <div class="card group/resume hover:bg-[color:var(--tj-theme-primary)]">
              <div class="resume-item">
                <div
                    class="group-hover/resume:text-white text-xl font-extrabold mb-2 text-[color:var(--tj-theme-primary)]">
                  2020 - Present
                </div>
                <h3 class="text-lg md:text-2xl font-bold uppercase mb-2">Lead Software Engineer</h3>
                <div class="">
                  <a href="" class="flex items-center">
                    <!--                  <img src="../assets/image/jatri.png" />-->
                    <span> Jatri Service Limited</span>
                    <ExternalLink
                        class="w-5 h-5 ml-2 hidden group-hover/resume:block transition-all ease-in-out duration-700"/>

                  </a>
                </div>
              </div>
            </div>
            <div class="card group/resume hover:bg-[color:var(--tj-theme-primary)]">
              <div class="resume-item">
                <div
                    class="group-hover/resume:text-white text-xl font-extrabold mb-2 text-[color:var(--tj-theme-primary)]">
                  2020 - Present
                </div>
                <h3 class="text-lg md:text-2xl font-bold uppercase mb-2">Software Engineer</h3>
                <div class="">
                  <a href="" class="flex items-center">
                    <!--                  <img src="../assets/image/jatri.png" />-->
                    <span> Jatri Service Limited</span>
                    <ExternalLink
                        class="w-5 h-5 ml-2 hidden group-hover/resume:block transition-all ease-in-out duration-700"/>

                  </a>
                </div>
              </div>
            </div>
            <div class="card group/resume hover:bg-[color:var(--tj-theme-primary)]">
              <div class="resume-item">
                <div
                    class="group-hover/resume:text-white text-xl font-extrabold mb-2 text-[color:var(--tj-theme-primary)]">
                  2020 - Present
                </div>
                <h3 class="text-lg md:text-2xl font-bold uppercase mb-2">FullStack Developer</h3>
                <div class="">
                  <a href="" class="flex items-center">
                    <!--                  <img src="../assets/image/jatri.png" />-->
                    <span> Jatri Service Limited</span>
                    <ExternalLink
                        class="w-5 h-5 ml-2 hidden group-hover/resume:block transition-all ease-in-out duration-700"/>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-section {
  background: var(--tj-theme-accent-1);
  position: relative;
  overflow: hidden;
}

.resume-item img {
  border-radius: 5px;
  width: 30px;
  margin-right: 5px;
}
</style>