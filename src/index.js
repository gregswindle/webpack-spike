// since this folder is resolved in webpack,
// the root files are treated as node modules
// probably don't do this :)
import hello from 'hello'

const world = 'world'
console.log(`${hello}, ${world}!`)

const test = 'test'
