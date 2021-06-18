declare function svgrPlugin(options?: {
    configFile?: string;
    ext?: string;
    icon?: boolean;
    native?: boolean | object;
    typescript?: boolean;
    dimensions?: boolean;
    expandProps?: string;
    ref?: boolean;
    memo?: boolean;
    replaceAttrValues?: object;
    svgProps?: object;
    titleProp?: boolean;
    template?: any;
    outDir?: string;
    indexTemplate?: any;
    ignoreExisting?: boolean;
    filenameCase?: string;
}): {
    name: string;
    setup(build: unknown): void;
};

export = svgrPlugin;
