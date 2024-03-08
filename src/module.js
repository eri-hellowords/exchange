import { createResolver, defineNuxtModule, addServerHandler } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '1c_exchange'
  },
  setup () {
    const { resolve } = createResolver(import.meta.url)

    // Add an API route
    addServerHandler({
      route: '/api/exchange/1c',
      handler: resolve('./runtime/server/api/exchange')
    })
  }
})