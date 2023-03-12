export default defineEventHandler(async (event) => {
  // const { name } = getQuery(event)
  // const { age } = await readBody(event)
  const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`
  const { data } = await $fetch(uri)
  return data
})