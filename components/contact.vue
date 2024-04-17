<script setup>
import { PhoneForwarded, Mail, BookUser } from 'lucide-vue-next';
</script>
<template>
  <div class="contact-section">
    <div class="container">
      <div class="flex items-center">
        <div class="w-full md:w-1/2">
          <div class="contact-form p-10 rounded-xl">
            <h2 class="section-title text-[30px] md:text-[45px]">
              Let’s work together!
            </h2>
            <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
            <form class="mt-5">
              <div class="">
                <input type="text" placeholder="Your Name">
              </div>
              <div class="">
                <input type="email" placeholder="Email Address">
              </div>
              <div class="">
                <input type="number" placeholder="Phone Number">
              </div>
              <div class="">
                <textarea placeholder="Message"></textarea>
              </div>
              <div class="mt-8">
                <Button as-child>
                  <a href="/" class="hire-me-btn !py-7">
                    Send Message
                  </a>
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="contact-information ml-16 md:ml-20">
            <div>
              <PhoneForwarded />
              phone</div>
            <div>
              <Mail />
              Email</div>
            <div>
              <BookUser />
              Address</div>
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

  .contact-form input, textarea {
    display: block;
    width: 100%;
    background: var(--tj-black-2);
    border: 1px solid var(--tj-grey-4);
    font-size: 16px;
    line-height: 1;
    color: var(--tj-white);
    padding: 14px 20px;
    border-radius: 8px;
    transition: all 0.3s 0s ease-out;
    outline: none;
    height: auto;
    margin-bottom: 5px;
  }

  .contact-form textarea {
    min-height: 150px;
  }

  .contact-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>