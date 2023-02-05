import { Headers } from 'node-fetch';
import { Dataset, Metric, Model, Params, ResponseType, Space, Tag, User } from './entities';
import { Service } from './service';

export default class HFHubService extends Service {
    constructor (
        public accessToken?: string,
        public transformHeaders: (headers: Headers) => Headers = (headers) => headers,
        public readonly baseUrl: string = 'https://huggingface.co/api',
    ) {
        super(accessToken, transformHeaders, baseUrl,);
    }

    public GetModels(params?: Params): ResponseType<Array<Model>> {
        return this.GetRequest("/models", params);
    }

    public GetModel(modelId: string, params?: Params): ResponseType<Model> {
        return this.GetRequest(`/models/${modelId}`, params);
    }

    public GetSpaces(params?: Params): ResponseType<Array<Space>> {
        return this.GetRequest("/spaces", params);
    }

    public GetSpace(spaceId: string, params?: Params): ResponseType<Space> {
        return this.GetRequest(`/spaces/${spaceId}`, params);
    }

    public GetModelTagsByType(): ResponseType<Array<Tag>> {
        return this.GetRequest(`/models-tags-by-type`);
    }

    public GetDatasets(params?: Params): ResponseType<Array<Dataset>> {
        return this.GetRequest(`/datasets`, params);
    }

    public GetDataset(datasetId: string, params?: Params): ResponseType<Dataset> {
        return this.GetRequest(`/datasets/${datasetId}`, params);
    }

    public GetDatasetTagsByType(): ResponseType<Array<Tag>> {
        return this.GetRequest(`/datasets-tags-by-type`);
    }

    public GetMetrics(): ResponseType<Array<Metric>> {
        return this.GetRequest(`/metrics`);
    }

    public CreateRepo(data: any): ResponseType<any> {
        return this.PostRequest(`/repos/create`, data);
    }

    public DeleteRepo(data: any): ResponseType<any> {
        return this.DeleteRequest(`/models/create`, data);
    }

    public UpdateRepoVisibility(type: string, repo_id: string, data: { private: any; }): ResponseType<any> {
        return this.PutRequest(`/repos/${type}/${repo_id}/settings`, data);
    }

    public MoveRepo(data: any): ResponseType<any> {
        return this.PostRequest(`/repos/move`, data);
    }

    public UploadFile(type: string, repo_id: string, revision: any, path_in_repo: string, data: any): ResponseType<any> {
        return this.PostRequest(`/repos/${type}/${repo_id}/upload/${revision}/${path_in_repo}`, data);
    }

    public WhoAmI(): ResponseType<User> {
        return this.GetRequest(`/whoami-v2`);
    }
}

export * from './entities';