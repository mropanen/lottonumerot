<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'
const { locale } = useI18n()

useSeoMeta({
  title: 'Lottonumerot',
  ogTitle: 'Lottonumerot',
  description: 'Lottonumerot',
  ogDescription: 'Lottonumerot',
  ogImage: 'https://placecats.com/300/200',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtPage />
  </UApp>
</template>