export type CompareResult = 'model' | 'revision' | 'addition' | 'equal';

export default function compare(schema1: any, schema2: any): CompareResult {
  return 'equal';
}
