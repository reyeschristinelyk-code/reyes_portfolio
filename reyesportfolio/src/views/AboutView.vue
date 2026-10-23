```vue
<script setup lang="ts">
</script>

<template>
  <section class="about">
    <div class="about-content">
      <h1>About Me</h1>

      <p class="description">
        Hello! I'm Christine Lyka Cabildo Reyes, #wlw
        who enjoys learning and making projects from embedded
        systems to software development.
      </p>

      <div class="info-container">
        <!-- Personal Information -->
        <div class="info-card">
          <h2>Personal Information</h2>

          <div class="info-item">
            <h3>Address</h3>
            <p>Lal-lo, Cagayan</p>
          </div>

          <div class="info-item">
            <h3>Education</h3>
            <p>Bachelor of Science in Computer Engineering</p>
            <p>Cagayan State University</p>
            <p>4th Year</p>
          </div>

          <div class="info-item">
            <h3>Sexual Orientation</h3>
            <p>Pansexual</p>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="info-card">
          <div id="contact">
            <!-- Your contact information -->
          </div>
          <h2>Contact Information</h2>

          <div class="info-item">
            <h3>Facebook</h3>
            <a
                href="https://www.facebook.com/christinelyka.reyes.5"
                target="_blank"
                rel="noopener noreferrer"
            >
              Christine Lyka
            </a>
          </div>

          <div class="info-item">
            <h3>Instagram</h3>
            <a
                href="https://www.instagram.com/justlyklatte_"
                target="_blank"
                rel="noopener noreferrer"
            >
              justlyklatte
            </a>
          </div>

          <div class="info-item">
            <h3>Email</h3>
            <a href="mailto:reyeschristinelyk@gmail.com">
              reyeschristinelyk@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 40px 20px;
}

.about-content {
  max-width: 1100px;
  margin: 0 auto;
}

.about h1 {
  color: #b2dba1;
  font-size: 36px;
  margin-bottom: 20px;
}

.description {
  color: #ffffff;
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 30px;
}

.info-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-top: 20px;
  align-items: stretch;
}

.info-card {
  background: #111827;
  border: 1px solid #b2dba1;
  border-radius: 15px;
  padding: 25px;
  color: #ffffff;
  min-width: 0;
}

.info-card h2 {
  color: #b2dba1;
  font-size: 22px;
  margin-bottom: 25px;
}

.info-item {
  margin-bottom: 22px;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-item h3 {
  color: #b2dba1;
  font-size: 16px;
  margin-bottom: 8px;
}

.info-item p {
  margin: 5px 0;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.info-item a {
  color: #ffffff;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.info-item a:hover {
  color: #b2dba1;
  text-decoration: underline;
}

/* Responsive layout for mobile screens */
@media (max-width: 768px) {
  .about {
    padding: 25px 15px;
  }

  .about h1 {
    font-size: 30px;
  }

  .info-container {
    grid-template-columns: 1fr;
  }
}
</style>
```