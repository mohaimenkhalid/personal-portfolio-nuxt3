<template>
  <div>
    <input type="checkbox" id="hamburger-checkbox" class="hamburger-checkbox visuallyHidden">
    <label for="hamburger-checkbox">
      <div class="hamburger hamburger-menu">
        <span class="bar bar1"></span>
        <span class="bar bar2"></span>
        <span class="bar bar3"></span>
        <span class="bar bar4"></span>
      </div>
    </label>
  </div>
</template>

<style scoped>
/* HAMBURGER 3 */

.bar1 {
  top: 0;
}

.bar2,
.bar3 {
  top: 13.5px;
}

.bar3 {
  right: 0;
}

.bar4 {
  bottom: 0;
}

.visuallyHidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.hamburger {
  margin: 0 auto;
  width: 30px;
  height: 30px;
  position: relative;
}

.hamburger .bar {
  padding: 0;
  width: 30px;
  height: 4px;
  background-color: #ffffff;
  display: block;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
  position: absolute;
}

.hamburger-menu .bar1 {
  transform-origin: 5%;
}

.hamburger-menu .bar4 {
  transform-origin: 5%;
}

.hamburger-checkbox:checked + label > .hamburger-menu > .bar1 {
  transform: rotate(45deg);
  height: 3px;
  width: 42px;
}

.hamburger-checkbox:checked + label > .hamburger-menu > .bar3 {
  transform: rotate(45deg);
  height: 3px;
  background-color: transparent;
}

.hamburger-checkbox:checked + label > .hamburger-menu > .bar2 {
  transform: rotate(-45deg);
  height: 3px;
  background-color: transparent;
}

.hamburger-checkbox:checked + label > .hamburger-menu > .bar4 {
  transform: rotate(-45deg);
  height: 3px;
  width: 42px;
}

</style>