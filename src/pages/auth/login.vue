<template>
  <UPageCard class="w-full max-w-md">
    <UAuthForm
      :schema="loginSchema"
      :fields="loginFields"
      title="Welcome Back"
      icon="i-lucide-lock"
      :loading="isLoading"
      @submit="onLogin"
    >
      <template #description>
        Example login page from the starter template. Wire
        <code class="text-xs">login()</code>
        to your API or replace this page.
      </template>
    </UAuthForm>
  </UPageCard>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { AuthFormField, FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
  layout: 'auth',
})

const toast = useToast()
const isLoading = ref(false)

const loginSchema = z.object({
  email: z.email('Invalid email').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type LoginSchema = z.output<typeof loginSchema>

const loginFields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
    autofocus: true,
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    required: true,
  },
]

async function onLogin(event: FormSubmitEvent<LoginSchema>) {
  event.preventDefault()
  isLoading.value = true

  try {
    await login(event.data)
    toast.add({
      title: 'Login successful',
      description: 'You are now logged in.',
      color: 'success',
    })
    await navigateTo('/', { replace: true })
  } catch (err: unknown) {
    const message =
      err && typeof err === 'object' && 'data' in err
        ? String((err as { data?: { message?: string } }).data?.message || 'Login failed')
        : 'Login failed'

    toast.add({
      title: 'Login failed',
      description: message,
      color: 'error',
    })
  } finally {
    isLoading.value = false
  }
}
</script>
