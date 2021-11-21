# my-rating



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute   | Description | Type       | Default              |
| ------------- | ----------- | ----------- | ---------- | -------------------- |
| `isShow`      | `is-show`   |             | `boolean`  | `false`              |
| `maxValue`    | `max-value` |             | `number`   | `5`                  |
| `person`      | --          |             | `object`   | `{}`                 |
| `personArray` | --          |             | `Person[]` | `[{ name: 'John' }]` |
| `value`       | `value`     |             | `number`   | `0`                  |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `ratingChange` |             | `CustomEvent<any>` |


## Methods

### `getValue(params: any) => Promise<number>`



#### Returns

Type: `Promise<number>`



### `setPerson(params: any) => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `setPersonArray(persons: []) => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
