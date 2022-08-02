import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table-template'
import { $ } from '@core/DOM'

/**
 * Create a table
 * @class
 * @classdesc Excel table
 */
export class Table extends ExcelComponent {
  static className = 'excel__table'
  MIN_COL_WIDTH = 40
  MIN_ROW_HEIGHT = 20
  TOP_VALUE = 126

  /**
   * Entry point
   * @param {Node} $root
   */
  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }


  /**
   * Return HTML template
   * @return {string}
   */
  toHTML() {
    return createTable(50)
  }

  /**
   * Mousedown event
   * @param {Event} event
   */
  onMousedown(event) {
    if (event.target.dataset.resize) {
      this.setTableElementsResize(event)
    }
  }

  /**
   * Set resize logic of columns and rows
   * @param {Event} event
   */
  setTableElementsResize(event) {
    let newResizeValue = 0
    const $resizer = $(event.target)
    const isResizeColumn = $resizer.dataset.resize === 'col'
    const $parent = isResizeColumn
      ? $resizer.parent('[data-column-index]')
      : $resizer.parent('[data-row-index]')
    const coords = $parent.coords()
    const $colResizer = $(document.getElementById('col-resize'))
    const $rowResizer = $(document.getElementById('row-resize'))
    const startResizeValue = isResizeColumn ? $resizer.coords().x : $resizer.coords().y
    const indexNodeResize = isResizeColumn ? $parent.dataset.columnIndex : $parent.dataset.rowIndex
    const scrollValue = isResizeColumn ? this.$root.scrollLeft : this.$root.scrollTop

    const onResizeMove = (eventMove) => {
      if (isResizeColumn) {
        const left = eventMove.x + scrollValue
        $colResizer.css({ transform: `translateX(${left}px)` })
        newResizeValue = left
      } else {
        const top = eventMove.y + scrollValue
        $rowResizer.css({ transform: `translateY(${top - this.TOP_VALUE}px)` })
        newResizeValue = top
      }
    }
    const onResizeMouseUp = () => {
      document.removeEventListener('mousemove', onResizeMove)
      document.removeEventListener('mouseup', onResizeMouseUp)
      if (indexNodeResize) {
        if (isResizeColumn) {
          const columnCells = this.$root.findAll(`[data-column-index="${indexNodeResize}"]`)
          const columnWidth = coords.width
          let width = newResizeValue - startResizeValue + columnWidth - scrollValue
          width = width < this.MIN_COL_WIDTH ? this.MIN_COL_WIDTH : width
          columnCells.forEach((column) => {
            column.style.width = `${width}px`
          })
          $colResizer.css({ transform: 'translateX(-2px)' })
        } else {
          const rowCells = this.$root.findAll(`[data-row-index="${indexNodeResize}"]`)
          const rowHeight = coords.height
          let height = newResizeValue - startResizeValue + rowHeight - scrollValue
          height = height < this.MIN_ROW_HEIGHT ? this.MIN_ROW_HEIGHT : height
          rowCells.forEach((row) => {
            row.style.height = `${height}px`
          })
          $rowResizer.css({ transform: 'translateY(-2px)' })
        }
      }
    }
    document.addEventListener( 'mousemove', onResizeMove)
    document.addEventListener('mouseup', onResizeMouseUp)
  }
}
