export interface Model {
    _id?: string;
    id?: string;
    modelId?: string;
    sha?: string;
    lastModified?: Date;
    private?: boolean;
    disabled?: boolean;
    gated?: boolean;
    pipeline_tag?: string;
    tags?: string[];
    downloads?: number;
    library_name?: string;
    mask_token?: string;
    widgetData?: WidgetDatum[];
    likes?: number;
    "model-index"?: null;
    config?: Config;
    cardData?: CardData;
    transformersInfo?: TransformersInfo;
    spaces?: string[];
    siblings?: Sibling[];
}

export interface CardData {
    tags?: string[];
    language?: string;
    license?: string;
    datasets?: string[];
}

export interface Config {
    architectures?: string[];
    model_type?: string;
}

export interface Sibling {
    rfilename?: string;
}

export interface TransformersInfo {
    auto_model?: string;
    pipeline_tag?: string;
    processor?: string;
}

export interface WidgetDatum {
    text?: string;
}
