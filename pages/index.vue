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
  <UContainer>
    <UCard variant="subtle">
      <template #header>
        <h1>
          Lottonumerot viikko xx
        </h1>
      </template>

      <div class="h-32">
        {{ status === 'pending' ? 'Loading' : numbers }}
      </div>

      <template #footer>
        <div class="h-8" />
      </template>
    </UCard>
  </UContainer>
</template>