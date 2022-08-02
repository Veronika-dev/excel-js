import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table-template'

/**
 * Create a table
 * @class
 * @classdesc Excel table
 */
export class Table extends ExcelComponent {
  static className = 'excel__table'

  /**
   * Return HTML template
   * @return {string}
   */
  toHTML() {
    return createTable(25)
  }
}
