import { ExcelComponent } from '@core/ExcelComponent'

/**
 * Create a toolbar (with tools) of Excel
 * @class
 * @classdesc Excel toolbar
 */
export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'

  /**
   * Entry point
   * @param {Node} $root
   */
  constructor($root) {
    super($root)
    this.name = 'Toolbar'
    this.listeners = ['click']
  }

  /**
   * Click event
   * @param {Event} event
   */
  onClick(event) {
    console.log(event.target)
  }

  /**
   * Return HTML template
   * @return {string}
   */
  toHTML() {
    return `
      <button class="button button--default button--icon">
           <svg  viewBox="0 0 24 24">
               <path d="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z" />
           </svg>
       </button>

       <button class="button button--default button--icon">
           <svg  viewBox="0 0 24 24">
               <path d="M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z" />
           </svg>
       </button>

       <button class="button button--default button--icon">
           <svg  viewBox="0 0 24 24">
               <path d="M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z" />
           </svg>
       </button>

       <button class="button button--default button--icon">
           <svg  viewBox="0 0 24 24">
               <path d="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,
               14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,
               1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,
               10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,
               18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z" />
           </svg>
       </button>

       <button class="button button--default button--icon">
           <svg  viewBox="0 0 24 24">
               <path d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" />
           </svg>
       </button>

       <button class="button button--default button--icon">
           <svg  viewBox="0 0 24 24">
               <path d="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,
               11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z" />
           </svg>
       </button>
    `
  }
}
