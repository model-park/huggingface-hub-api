export interface Space {
    _id?: string;
    id?: string;
    author?: string;
    sha?: string;
    lastModified?: Date;
    private?: boolean;
    cardData?: SpaceCardData;
    gated?: boolean;
    disabled?: boolean;
    subdomain?: string;
    tags?: string[];
    likes?: number;
    models?: string[];
    sdk?: string;
    runtime?: Runtime;
    siblings?: SpaceSibling[];
}

export interface SpaceCardData {
    title?: string;
    emoji?: string;
    colorFrom?: string;
    colorTo?: string;
    sdk?: string;
    app_file?: string;
    pinned?: boolean;
}

export interface Runtime {
    stage?: string;
    hardware?: Hardware;
    spaceId?: string;
}

export interface Hardware {
    current?: string;
    requested?: string;
}

export interface SpaceSibling {
    rfilename?: string;
}
