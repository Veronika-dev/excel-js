import { capitalise } from './utils'

/**
 * @class
 * @classdesc Add and remove DOM listeners
 */
export class DOMListener {
  /**
   * Create a point and check necessary data
   * @param {Node} $root Root node
   * @param {Array} listeners List of listeners
   */
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No root provided for DOMListener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  /**
   * Create DOM listeners for an element
   */
  initDOMListeners() {
    this.listeners.forEach(listener => {
      const methodName = getCbName(listener)
      if (!this[methodName]) {
        throw new Error(`Method ${methodName} is not implemented in ${this.name}`)
      }
      this[methodName] = this[methodName].bind(this)
      this.$root.on(listener, this[methodName])
    })
  }

  /**
   * Remove DOM listeners of an element
   */
  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const methodName = getCbName(listener)
      if (!this[methodName]) {
        throw new Error(`Method ${methodName} is not implemented in ${this.name}`)
      }
      this.$root.off(listener, this[methodName])
    })
  }
}

/**
 * Get listener callback name
 * @example input -> onInput
 * @param {string} eventName Name of listener
 * @return {string}
 */
function getCbName(eventName) {
  return `on${capitalise(eventName)}`
}
