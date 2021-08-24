import Koa from 'koa'
import koaBody from 'koa-body'
import koaCORS from 'koa2-cors'

import { UserRouter } from '@/routers'

const app = new Koa()

// cors middleware
app.use(
  koaCORS({
    origin: '*',
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  })
)

// config json body parser
app.use(
  koaBody({
    encoding: 'utf-8',
    json: true,
    parsedMethods: ['POST']
  })
)

// config routers
app.use(UserRouter.routes())

export default app
