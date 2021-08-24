import { Context } from 'koa'
import Router from 'koa-router'

const router = new Router<any, Context>({ prefix: '/user' })

router.get('/', (ctx, next) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      ctx.body = {
        code: 1,
        message: 'success',
        data: null
      }
      resolve()
    }, 3000)
  })
})

export default router
