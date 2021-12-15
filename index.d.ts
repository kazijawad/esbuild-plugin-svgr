import { Config } from "@svgr/core";

declare function svgrPlugin(options?: Config): {
    name: string;
    setup(build: unknown): void;
};

export = svgrPlugin;
