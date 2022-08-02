import { $ } from '@core/DOM'

/**
 * @class
 * @classdesc Excel component
 */
export class Excel {
  /**
   * Create a point
   * @param {string} selector - Entry point
   * @param {Object} options - Default options
   */
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  /**
   * Create root DOM element
   * @return {HTMLDivElement}
   */
  getRoot() {
    const $root = $.create('div', 'excel')

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })

    return $root
  }

  /**
   * Render/Update a root element
   */
  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(Component => Component.init())
  }
}
