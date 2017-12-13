// since this folder is resolved in webpack,
// the root files are treated as node modules
// probably don't do this :)
import hello from 'hello'
import { log } from './utils'
import $ from 'jquery'

const world = 'world'
log(`${hello}, ${world}!`)

const test = 'test'

$('body').addClass('active')
