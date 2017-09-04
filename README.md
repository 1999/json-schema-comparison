# JSON Schema comparison tool

[![Greenkeeper badge](https://badges.greenkeeper.io/1999/json-schema-comparison.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/1999/json-schema-comparison.svg?style=flat)](https://travis-ci.org/1999/json-schema-comparison)
[![DevDependency Status](http://img.shields.io/david/dev/1999/json-schema-comparison.svg?style=flat)](https://david-dm.org/1999/json-schema-comparison#info=devDependencies)

This projected started as internal tool used to compare JSON schemas. it doesn't have support for all of JSON schema types and attributes. However you're more than welcome to create a PR for it and add/fix whatever part of standard you're missing.

Comparison is based on SnowPlow SchemaVer data model. Read why semver cannot be applied to schema comparison [here]([Snowplow](https://snowplowanalytics.com/blog/2014/05/13/introducing-schemaver-for-semantic-versioning-of-schemas/)).

## Install

```
npm install json-schema-comparison --save
```

# Usage

## Javascript

```javascript
const compare = require('json-schema-comparison');
const compat = compare(oldSchema, newSchema); // can be "model", "revision", "addition" and "equal"
```

## Typescript

```typescript
import { default as compare, CompareResult } from 'json-schema-comparison';
const compat: CompareResult = compare(oldSchema, newSchema);
```
