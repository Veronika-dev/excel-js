import { ExcelComponent } from '@core/ExcelComponent'

/**
 * Create a formula element of Excel
 * @class
 * @classdesc Excel formula
 */
export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  /**
   * Create a point
   * @param {Node} $root
   */
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    })
  }

  /**
   * Return HTML template
   * @return {string}
   */
  toHTML() {
    return `
      <div class="excel__formula--info">fx</div>
      <div class="excel__formula--input" contenteditable="true" spellcheck="false"></div>
    `
  }

  /**
   * Event
   * @param {Event} event
   */
  onInput(event) {
    console.log('oninput', event.target.textContent.trim())
  }
}
