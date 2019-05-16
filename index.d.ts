interface Window {
  [key: string]: any
}

type ComponentImportPromise = () => Promise<any>;
type ComponentImportMap = { [name: string]: string | ComponentImportPromise };
type ComponentImportMapOrArray = ComponentImportMap | Array<string | ComponentImportMap>;

type UseComponentsFunction = {
  (componentsMap: ComponentImportMapOrArray, relativePath: string): ExtendedUseComponents;
  (componentsMap: ComponentImportMapOrArray): ExtendedUseComponents;
  (componentsMap: ComponentImportMapOrArray, relativePath: string): ComponentImportPromiseMap;
  (componentsMap: ComponentImportMapOrArray): ComponentImportPromiseMap;
};

type ExtendedUseComponents = ComponentImportPromiseMap & {
  and: UseComponentsFunction;
  with: UseComponentsFunction;
  fluttershy: UseComponentsFunction;
}

type ComponentImportPromiseMap = {
  [name: string]: ComponentImportPromise;
};

declare const env: String & {
  isDevelopment: boolean
};

declare module '.*' {
  const render: <T>(arg: T) => T
  export = render;
}
