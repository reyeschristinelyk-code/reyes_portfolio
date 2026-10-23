
<script setup lang="ts">
</script>

<template>
  <section class="home" id="home">
    <div class="home-content">
      <p class="intro">WELCOME TO MY PORTFOLIO</p>

      <h1>
        Hi, I'm <span>Christine Lyka Reyes</span>
      </h1>

      <h2>Computer Engineering Student</h2>

      <p class="description">
        Welcome to my personal portfolio! Here, you can learn more
        about me, explore my skills and projects, and discover my
        interests as a Computer Engineering student.
      </p>

      <div class="home-buttons">
        <a href="#about" class="btn primary">
          About Me
        </a>

        <a href="#projects" class="btn secondary">
          View My Projects
        </a>
      </div>

      <div class="quick-links">
        <a href="#skills">My Skills</a>
        <span>•</span>
        <a href="#hobbies">My Hobbies</a>
        <span>•</span>
        <a href="#contact">Contact Me</a>
      </div>
    </div>

    <div class="home-image">
      <div class="image-border">
        <img src="/profile.png" alt="Christine Lyka Reyes" />
      </div>
      <p>Learning, creating, and growing.</p>
    </div>
  </section>
</template>

<style scoped>
.home {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  padding: 60px 8%;
  background-color: #879f78;
  color: #f9fafb;
  scroll-margin-top: 80px;
}

.home-content {
  max-width: 600px;
}

.intro {
  color: #b2dba1;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 20px;
}

.home-content h1 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
}

.home-content h1 span {
  color: #b9def0;
}

.home-content h2 {
  font-size: 1.3rem;
  color: #d1d5db;
  margin-bottom: 20px;
}

.description {
  color: #cbd5e1;
  line-height: 1.8;
  margin-bottom: 30px;
}

.home-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.btn {
  display: inline-block;
  padding: 12px 22px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s ease;
  cursor: pointer;
}

.primary {
  background-color: #b2dba1;
  color: #172015;
}

.primary:hover {
  background-color: #9acb86;
  transform: translateY(-2px);
}

.secondary {
  border: 1px solid #b2dba1;
  color: #b2dba1;
}

.secondary:hover {
  background-color: #67b168;
  color: #172015;
}

.quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
  font-size: 14px;
  color: #9ca3af;
}

.quick-links a {
  color: #d1d5db;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}

.quick-links a:hover {
  color: #b2dba1;
  text-decoration: underline;
}

.home-image {
  text-align: center;
  flex-shrink: 0;
}

.image-border {
  width: 280px;
  height: 280px;
  padding: 8px;
  border: 3px solid #092e20;
  border-radius: 50%;
  box-shadow: 0 0 35px #b2dba122;
}

.image-border img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.home-image p {
  margin-top: 20px;
  color: #b2dba1;
  font-style: italic;
}

@media (max-width: 750px) {
  .home {
    flex-direction: column-reverse;
    gap: 35px;
    padding: 40px 24px;
    text-align: center;
  }

  .home-content {
    width: 100%;
  }

  .home-buttons,
  .quick-links {
    justify-content: center;
  }

  .image-border {
    width: 210px;
    height: 210px;
  }
}
</style>
