<template>
  <div>
    <Header background="bg-gradient-to-r from-sky-500 to-pink-700" />
    <section>
      <div class="bg-gradient-to-r from-sky-500 to-pink-700">
        <div
          class="flex flex-col items-center px-4 py-12 mx-auto text-center lg:pb-32 md:py-32 md:px-10 lg:px-32 text-gray-900"
        >
          <h1 class="text-3xl font-bold sm:text-6xl xl:max-w-3xl text-gray-100">
            {{ data.title }}
          </h1>
          <p class="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-100">
            {{ data.subtitle }}
          </p>
        </div>
      </div>

      <div class="w-full px-4 lg:p-20">
        <ContentRenderer
          :value="data"
          class="p-5 shadow-lg lg:p-12 lg:w-3/4 mx-auto"
        />
      </div>
    </section>
    <Footer />
  </div>
</template>
<script setup>
const route = useRoute();
const slug = route.params.page;

const { data } = await useAsyncData("page", () => queryContent(slug).findOne());

useSeoMeta({
  title: `${data.value.title} - Kurajin`,
  ogTitle: `${data.value.title} - Kurajin`,
  description:
    "Kurajin Kreasi Mandiri jasa pembuatan website gratis untuk UKM, Kelas Online Digital Marketing & Web Programming dan Jasa Kelola Website",
  ogDescription:
    "Kurajin Kreasi Mandiri jasa pembuatan website gratis untuk UKM, Kelas Online Digital Marketing & Web Programming dan Jasa Kelola Website",
});
</script>
