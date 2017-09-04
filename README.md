# JSON Schema comparison tool

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
const semverCompat = compare(oldSchema, newSchema); // can be "model", "revision", "addition" and "equal"
```

## Typescript

```typescript
import { default as compare, CompareResult } from 'json-schema-comparison';
const semverCompat: CompareResult = compare(oldSchema, newSchema);
```
