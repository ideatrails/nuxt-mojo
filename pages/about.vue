<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati nobis quo
      modi et dolorum ipsa commodi cumque ullam, cupiditate molestiae omnis esse odit
      quae, molestias saepe? Modi, repellendus molestias!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magnam aliquid nobis
      error eos ipsum, necessitatibus dicta cumque est esse deleniti voluptatem quasi
      libero sed expedita laudantium suscipit quas neque cupiditate dolor. Consequuntur,
      ut sunt magni exercitationem sit obcaecati non. Sit minus, assumenda hic dicta
      perferendis illum veniam et sunt.
    </p>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP');
</script>

<style scoped>
p {
  margin-bottom: 40px;
}
</style>
