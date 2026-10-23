
<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Skill {
  id: number
  name: string
  category: string
}

const skills = ref<Skill[]>([])
const loading = ref(true)

const personalSkills = [
  {
    name: 'Fast Learner',
    description: 'Quick to learn new tools, concepts, and technologies.',
  },
  {
    name: 'Leadership',
    description: 'Able to guide a team and work with others to achieve a goal.',
  },
  {
    name: 'Adaptability',
    description: 'Can adjust to new situations, challenges, and responsibilities.',
  },
  {
    name: 'Time Management',
    description: 'Able to organize tasks and manage time to meet deadlines.',
  },
  {
    name: 'Perseverance',
    description: 'Willing to keep learning and solving problems despite challenges.',
  },
]

const databaseSkill = [
  {
    name: 'Database Management',
    tools: 'MySQL, SQLite, PostgreSQL',
  },
  {
    name: 'API Testing',
    tools: 'Hoppscotch, HTTP methods, API request and response handling',
  },
  {
    name: 'Embedded Systems',
    tools: 'Arduino, PIC microcontrollers, MPLAB X IDE',
  },
  {
    name: 'Web Development',
    tools: 'HTML, CSS, Vue.js, TypeScript, Django REST Framework',
  },
]

onMounted(async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/skills/')

    if (!response.ok) {
      throw new Error('Failed to fetch skills from the server.')
    }

    const data = await response.json()

    skills.value = Array.isArray(data) ? data : data.results ?? []
  } catch (error) {
    console.error('Error loading skills:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main class="skills-page">
    <section class="skills-section">
      <h1>My Skills</h1>
      <p class="section-description">
        Here are the personal and technical skills I have developed through
        my studies, projects, and experiences.
      </p>

      <!-- Personal Skills -->
      <div class="personal-skills">
        <h2>Personal Skills</h2>

        <div class="skill-list">
          <div
              v-for="skill in personalSkills"
              :key="skill.name"
              class="skill-item"
          >
            <div class="skill-details">
              <span class="skill-name">{{ skill.name }}</span>
              <p class="skill-description">
                {{ skill.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Skills -->
      <div class="technical-skills">
        <h2>Technical Skills</h2>

        <p v-if="loading" class="status-message">
          Loading technical skills...
        </p>

        <div class="skill-list">
          <!-- Skills loaded from Django -->
          <div
              v-for="skill in skills"
              :key="skill.id"
              class="skill-item"
          >
            <div class="skill-details">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-category">{{ skill.category }}</span>
            </div>
          </div>

          <!-- Locally defined technical skills -->
          <div
              v-for="skill in databaseSkill"
              :key="skill.name"
              class="skill-item"
          >
            <div class="skill-details">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="database-tools">{{ skill.tools }}</span>
            </div>

          </div>
        </div>

        <p
            v-if="!loading && skills.length === 0"
            class="empty-message"
        >
          Showing locally defined skills. No additional skills were loaded
          from Django.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.skills-page {
  min-height: 100vh;
  background-color: #879f78;
  padding: 110px 30px 50px;
  color: #263b25;
}

.skills-section {
  max-width: 1100px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 12px;
  color: #263b25;
}

.section-description {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

h2 {
  font-size: 1.7rem;
  margin: 30px 0 20px;
  color: #263b25;
}

.skill-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.skill-item {
  background-color: #b2dba1;
  border-radius: 12px;
  padding: 22px;
  box-shadow: 0 4px 10px rgba(38, 59, 37, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skill-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 7px 15px rgba(38, 59, 37, 0.18);
}

.skill-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skill-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: #263b25;
}

.skill-category {
  display: inline-block;
  width: fit-content;
  margin-top: 12px;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #879f78;
  color: #ffffff;
  font-size: 0.8rem;
}

.skill-description,
.database-tools {
  margin: 0;
  line-height: 1.6;
  color: #354b32;
  overflow-wrap: anywhere;
}

.status-message,
.empty-message {
  text-align: center;
  margin: 20px 0;
  line-height: 1.5;
}

@media (max-width: 700px) {
  .skills-page {
    padding: 100px 18px 35px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  .skill-list {
    grid-template-columns: 1fr;
  }

  .skill-item {
    padding: 18px;
  }
}
</style>
