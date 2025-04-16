<script setup lang="ts">
/* Navigation will occur before fetching is complete.
  Handle 'pending' and 'error' states directly within your component's template
*/
const { status, data: numbers } = useFetch('/api/current-numbers', {
  lazy: true,
  server: false
})

watch(numbers, () => {
  // Because count might start out null, you won't have access
  // to its contents immediately, but you can watch it.
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
    <div v-else>
      <div class="grid gap-2">
        <UPinInput :default-value="numbers?.numbers?.primary" length="7" disabled size="xl" type="number" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>