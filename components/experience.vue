<script setup>
import {BriefcaseBusiness, ExternalLink, GraduationCap} from 'lucide-vue-next'
</script>

<template>
  <div class="experience-section">
    <div class="container">
      <div class="flex gap-x-40 flex-col md:flex-row">
        <div class="history-tl-container">
          <ul class="tl">
            <li class="tl-item exp-list-box-item">
              <div class="timestamp">
                3rd March 2015<br> 7:00 PM
              </div>
              <div class="item-title text-xl">Lead Software Engineer (Frontend)</div>
              <div class="text-sm font-semibold text-gray-400">Jatri Service Limited</div>
              <div class="">
                <ul class="list-outside list-disc pl-4 text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
                  <li class="">task i had done</li>
                  <li>task i had done</li>
                  <li>task i had done</li>
                </ul>
              </div>
            </li>
            <li class="tl-item exp-list-box-item">
              <div class="timestamp">
                19th March 2015<br> 3:00 PM
              </div>
              <div class="item-title text-xl">Software Engineer</div>
              <div class="text-sm font-semibold text-gray-400">Jatri Service Limited</div>
              <div class="">
                <ul class="list-outside list-disc pl-4 text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
                  <li class="">task i had done</li>
                  <li>task i had done</li>
                  <li>task i had done</li>
                </ul>
              </div>
            </li>
            <li class="tl-item exp-list-box-item">
              <div class="timestamp">
                1st June 2015<br> 7:00 PM
              </div>
              <div class="item-title text-xl">Software Engineer</div>
              <div class="text-sm font-semibold text-gray-400">NamespceIT</div>
              <div class="">
                <ul class="list-outside list-disc pl-4 text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
                  <li class="">task i had done</li>
                  <li>task i had done</li>
                  <li>task i had done</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-section {
  background: transparent;
  position: relative;
  overflow: hidden;
}

.resume-item img {
  border-radius: 5px;
  width: 30px;
  margin-right: 5px;
}

.history-tl-container {
  /*font-family: "Roboto", sans-serif;*/
  width: 100%;
  margin: auto;
  display: block;
  position: relative;
}

.history-tl-container ul.tl {
  margin: 20px 0;
  padding: 0;
  display: inline-block;

}

.history-tl-container ul.tl li.exp-list-box-item{
  list-style: none;
  margin: auto;
  margin-left: 200px;
  min-height: 50px;
  border-left: 1px solid #6b6b6b;
  padding: 0 0 25px 30px;
  position: relative;
}

.history-tl-container ul.tl li.exp-list-box-item:last-child {
  border-left: 0;
}

.history-tl-container ul.tl li.exp-list-box-item::before {
  position: absolute;
  left: -16px;
  top: -5px;
  content: " ";
  border: 6px solid rgba(255, 255, 255, 0.74);
  border-radius: 500%;
  background: #485156;
  height: 30px;
  width: 30px;
  transition: all 500ms ease-in-out;

}

.history-tl-container ul.tl li.exp-list-box-item:hover::before {
  border-color: #258CC7;
  transition: all 1000ms ease-in-out;
}

ul.tl li .item-title {
}

.history-tl-container ul.tl li .timestamp {
  color: #8D8D8D;
  position: absolute;
  width: 100px;
  left: -50%;
  text-align: right;
  font-size: 12px;
}
</style>