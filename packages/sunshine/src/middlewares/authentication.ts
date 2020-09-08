import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt'
import { use, initialize } from 'koa-passport'
import { IAdmin } from '@bakery/soil-api'
import { AdminDao } from '../dao'
import { Middleware } from 'koa'

export type roles = 'admin'

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret',
}

use('admin', new Strategy(opts, async ({ id }, done) => {
  const dao = new AdminDao()
  const admin: IAdmin = await dao.findOne({ id })
  if (!admin) {
    return done(null, admin)
  } 
  return done(null, false)
}))

export default (): Middleware => initialize()
