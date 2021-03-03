import "twin.macro"
import "hyvor-talk-react"
import styledComponent, { CSSProp, css as cssProperty } from "styled-components"

declare module "twin.macro" {
  const css: typeof cssProperty
  const styled: typeof styledComponent
}

declare module "react" {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp
  }
  // The inline svg css prop
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp
  }
}

// @ts-ignore
declare module "hyvor-talk-react" {

}
