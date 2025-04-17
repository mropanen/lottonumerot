<script setup lang="ts">
import { ref, computed } from 'vue'
const numbers = ref<Array<number | null>>(Array(7).fill(null))
const errors = ref<string[]>(Array(7).fill(''))
const currentFocus = ref(0)

const validateNumber = (value: string, index: number) => {
  const num = parseInt(value)
  
  // Clear error first
  errors.value[index] = ''
  
  // Empty check
  if (!value.trim()) {
    numbers.value[index] = null
    return true
  }

  // Range check
  if (num < 1 || num > 40) {
    errors.value[index] = 'Number must be between 1 and 40'
    return false
  }

  // Uniqueness check
  const existingIndex = numbers.value.findIndex((n, i) => n === num && i !== index)
  if (existingIndex !== -1) {
    errors.value[index] = 'Number must be unique'
    return false
  }

  numbers.value[index] = num
  return true
}

const handleInput = (event: Event, index: number) => {
  const input = event.target as HTMLInputElement
  const value = input.value

  // Only allow numbers
  if (value && !/^\d{1,2}$/.test(value)) {
    input.value = value.replace(/[^\d]/g, '').slice(0, 2)
    return
  }

  if (validateNumber(value, index)) {
    // Auto-advance to next input if valid number entered
    if (value.length === 2 || (value.length === 1 && parseInt(value) > 4)) {
      if (index < 6) {
        const nextInput = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement
        nextInput?.focus()
      }
    }
  }
}

const handleKeydown = (event: KeyboardEvent, index: number) => {
  if (event.key === 'Backspace' && !(event.currentTarget as HTMLInputElement)?.value && index > 0) {
    // Move to previous input on backspace if current is empty
    const prevInput = document.querySelector(`input[data-index="${index - 1}"]`) as HTMLInputElement
    prevInput?.focus()
  } else if (event.key === 'ArrowLeft' && index > 0) {
    const prevInput = document.querySelector(`input[data-index="${index - 1}"]`) as HTMLInputElement
    prevInput?.focus()
  } else if (event.key === 'ArrowRight' && index < 6) {
    const nextInput = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement
    nextInput?.focus()
  }
}

const isComplete = computed(() => {
  return numbers.value.every(num => num !== null) && errors.value.every(error => !error)
})
</script>

<template>
  <div>
    <div class="flex flex-col gap-4">
      <div class="flex gap-2">
        <template v-for="(_, index) in 7" :key="index">
          <div class="flex flex-col gap-1">
            <input
              type="text"
              :data-index="index"
              :value="numbers[index] || ''"
              @input="handleInput($event, index)"
              @keydown="handleKeydown($event, index)"
              class="w-12 h-12 text-center border rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              :class="{
                'border-red-500': errors[index],
                'border-gray-300': !errors[index]
              }"
              maxlength="2"
              inputmode="numeric"
              pattern="\d*"
            />
            <div v-if="errors[index]" class="text-red-500 text-xs whitespace-nowrap">
              {{ errors[index] }}
            </div>
          </div>
        </template>
      </div>

      <div v-if="isComplete" class="text-green-600">
        All numbers are valid!
      </div>
    </div>
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  appearance: textfield;
  -moz-appearance: textfield;
}
</style>