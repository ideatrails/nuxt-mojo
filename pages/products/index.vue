<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products">
      <ProductCard :product="p"></ProductCard>
    </div>

  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: 'Nuxt Dojo | Merch',
  meta: [
    { name: 'description', content: 'Nuxt 3 Merch'}
  ]
})

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

</script>

<style scoped></style>
