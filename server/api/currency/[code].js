export default defineEventHandler(async (event) => {
  // const { code } = getQuery(event)
  const { code } = event.context.params
  const { currencyKey } = useRuntimeConfig()

  const { pubKey } = useRuntimeConfig()
  console.log(`pubKey : ${pubKey}`)
  
  // const { goods } = process.env.GOODNESS
  // console.log(`goodness : ${goods}`)
  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`
  // const { data } = await $fetch(uri, {force: "true"})
  const { data } = await $fetch(uri)

  return data
})