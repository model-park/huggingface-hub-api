import { Params } from "./entities";

export class Service {

    constructor (
        public accessToken?: string,
        public transformHeaders: (headers: Headers) => Headers = (headers) => headers,
        public readonly baseUrl: string = 'https://huggingface.co',
    ) { }

    public async GetRequest(uri: string, params?: Params, url?: string): Promise<any> {
        try {
            const response = await fetch(url || this.getUri(uri, params), {
                method: 'GET',
                headers: this.GetHeaders(),
            });

            return this.GetData(response);
        } catch (error) {
            console.log(error);
            return { error, data: null };
        }
    }

    public async PostRequest(uri: string, body: any, params?: Params, url?: string): Promise<any> {
        try {
            const response = await fetch(url || this.getUri(uri, params), {
                method: 'POST',
                headers: this.GetHeaders(),
                body: JSON.stringify(body),
            });

            return this.GetData(response);
        } catch (error) {
            console.log(error);
            return { error, data: null };
        }
    }

    public async DeleteRequest(uri: string, body: any, params?: Params): Promise<any> {
        try {
            const response = await fetch(this.getUri(uri, params), {
                method: 'DELETE',
                headers: this.GetHeaders(),
                body: JSON.stringify(body),
            });

            return this.GetData(response);
        } catch (error) {
            console.log(error);
            return { error, data: null };
        }
    }

    public async PatchRequest(uri: string, body: any, params?: Params): Promise<any> {
        try {
            const response = await fetch(this.getUri(uri, params), {
                method: 'PATCH',
                headers: this.GetHeaders(),
                body: JSON.stringify(body),
            });

            return this.GetData(response);
        } catch (error) {
            console.log(error);
            return { error, data: null };
        }
    }

    public async PutRequest(uri: string, body: any, params?: Params): Promise<any> {
        try {
            const response = await fetch(this.getUri(uri, params), {
                method: 'PUT',
                headers: this.GetHeaders(),
                body: JSON.stringify(body),
            });

            return this.GetData(response);
        } catch (error) {
            console.log(error);
            return { error, data: null };
        }
    }

    protected getUri(uri: string, params: Params = {}): string {
        const _uri = new URL("/api" + uri, this.baseUrl);

        Object.entries(params).forEach(([key, value]: [any, any]) => {
            if (value) {
                _uri.searchParams.append(key, value);
            }
        });

        return _uri?.toString();
    }

    protected GetHeaders() {
        const headers = new Headers();

        if (this.accessToken) {
            headers.append('Authorization', `Bearer ${this.accessToken}`);
        }
        return this.transformHeaders(headers);
    }

    protected async GetData(response: Response) {
        const data = await response.json();

        const nextUrl = response.headers
            .get('Link')
            ?.split(',')
            ?.find((link: string) => link.includes('rel="next"'))
            ?.split(';')[0].replace('<', '').replace('>', '');

        const total = response.headers.get('X-Total-Count');
        return { data, nextUrl, total };
    }
}