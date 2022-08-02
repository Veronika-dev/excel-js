import { ExcelComponent } from '@core/ExcelComponent'

/**
 * Create a header of Excel
 * @class
 * @classdesc Excel header
 */
export class Header extends ExcelComponent {
  static className = 'excel__header'

  /**
   * Return HTML template
   * @return {string}
   */
  toHTML() {
    return `
      <input type="text" class="input excel__header--input" value="New table" />
        <div>
            <button class="button button--error button--outlined excel__header--button">
                <svg viewBox="0 0 24 24">
                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,
                    19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                </svg>
            </button>
            <button class="button button--primary button--outlined">
                <svg viewBox="0 0 24 24">
                    <path d="M19,3H5C3.89,3 3,3.89 3,
                    5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,
                    0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,
                    17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z" />
                </svg>
            </button>
        </div>`
  }
}
