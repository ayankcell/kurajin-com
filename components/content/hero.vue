<template>
	<section :class="theme[props.theme]">
		<div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
			<h1 class="text-4xl font-bold leadi sm:text-5xl">
                <slot name="title"/>
			</h1>
			<p class="px-8 mt-8 mb-12 text-lg">
                <slot name="subtitle" />
            </p>
			<div class="flex flex-wrap justify-center">
				<button v-show="btn1" class="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-blue-400 dark:text-gray-900">
                    <slot name="btn1" />
                </button>
				<button v-show="btn2" class="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
                    <slot name="btn2" />
                </button>
			</div>
		</div>
	</section>
</template>

<script setup>
const theme = {
	gelap: 'bg-gray-800 text-gray-100',
	putih: 'bg-white text-gray-800',
	biru: 'bg-blue-800 text-gray-100',
	hijau: 'bg-green-800 text-gray-100',
	kuning: 'bg-yellow-400 text-black',
	merah: 'bg-red-800 text-gray-100',
}
const props = defineProps(['theme','btn1','btn2'])
</script>