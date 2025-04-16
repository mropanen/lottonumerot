<script setup lang="ts">

import CurrentNumbers from "~/components/CurrentNumbers.vue";
import currentWeeknumber from "../utils/current-weeknumber";
</script>
<template>
  <UContainer>
    <UCard variant="subtle">
      <template #header>
        <h1>
          Lottonumerot viikko {{ currentWeeknumber()}}
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