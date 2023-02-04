[@modelpark/huggingface-hub-api](../README.md) / [Exports](../modules.md) / default

# Class: default

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

index.ts:6

## Properties

### accessToken

• `Optional` **accessToken**: `string`

#### Inherited from

Service.accessToken

#### Defined in

index.ts:7

___

### baseUrl

• `Readonly` **baseUrl**: `string` = `'https://huggingface.co/api'`

#### Inherited from

Service.baseUrl

#### Defined in

index.ts:9

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

index.ts:8

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

index.ts:50

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

index.ts:54

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

service.ts:41

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

service.ts:107

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

index.ts:38

___

### GetDatasetTagsByType

▸ **GetDatasetTagsByType**(): `ResponseType`<`Tag`[]\>

#### Returns

`ResponseType`<`Tag`[]\>

#### Defined in

index.ts:42

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

index.ts:34

___

### GetHeaders

▸ `Protected` **GetHeaders**(): `Headers`

#### Returns

`Headers`

#### Inherited from

Service.GetHeaders

#### Defined in

service.ts:98

___

### GetMetrics

▸ **GetMetrics**(): `ResponseType`<`Metric`[]\>

#### Returns

`ResponseType`<`Metric`[]\>

#### Defined in

index.ts:46

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

index.ts:18

___

### GetModelTagsByType

▸ **GetModelTagsByType**(): `ResponseType`<`Tag`[]\>

#### Returns

`ResponseType`<`Tag`[]\>

#### Defined in

index.ts:30

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

index.ts:14

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

service.ts:12

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

index.ts:26

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

index.ts:22

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

index.ts:62

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

service.ts:56

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

service.ts:26

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

service.ts:71

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

index.ts:58

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

index.ts:66

___

### WhoAmI

▸ **WhoAmI**(): `ResponseType`<`User`\>

#### Returns

`ResponseType`<`User`\>

#### Defined in

index.ts:70

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

service.ts:86
