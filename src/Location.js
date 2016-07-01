//@flow

/*******************************************************************************
 * Imports
 *******************************************************************************/

import { parse } from 'query-string'

import compact from './array.compact'

import type { Command } from './Command'
import type { Options } from './Github'

/*******************************************************************************
 * Public API
 *******************************************************************************/

let toCommand = (location: Location): Command => {
  let parts = compact(location.pathname.split('/'))
  let res: Command
  switch(parts.length) {
    case 2:
      res = { name: parts[1], platform: parts[0] };
    break
    case 1:
    default:
      res = { name: parts[0], platform: "common" };
    break
  }
  return res
}

let toIndex = (location: Location): Options => {
  return Object.assign({
      branch: 'master',
      repository: 'tldr-pages/tldr-pages.github.io'
    }, parse(location.search))
}

export default {
  toCommand: toCommand,
  toIndex:   toIndex
}
