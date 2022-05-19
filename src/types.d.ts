declare module '*.scss' {
  const className: Record<string, string>;
  export default className;
}

declare module '*.png' {
  const value: any;
  export default value;
}
