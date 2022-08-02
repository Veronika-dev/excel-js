import { DOMListener } from '@core/DOMListener'

/**
 * @class
 * @classdesc Logic of the main component Excel of the application
 */
export class ExcelComponent extends DOMListener {
  /**
   * Create a point
   * @param {Node} $root
   * @param {Object} options
   */
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }
  /**
   * Return template of the component
   * @return {string}
   */
  toHTML() {
    return '<h2>Kek</h2>'
  }

  /**
   * Initialize ExcelComponent
   */
  init() {
    this.initDOMListeners()
  }

  /**
   * Destroy ExcelComponent
   */
  destroy() {
    this.removeDOMListeners()
  }
}
