declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}
