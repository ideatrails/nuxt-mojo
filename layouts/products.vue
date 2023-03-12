<template>
  <div>

    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink class="font-bold" to="/products">Nuxt Dojo Merch</NuxtLink>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer>
      <ul class="container mx-auto p-4 flex justify-between border-t-2">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
      </ul>
    </footer>

  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: rgb(128, 201, 168);
}

</style>
