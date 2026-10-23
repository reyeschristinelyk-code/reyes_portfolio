
<script setup lang="ts">
import { ref } from 'vue'

const hobbies = ref([
  {
    name: 'Reading AU',
    image: '/au.png',
    isOpen: false,
    details: [
      'Janjingjing',
      'Jiminjeong',
      'Winrina',
      'Lenamiu',
      'EmiBonnie',
      'KapookCize',
    ],
  },
  {
    name: 'Listening to Music',
    image: '/music.png',
    isOpen: false,
    details: ['R&B', 'Indie Pop', 'K-Pop', 'T-Pop'],
  },
  {
    name: 'Watching GL Series',
    image: '/jjj.png',
    isOpen: false,
    details: [
      '23.5',
      'Enemies with Benefit',
      'Khom Klang',
      'Love Design',
      'My Safe Zone',
    ],
  },
  {
    name: 'Watching Anime',
    image: '/anime.png',
    isOpen: false,
    details: [
      'Romance',
      'Action',
      'Fantasy',
      'Slice of Life',
      'Comedy',
    ],
  },
])

function toggleHobby(index: number) {
  const hobby = hobbies.value[index]

  if (hobby) {
    hobby.isOpen = !hobby.isOpen
  }
}
</script>

<template>
  <section class="hobbies-section">
    <h1>My Hobbies</h1>

    <div class="hobbies-container">
      <div
          v-for="(hobby, index) in hobbies"
          :key="hobby.name"
          class="hobby-card"
      >
        <button
            class="hobby-header"
            type="button"
            @click="toggleHobby(index)"
            :aria-expanded="hobby.isOpen"
        >
          <img :src="hobby.image" :alt="hobby.name" />

          <h2>{{ hobby.name }}</h2>

          <span class="arrow">
            {{ hobby.isOpen ? '▲' : '▼' }}
          </span>
        </button>

        <div v-if="hobby.isOpen" class="hobby-details">
          <ul>
            <li v-for="item in hobby.details" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hobbies-section {
  min-height: 100vh;
  padding: 40px 24px;
  background-color: #879f78;
  color: #f9fafb;
}

.hobbies-section h1 {
  max-width: 1100px;
  margin: 0 auto 30px;
  font-size: 30px;
  font-weight: 700;
}

.hobbies-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: start;
  gap: 20px;
}

.hobby-card {
  min-width: 0;
  background-color: #e4b9b9;
  border: 1px solid #843534;
  border-radius: 14px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.hobby-card:hover {
  border-color: #3c763d;
}

.hobby-header {
  width: 100%;
  min-height: 210px;
  padding: 20px 12px;
  background: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  text-align: center;
}

.hobby-header img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #5E5694;
  transition: transform 0.2s ease;
}

.hobby-header:hover img {
  transform: scale(1.05);
}

.hobby-header h2 {
  font-size: 17px;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.arrow {
  color: #66512c;
  font-size: 14px;
}

.hobby-details {
  padding: 0 16px 18px;
  border-top: 1px solid #264b5d;
}

.hobby-details ul {
  list-style: none;
  padding: 12px 0 0;
  margin: 0;
}

.hobby-details li {
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #263047;
  color: #d1d5db;
  font-size: 14px;
  text-align: center;
  overflow-wrap: anywhere;
}

.hobby-details li:last-child {
  margin-bottom: 0;
}

.hobby-header:focus-visible {
  outline: 2px solid #818cf8;
  outline-offset: -4px;
}

@media (max-width: 900px) {
  .hobbies-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 650px) {
  .hobbies-section {
    padding: 30px 16px;
  }

  .hobbies-container {
    grid-template-columns: 1fr;
  }

  .hobby-header {
    min-height: auto;
  }

  .hobby-header img {
    width: 100px;
    height: 100px;
  }
}
</style>
