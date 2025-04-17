<script setup lang="ts">
const { status, data: numbers } = useFetch('/api/current-numbers', {
  lazy: true,
  server: false
})

const primaryNumbers = computed(() => {
  return numbers.value?.numbers?.primary
})
const secondaryNumber = computed(() => {
  return numbers.value?.numbers?.secondary[0] ?? null
})
const tertiaryNumber = computed(() => {
  return numbers.value?.numbers?.tertiary[0] ?? null
})
</script>

<template>
  <div>
    <div class="flex items-center gap-4" v-if="status === 'pending'">
      <div class="grid gap-2">
        <USkeleton class="h-4 w-[250px]" />
        <USkeleton class="h-4 w-[200px]" />
      </div>
    </div>
    <div v-else-if="status === 'error'">
      <div class="text-red-500">
        ohohupsis
      </div>
    </div>
    <div v-else>
      <div class="flex gap-2">
        <!-- Primary numbers (7 digits) -->
        <template v-for="(digit, index) in primaryNumbers" :key="'primary-' + index">
          <div class="w-10 h-12 flex items-center justify-center border rounded-lg bg-gray-100 text-gray-900 text-xl font-semibold">
            {{ digit }}
          </div>
        </template>

        <!-- Secondary number (1 digit) -->
        <div v-if="primaryNumbers && primaryNumbers.length > 0"
             class="w-10 h-12 flex items-center justify-center border rounded-lg bg-green-100 text-green-800 text-xl font-semibold">
          {{ secondaryNumber }}
        </div>

        <!-- Tertiary number (1 digit) -->
        <div v-if="primaryNumbers && primaryNumbers.length > 0"
             class="w-10 h-12 flex items-center justify-center border rounded-lg bg-amber-100 text-amber-800 text-xl font-semibold">
          {{ tertiaryNumber }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>