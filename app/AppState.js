import { Identity } from './Auth/Identity.js'
import { House } from "./models/House.js";
import { Car } from './models/Car.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  // NOTE the logged in user
  /** @type {Identity} */
  identity = null
  /**@type {House[]} */
  houses = []
  /** @type {Car[]} */
  cars = []
}

export const AppState = createObservableProxy(new ObservableAppState())