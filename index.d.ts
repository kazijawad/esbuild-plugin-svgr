declare function svgrPlugin(options?: {
    dimensions?: boolean;
    expandProps?: string;
    icon?: boolean;
    native?: boolean;
    typescript?: boolean;
    prettier?: boolean;
    prettierConfig?: object;
    memo?: boolean;
    ref?: boolean;
    replaceAttrValues?: object;
    svgProps?: object;
    svgo?: boolean;
    svgoConfig?: object;
    template?: unknown;
    titleProp?: boolean;
    runtimeConfig?: boolean;
    plugins?: unknown;
    namedExport?: string;
}): {
    name: string;
    setup(build: unknown): void;
};

export = svgrPlugin;
