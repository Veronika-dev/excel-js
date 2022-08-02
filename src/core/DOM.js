/**
 * DOM manipulation methods
 * @class
 */
class DOM {
  /**
   * Create a point
   * @param {Node | string} selector
   */
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  /**
   * Set HTML into $el or get HTML value
   * @param {string} [html] HTML to place it into $el
   * @return {(string|DOM)} HTML of $el or the current instance in case if new html value was set
   */
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    } else {
      return this.$el.outerHTML.trim()
    }
  }

  /**
   * Clear inner HTML of $el
   * @return {DOM}
   */
  clear() {
    this.html('')
    return this
  }

  /**
   * Append a new child node
   * @param {Node} node
   */
  append(node) {
    const nodeEl = node instanceof DOM ? node.$el : node
    if (Element.prototype.append) {
      this.$el.append(nodeEl)
    } else {
      this.$el.appendChild(nodeEl)
    }
  }

  /**
   * Create DOM event
   * @param {string} eventType Type of an event
   * @param {Function} callback Function on event
   */
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  /**
   * Remove DOM event
   * @param {string} eventType Type of an event
   * @param {Function} callback Function on event
   */
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }
}

/**
 * DOM manipulations instance
 * @param {Node | string} selector
 * @return {DOM}
 */
export function $(selector) {
  return new DOM(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
