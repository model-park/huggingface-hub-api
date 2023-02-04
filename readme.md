
# Class: HFHubService

## Hierarchy

- `Service`

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [accessToken](default.md#accesstoken)
- [baseUrl](default.md#baseurl)
- [transformHeaders](default.md#transformheaders)

### Methods

- [CreateRepo](default.md#createrepo)
- [DeleteRepo](default.md#deleterepo)
- [DeleteRequest](default.md#deleterequest)
- [GetData](default.md#getdata)
- [GetDataset](default.md#getdataset)
- [GetDatasetTagsByType](default.md#getdatasettagsbytype)
- [GetDatasets](default.md#getdatasets)
- [GetHeaders](default.md#getheaders)
- [GetMetrics](default.md#getmetrics)
- [GetModel](default.md#getmodel)
- [GetModelTagsByType](default.md#getmodeltagsbytype)
- [GetModels](default.md#getmodels)
- [GetRequest](default.md#getrequest)
- [GetSpace](default.md#getspace)
- [GetSpaces](default.md#getspaces)
- [MoveRepo](default.md#moverepo)
- [PatchRequest](default.md#patchrequest)
- [PostRequest](default.md#postrequest)
- [PutRequest](default.md#putrequest)
- [UpdateRepoVisibility](default.md#updaterepovisibility)
- [UploadFile](default.md#uploadfile)
- [WhoAmI](default.md#whoami)
- [getUri](default.md#geturi)

## Constructors

### constructor

• **new default**(`accessToken?`, `transformHeaders?`, `baseUrl?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `accessToken?` | `string` | `undefined` |
| `transformHeaders` | (`headers`: `Headers`) => `Headers` | `undefined` |
| `baseUrl` | `string` | `'https://huggingface.co/api'` |

#### Overrides

Service.constructor

#### Defined in

[index.ts:6](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L6)

## Properties

### accessToken

• `Optional` **accessToken**: `string`

#### Inherited from

Service.accessToken

#### Defined in

[index.ts:7](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L7)

___

### baseUrl

• `Readonly` **baseUrl**: `string` = `'https://huggingface.co/api'`

#### Inherited from

Service.baseUrl

#### Defined in

[index.ts:9](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L9)

___

### transformHeaders

• **transformHeaders**: (`headers`: `Headers`) => `Headers`

#### Type declaration

▸ (`headers`): `Headers`

##### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `Headers` |

##### Returns

`Headers`

#### Inherited from

Service.transformHeaders

#### Defined in

[index.ts:8](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L8)

## Methods

### CreateRepo

▸ **CreateRepo**(`data`): `ResponseType`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`ResponseType`<`any`\>

#### Defined in

[index.ts:50](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L50)

___

### DeleteRepo

▸ **DeleteRepo**(`data`): `ResponseType`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`ResponseType`<`any`\>

#### Defined in

[index.ts:54](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L54)

___

### DeleteRequest

▸ **DeleteRequest**(`uri`, `body`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `body` | `any` |
| `params?` | `Params` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Service.DeleteRequest

#### Defined in

[service.ts:41](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/service.ts#L41)

___

### GetData

▸ `Protected` **GetData**(`response`): `Promise`<{ `data`: `Promise`<`unknown`\> ; `nextUrl`: `undefined` \| `string` ; `total`: ``null`` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`<{ `data`: `Promise`<`unknown`\> ; `nextUrl`: `undefined` \| `string` ; `total`: ``null`` \| `string`  }\>

#### Inherited from

Service.GetData

#### Defined in

[service.ts:107](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/service.ts#L107)

___

### GetDataset

▸ **GetDataset**(`datasetId`, `params?`): `ResponseType`<`Dataset`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `params?` | `Params` |

#### Returns

`ResponseType`<`Dataset`\>

#### Defined in

[index.ts:38](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L38)

___

### GetDatasetTagsByType

▸ **GetDatasetTagsByType**(): `ResponseType`<`Tag`[]\>

#### Returns

`ResponseType`<`Tag`[]\>

#### Defined in

[index.ts:42](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L42)

___

### GetDatasets

▸ **GetDatasets**(`params?`): `ResponseType`<`Dataset`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Params` |

#### Returns

`ResponseType`<`Dataset`[]\>

#### Defined in

[index.ts:34](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L34)

___

### GetHeaders

▸ `Protected` **GetHeaders**(): `Headers`

#### Returns

`Headers`

#### Inherited from

Service.GetHeaders

#### Defined in

[service.ts:98](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/service.ts#L98)

___

### GetMetrics

▸ **GetMetrics**(): `ResponseType`<`Metric`[]\>

#### Returns

`ResponseType`<`Metric`[]\>

#### Defined in

[index.ts:46](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L46)

___

### GetModel

▸ **GetModel**(`modelId`, `params?`): `ResponseType`<`Model`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelId` | `string` |
| `params?` | `Params` |

#### Returns

`ResponseType`<`Model`\>

#### Defined in

[index.ts:18](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L18)

___

### GetModelTagsByType

▸ **GetModelTagsByType**(): `ResponseType`<`Tag`[]\>

#### Returns

`ResponseType`<`Tag`[]\>

#### Defined in

[index.ts:30](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L30)

___

### GetModels

▸ **GetModels**(`params?`): `ResponseType`<`Model`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Params` |

#### Returns

`ResponseType`<`Model`[]\>

#### Defined in

[index.ts:14](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L14)

___

### GetRequest

▸ **GetRequest**(`uri`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `params?` | `Params` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Service.GetRequest

#### Defined in

[service.ts:12](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/service.ts#L12)

___

### GetSpace

▸ **GetSpace**(`spaceId`, `params?`): `ResponseType`<`Space`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spaceId` | `string` |
| `params?` | `Params` |

#### Returns

`ResponseType`<`Space`\>

#### Defined in

[index.ts:26](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L26)

___

### GetSpaces

▸ **GetSpaces**(`params?`): `ResponseType`<`Space`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Params` |

#### Returns

`ResponseType`<`Space`[]\>

#### Defined in

[index.ts:22](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L22)

___

### MoveRepo

▸ **MoveRepo**(`data`): `ResponseType`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`ResponseType`<`any`\>

#### Defined in

[index.ts:62](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L62)

___

### PatchRequest

▸ **PatchRequest**(`uri`, `body`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `body` | `any` |
| `params?` | `Params` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Service.PatchRequest

#### Defined in

[service.ts:56](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/service.ts#L56)

___

### PostRequest

▸ **PostRequest**(`uri`, `body`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `body` | `any` |
| `params?` | `Params` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Service.PostRequest

#### Defined in

[service.ts:26](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/service.ts#L26)

___

### PutRequest

▸ **PutRequest**(`uri`, `body`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `body` | `any` |
| `params?` | `Params` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Service.PutRequest

#### Defined in

[service.ts:71](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/service.ts#L71)

___

### UpdateRepoVisibility

▸ **UpdateRepoVisibility**(`type`, `repo_id`, `data`): `ResponseType`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `repo_id` | `string` |
| `data` | `Object` |
| `data.private` | `any` |

#### Returns

`ResponseType`<`any`\>

#### Defined in

[index.ts:58](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L58)

___

### UploadFile

▸ **UploadFile**(`type`, `repo_id`, `revision`, `path_in_repo`, `data`): `ResponseType`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `repo_id` | `string` |
| `revision` | `any` |
| `path_in_repo` | `string` |
| `data` | `any` |

#### Returns

`ResponseType`<`any`\>

#### Defined in

[index.ts:66](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L66)

___

### WhoAmI

▸ **WhoAmI**(): `ResponseType`<`User`\>

#### Returns

`ResponseType`<`User`\>

#### Defined in

[index.ts:70](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/index.ts#L70)

___

### getUri

▸ `Protected` **getUri**(`uri`, `params?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `params` | `Params` |

#### Returns

`string`

#### Inherited from

Service.getUri

#### Defined in

[service.ts:86](https://github.com/model-park/huggingface-hub-api/blob/07b65f2/src/service.ts#L86)
