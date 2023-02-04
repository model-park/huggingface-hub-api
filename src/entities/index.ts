export * from "./Dataset";
export * from "./Model";
export * from "./Params";
export * from "./Space";
export * from "./User";


export type ResponseType<T> = Promise<{
    data: T;
    nextUrl?: string;
    total?: number;
    error?: string;
}>;

export interface Tag {
    id: string;
    label: string;
    type: string;
}

export interface Metric {
    id: string;
    spaceId: string;
    description: string;
}