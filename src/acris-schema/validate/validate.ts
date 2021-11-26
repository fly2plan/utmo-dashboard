import Ajv from 'ajv';
import mergedSchema from '../utm-schema/mergedSchema.json'

const ajv = new Ajv({ schemaId: 'id' });
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));

const validate = ajv.compile(mergedSchema)

const resolved = new Proxy({}, {
  get: (target: any, name) => name in target ? target[name] : false
})

const resolveRef = (ref: string) => {
  const referencedKeyPath = ref.split('/');
  const referencedKey = referencedKeyPath[referencedKeyPath.length - 1];
  return referencedKey
}

const resolveSchemaDefinition = (schema: any, definition: any, path: string[]) => {
  let isResolved = true;
  //console.log(definition);
  if (!resolved[path[path.length - 1]]) {
    Object.values(definition.properties).forEach((property: any) => {
      if (property.hasOwnProperty('type')) {
        Object.values(property).forEach((value: any) => {
          if (value.hasOwnProperty('$ref')) {
            isResolved = false;
            const referencedKey = resolveRef(value['$ref'])
            delete value['$ref'];
            Object.assign(value, schema.definitions[referencedKey]);
            path.concat([value, referencedKey]);
            resolveSchemaDefinition(schema, schema.definitions[referencedKey], [...path])
          }
          if (property.hasOwnProperty('properties')) {
            resolveSchemaDefinition(schema, property, [...path])
          }
        })
      } else if (property.hasOwnProperty('$ref')) {
        isResolved = false;
        const referencedKey = resolveRef(property['$ref'])
        delete property['$ref'];
        Object.assign(property, schema.definitions[referencedKey])
        path.push(referencedKey)
        resolveSchemaDefinition(schema, schema.definitions[referencedKey], [...path])
      }
    })
  }
  if (isResolved && path.length > 1) {
    resolved[path[path.length - 1]] = true;
  }
}

const resolveSchema = (schema: any, path: string[]) => {
  Object.values(schema.definitions).forEach(definition => {
    resolveSchemaDefinition(schema, definition, [...path])
  })
}

resolveSchema(validate!.schema, ['/']);

export default validate