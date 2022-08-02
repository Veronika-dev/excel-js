const CODES = {
  A: 65,
  Z: 90,
}

/**
 * Create a cell using HTML template
 * @param {number} index Column index
 * @return {string}
 */
function createCell(index) {
  return `
    <div class="excel__table--cell" contenteditable="true" data-column-index="${index}"></div>
  `
}

/**
 * Create a column using HTML template
 * @param {string} colInfo Column information
 * @param {number} index Column index
 * @return {string}
 */
function createCol(colInfo, index) {
  return `<div class="excel__table--column" data-column-index="${index}">
        ${colInfo}
        <div class="excel__table--column--resize" data-resize="col"></div>
    </div>`
}

/**
 * Create a row using HTML template
 * @param {string} rowData Cell content of the main columns
 * @param {string|number} [rowInfo=''] Cell content of the 1st column
 * @return {string}
 */
function createRow(rowData, rowInfo = '') {
  const resizeContent = rowInfo ? '<div class="excel__table--row--resize" data-resize="row"></div>' : ''
  return `
    <div class="excel__table--row" data-row-index="${rowInfo || 0}">
        <div class="excel__table--info">${rowInfo}${resizeContent}</div>
        <div class="excel__table--data">${rowData}</div>
    </div>
  `
}

/**
 * Create resize lines
 * @return {string} Template of resize lines
 */
function createResizeTemporary() {
  return `
     <div class="excel__table--row--resize-temp" id="row-resize"></div>
     <div class="excel__table--column--resize-temp" id="col-resize"></div>
  `
}

/**
 * Create template of table
 * @param {number} rows Count of rows of new table
 * @return {string} Template
 */
export function createTable(rows = 15) {
  const colsCount = CODES.Z - CODES.A
  const rowsArray = []

  rowsArray.push(createResizeTemporary())

  const cols = new Array(colsCount + 1).fill('')

  const colsArray = cols
      .map((_, index) => String.fromCharCode(CODES.A + index))
      .map(createCol)
      .join('')

  rowsArray.push(createRow(colsArray))

  for (let i = 0; i < rows; i++) {
    const colsCurrent = cols.map((_, index) => createCell(index)).join('')
    rowsArray.push(createRow(colsCurrent, i + 1))
  }

  return rowsArray.join('')
}
