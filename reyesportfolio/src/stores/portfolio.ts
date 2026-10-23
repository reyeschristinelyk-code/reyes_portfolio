import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Profile {
    name: string
    headline: string
    intro: string
    tagline: string
    about: string
    photo: string | null
    email: string
    github: string
    linkedin: string
}
export interface Skill { id: number; name: string; category: string }
export interface Project {
    id: number
    title: string
    description: string
    tech: string[]
    url: string
    repo: string
}
export interface Hobby { id: number; name: string; description: string }
export interface ContactPayload { name: string; email: string; body: string }

const BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? '/api'

async function request<T>(path: string, init?: RequestInit): Promise<T> {
    const res = await fetch(`${BASE}${path}`, {
        headers: { 'Content-Type': 'application/json' },
        ...init,
    })
    if (!res.ok) throw new Error(`Request failed (${res.status})`)
    return res.json() as Promise<T>
}

export const usePortfolioStore = defineStore('portfolio', () => {
    const profile = ref<Profile | null>(null)
    const skills = ref<Skill[]>([])
    const projects = ref<Project[]>([])
    const hobbies = ref<Hobby[]>([])
    const loading = ref(false)
    const error = ref('')

    async function load() {
        if (profile.value || loading.value) return
        loading.value = true
        error.value = ''
        try {
            ;[profile.value, skills.value, projects.value, hobbies.value] = await Promise.all([
                request<Profile>('/profile/'),
                request<Skill[]>('/skills/'),
                request<Project[]>('/projects/'),
                request<Hobby[]>('/hobbies/'),
            ])
        } catch {
            error.value =
                "Couldn't load the portfolio. Check that the Django server is running on port 8000."
        } finally {
            loading.value = false
        }
    }

    function sendMessage(data: ContactPayload) {
        return request<ContactPayload>('/contact/', {
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    return { profile, skills, projects, hobbies, loading, error, load, sendMessage }
})