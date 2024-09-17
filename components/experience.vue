<script setup>
import {BriefcaseBusiness, ExternalLink, GraduationCap} from 'lucide-vue-next'
</script>

<template>
  <div class="experience-section">
    <div class="container">
      <div class="flex gap-x-40 flex-col md:flex-row">
        <div class="history-tl-container experience-content-section">
          <h2 class="section-title text-[30px] md:text-[45px]">Experience</h2>
          <ul class="tl">
            <li class="tl-item exp-list-box-item">
              <div class="bg-[var(--tj-black-primary)] w-full md:w-[500px] rounded-2xl p-4">
                <div class="text-[var(--tj-theme-primary-2)] font-semibold">
                  Jan, 2023-present
                </div>
                <div class="text-xl font-semibold">Lead Software Engineer (Frontend)</div>
                <div class="text-sm font-semibold text-[#bab3a8]">Jatri Service Limited</div>
                <div class="">
                  <ul class="list-outside list-disc pl-4 text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
                    <li>Led a team of 8 frontend developers in designing, developing, and maintaining high-quality,
                      scalable web applications.
                    </li>
                    <li>Established and enforced best practices for frontend development, including - code reviews,
                      coding standards, and performance optimization.
                    </li>
                    <li>Collaborated closely with designers and backend engineers and product managers, to ensure timely
                      and successful project delivery.
                    </li>
                    <li>Mentored junior developers and conducted code reviews to ensure high-quality standards.</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="tl-item exp-list-box-item">
              <div class="bg-[var(--tj-black-primary)] w-full md:w-[500px] rounded-2xl p-4">
                <div class="text-[var(--tj-theme-primary-2)] font-semibold">
                  Jan 2022 - Jan 2023
                </div>
                <div class="text-xl font-semibold">Software Engineer</div>
                <div class="text-sm font-semibold text-[#bab3a8]">Jatri Service Limited</div>
                <div class="">
                  <ul class="list-outside list-disc pl-4 text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
                    <li>Developed/Led 3 products from scratch:
                      <br/> ‣ Online Ticketing [Bus, Launch](B2C)
                      <br/> ‣ Intercity [Admin panel, Operator panel, Seller Panel, Agent Panel](B2B)
                      <br/> ‣ Water transport(B2B) [Admin panel, Operator panel, Seller Panel]
                    </li>
                    <li>Optimized web application performance by 40% using new frontend architecture and technic</li>
                    <li>Implemented new feature , re-build/refactor features & Bug fixing in various projects</li>
                    <li>Build reusable components it saves development time</li>
                    <li>Helping other frontend Engineers in frontend tasks</li>
                    <li>Mentoring existing team members & new Joiners in the frontend team</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="tl-item exp-list-box-item">
              <div class="bg-[var(--tj-black-primary)] w-full md:w-[500px] rounded-2xl p-4">
                <div class="text-[var(--tj-theme-primary-2)] font-semibold">
                  2000-2024
                </div>
                <div class="text-xl font-semibold">Software Engineer (Fullstack)</div>
                <div class="text-sm font-semibold text-[#bab3a8]">Namespace IT</div>
                <div class="">
                  <ul class="list-outside list-disc pl-4 text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
                    <li>B2B services: Intercity, Ship Management</li>
                    <li>B2C services: Jatri Rental, Jatri Online Ticket</li>
                    <li>Gov. Project: Worked with various gov. projects</li>
                    <li>Also maintaining legacy products</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="history-tl-container education-content-section">
          <h2 class="section-title text-[30px] md:text-[45px]">Education</h2>
          <ul class="tl">
            <li class="tl-item exp-list-box-item">
              <div class="bg-[var(--tj-black-primary)] w-full md:w-[500px] rounded-2xl p-4">
                <div class="text-[var(--tj-theme-primary-2)] font-semibold">
                  2014-2018
                </div>
                <div class="text-xl font-semibold">B.Sc. in Computer Science & Engineering (CSE)</div>
                <div class="text-sm font-semibold text-[#bab3a8]">Daffodil International University</div>
                <div class="">
                  CGPA: 3.36 out of 4.00
                </div>
              </div>
            </li>
            <li class="tl-item exp-list-box-item">
              <div class="bg-[var(--tj-black-primary)] w-full md:w-[500px] rounded-2xl p-4">
                <div class="text-[var(--tj-theme-primary-2)] font-semibold">
                  2010-2012
                </div>
                <div class="text-xl font-semibold">Higher Secondary Certificate (HSC)</div>
                <div class="text-sm font-semibold text-[#bab3a8]">Fulbaria College</div>
                <div class="">
                  GPA: 5.00 out of 5.00
                </div>
              </div>
            </li>
            <li class="tl-item exp-list-box-item">
              <div class="bg-[var(--tj-black-primary)] w-full md:w-[500px] rounded-2xl p-4">
                <div class="text-[var(--tj-theme-primary-2)] font-semibold">
                  2000-2024
                </div>
                <div class="text-xl font-semibold">Secondary School Certificate (SSC)</div>
                <div class="text-sm font-semibold text-[#bab3a8]">Al-hera Academy High School</div>
                <div class="">
                  GPA: 5.00 out of 5.00
                </div>
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
  display: block;
  position: relative;
}

.history-tl-container ul.tl {
  margin: 20px 0;
  padding: 0;
  display: inline-block;

}

.history-tl-container ul.tl li.exp-list-box-item {
  list-style: none;
  margin: auto;
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

.history-tl-container ul.tl li .timestamp {
  color: #8D8D8D;
  position: absolute;
  width: 100px;
  left: -50%;
  text-align: right;
  font-size: 12px;
}

.title {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #06b6d4;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: rgba(14, 165, 233, 0);
  --tw-gradient-to: #3b82f6;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 800;
  color: transparent;
}

ul li {
  color: #b8b1a6;
}

.experience-content-section:before {
  content: "";
  position: absolute;
  top: 60%;
  left: -10%;
  width: 322px;
  height: 108px;
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

.education-content-section:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 35%;
  width: 322px;
  height: 108px;
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

@media screen and (max-width: 480px) {
  .history-tl-container ul.tl li.exp-list-box-item {
    border: none;
    padding: 0;
    margin-bottom: 15px;
  }

  .history-tl-container ul.tl li.exp-list-box-item:before {
    content: normal;
  }
}

</style>