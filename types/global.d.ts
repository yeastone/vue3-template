import type {
  ComponentRenderProxy,
  VNode,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType,
} from 'vue'

declare global {
  const __APP_INFO__: {
    pkg: {
      name: string
      version: string
      dependencies: Recordable<string>
      devDependencies: Recordable<string>
    }
    lastBuildTime: string
  }
  interface Window {
    // Global vue app instance
    __APP__: App<Element>
    webkitCancelAnimationFrame: (handle: number) => void
    mozCancelAnimationFrame: (handle: number) => void
    oCancelAnimationFrame: (handle: number) => void
    msCancelAnimationFrame: (handle: number) => void
    webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number
    mozRequestAnimationFrame: (callback: FrameRequestCallback) => number
    oRequestAnimationFrame: (callback: FrameRequestCallback) => number
    msRequestAnimationFrame: (callback: FrameRequestCallback) => number
  }

  // vue
  type PropType<T> = VuePropType<T>

  type Writable<T> = {
    -readonly [P in keyof T]: T[P]
  }

  type Nullable<T> = T | null
  type NonNullable<T> = T extends null | undefined ? never : T
  type Recordable<T = any> = Record<string, T>
  type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T
  }
  type Indexable<T = any> = {
    [key: string]: T
  }
  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
  }
  type TimeoutHandle = ReturnType<typeof setTimeout>
  type IntervalHandle = ReturnType<typeof setInterval>

  interface ChangeEvent extends Event {
    target: HTMLInputElement
  }

  interface WheelEvent {
    path?: EventTarget[]
  }

  function parseInt(s: string | number, radix?: number): number

  function parseFloat(string: string | number): number

}
