# toFormData

> A small javascript utility for converting to form data

[![npm](https://img.shields.io/npm/v/@ankit_brahmbhatt/toformdata.svg)](https://www.npmjs.com/package/@ankit_brahmbhatt/toformdata)

## Install

```sh
npm install @ankit_brahmbhatt/toFormData
```

## Usage

```js
import { toFormData } from "@ankit_brahmbhatt/toformdata";

const object = {
  /**
   * key-value mapping
   */
};

const options = {
  /**
   * Remove null and undefined values from formData object
   */
  removeNullAndUndefined: false,

  /**
   * Use bracket format instead of dot format for js objects . Defaults to false
   */
  useBracketsForObjects: false,
};

const formData = toFormData(
  object,
  options // optional
);

// log formdata to the console
for (let value of formData.entries()) {
  console.log(value[0] + ", " + value[1]);
}
```
