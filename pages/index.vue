<script setup lang="ts">
import CurrentNumbers from "~/components/CurrentNumbers.vue";
import currentWeeknumber from "../utils/current-weeknumber";
definePageMeta({
  title: 'Lottonumerot, viikko ' + currentWeeknumber(),
})
useSeoMeta({
  title: 'Lottonumerot, viikko ' + currentWeeknumber(),
  ogTitle: 'Lottonumerot, viikko ' + currentWeeknumber(),
  description: 'Lottonumerot, viikko ' + currentWeeknumber(),
  ogDescription: 'Lottonumerot, viikko ' + currentWeeknumber(),
  ogImage: 'https://placecats.com/300/200',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UContainer>
    <UCard variant="subtle">
      <template #header>
        <h1>
          Lottonumerot, viikko {{ currentWeeknumber()}}
        </h1>
      </template>

      <div class="h-32">
        <CurrentNumbers />
      </div>

      <template #footer>
        <div class="h-8" />
      </template>
    </UCard>
  </UContainer>
</template>