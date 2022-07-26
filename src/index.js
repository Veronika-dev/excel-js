import './scss/index.scss'

/**
 * This is a description
 * @return {Promise<void>}
 */
async function hello() {
  await new Promise((res) => res('hi'))
  console.log('hi')
}
hello();
