import { soilApi } from '@bakery/soil-api'

export function sunshine(): string {
  return soilApi()
}

console.log(sunshine())
