<script setup>
const route = useRoute()
const slug = route.params.landingpage;

// const {data} = await useAsyncData('page', () => queryContent(slug).findOne())

// useSeoMeta({
//   title: `${data.value.title} - Kurajin`,
//   ogTitle: `${data.value.title} - Kurajin`,
//   description: 'Kurajin Kreasi Mandiri jasa pembuatan website gratis untuk UKM, Kelas Online Digital Marketing & Web Programming dan Jasa Kelola Website',
//   ogDescription: 'Kurajin Kreasi Mandiri jasa pembuatan website gratis untuk UKM, Kelas Online Digital Marketing & Web Programming dan Jasa Kelola Website',
  
// })
</script>

<template>
    <div>
        <ContentDoc :path="`/lp/${slug}`"/>
    </div>
</template>