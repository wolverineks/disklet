// @flow

import { type Disklet } from '../index.js'

export function makeNodeDisklet(path: string): Disklet {
  throw new Error('makeNodeDisklet is not available on this platform')
}

export function makeReactNativeDisklet(): Disklet {
  throw new Error('makeReactNativeDisklet is not available on this platform')
}
