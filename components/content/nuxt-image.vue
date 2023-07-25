<template>
    <nuxt-img :src="src" :class="class" format="webp" quality="80"/>
</template>
<script setup>
defineProps(['src','class'])
</script>
