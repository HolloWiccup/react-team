declare module '*.scss' {
  type ClassNames = Record<string, string>
  const classNames: ClassNames
  export = classNames
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg' {
  import type React from 'react'
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}
