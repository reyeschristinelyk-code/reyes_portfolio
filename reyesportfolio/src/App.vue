
<script setup lang="ts">
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import SkillsView from './views/SkillsView.vue'
import HobbiesView from './views/HobbyView.vue'
</script>

<template>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#hobbies">Hobbies</a>
  </nav>

  <main>
    <div id="home">
      <HomeView />
    </div>

    <div id="about">
      <AboutView />
    </div>

    <div id="projects">
      <ProjectsView />
    </div>

    <div id="skills">
      <SkillsView />
    </div>

    <div id="hobbies">
      <HobbiesView />
    </div>
  </main>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  margin: 0;
}

nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 25px;
  padding: 20px 8%;
  background: #f9fafb;
}

nav a {
  color: #333;
  text-decoration: none;
}

nav a:hover {
  color: #15803d;
}

main > div {
  scroll-margin-top: 80px;
}
</style>
