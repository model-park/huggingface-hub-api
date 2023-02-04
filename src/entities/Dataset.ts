export interface Dataset {
    _id?: string;
    id?: string;
    cardData?: DatasetCardData;
    disabled?: boolean;
    gated?: boolean;
    lastModified?: Date;
    likes?: number;
    private?: boolean;
    sha?: string;
    citation?: string;
    description?: string;
    downloads?: number;
    paperswithcode_id?: string;
    tags?: string[];
    siblings?: null;
    key?: string;
}

export interface DatasetCardData {
    annotations_creators?: string[];
    language_creators?: string[];
    language?: string[];
    license?: string[];
    multilinguality?: string[];
    size_categories?: string[];
    source_datasets?: string[];
    task_categories?: string[];
    task_ids?: any[];
    paperswithcode_id?: string;
    pretty_name?: string;
    tags?: string[];
    dataset_info?: DatasetInfo;
    "train-eval-index"?: TrainEvalIndex[];
}

export interface DatasetInfo {
    features?: Feature[];
    splits?: Split[];
    download_size?: number;
    dataset_size?: number;
}

export interface Feature {
    name?: string;
    dtype?: string;
    sequence?: SequenceClass | string;
}

export interface SequenceClass {
    class_label?: ClassLabel;
}

export interface ClassLabel {
    names?: { [key: string]: string; };
}

export interface Split {
    name?: string;
    num_bytes?: number;
    num_examples?: number;
}

export interface TrainEvalIndex {
    config?: string;
    task?: string;
    task_id?: string;
    splits?: Splits;
    col_mapping?: ColMapping;
}

export interface ColMapping {
    tokens?: string;
    labels?: string;
}

export interface Splits {
    eval_split?: string;
}
