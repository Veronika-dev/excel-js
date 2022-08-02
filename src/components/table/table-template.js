const CODES = {
  A: 65,
  Z: 90,
}

/**
 * Create a cell using HTML template
 * @return {string}
 */
function createCell() {
  return `
    <div class="excel__table--cell" contenteditable="true"></div>
  `
}

/**
 * Create a column using HTML template
 * @param {string} colInfo Column information
 * @return {string}
 */
function createCol(colInfo) {
  return `<div class="excel__table--column">${colInfo}</div>`
}

/**
 * Create a row using HTML template
 * @param {string} rowData Cell content of the main columns
 * @param {string|number} [rowInfo=''] Cell content of the 1st column
 * @return {string}
 */
function createRow(rowData, rowInfo = '') {
  return `
    <div class="excel__table--row">
        <div class="excel__table--info">${rowInfo}</div>
        <div class="excel__table--data">${rowData}</div> 
    </div>
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

  const cols = new Array(colsCount + 1).fill('')

  const colsArray = cols
      .map((_, index) => String.fromCharCode(CODES.A + index))
      .map(createCol)
      .join('')

  rowsArray.push(createRow(colsArray))

  for (let i = 0; i < rows; i++) {
    const colsCurrent = cols.map(createCell).join('')
    rowsArray.push(createRow(colsCurrent, i + 1))
  }

  return rowsArray.join('')
}
