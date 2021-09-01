import './App.css';
import Ajv from 'ajv';
import mergedSchema from './acris-schema/merged-schema/mergedModel.schema'
import { FlightPlan } from './components';
import { QueryClient, QueryClientProvider } from 'react-query'

// ########## OLD CODE ######### //
// const navigateToObjectEnd = (object, pathAsList) => {
//   if (pathAsList.length > 0) {
//     const nextKey = pathAsList.shift();
//     return navigateToObjectEnd(object[nextKey], pathAsList)
//   } else {
//     return object
//   }
// }

// const hasDuplicate = (array) => {
//   const values = []
//   for (const val of array) {
//     if (!values.includes(val)) {
//       values.push(val)
//     } else {
//       return true
//     }
//   }
//   return false
// }

// const isRecursive = (object, keys) => {
//   Object.entries(object).forEach(([key, val]) => {
//     if (keys.hasOwnProperty(key) && !repeatedKeys.includes[key]) {
//       return true;
//     } else {
//       keys[key] = ""
//     }
//     if (typeof val === "object") {
//       return isRecursive(val, keys);
//     }
//   });
//   return false;
// }


// const resolveReferences = (schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) => {
//   console.log(schema);
//   if (schema.hasOwnProperty("$ref")) {
//     const splitPath = schema["$ref"].split('/');
//     const key = splitPath[splitPath.length - 1];
//     const pathToSchemaFromRoot = jsonPtr.substring(1).split('/');
//     if (!hasDuplicate(pathToSchemaFromRoot)) {
//       let objectToReplace = navigateToObjectEnd(rootSchema, [...pathToSchemaFromRoot]);
//       delete objectToReplace["$ref"];
//       objectToReplace = Object.assign(objectToReplace, rootSchema.definitions[key]);
//     }
//   }
// }

//traverse(validate.schema, { allKeys: true, cb: resolveReferences });
// ########## OLD CODE ######### //

const ajv = new Ajv({ schemaId: 'id' });
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
const validate = ajv.compile(mergedSchema);
delete validate.schema.properties["Merged Model v1.3 Message Model"];

const resolved = new Proxy({}, {
  get: (target, name) => name in target ? target[name] : false
})

const resolveSchema = (schema, path) => {
  Object.values(schema.definitions).forEach(definition => {
    resolveSchemaDefinition(schema, definition, [...path])
  })
}

const resolveSchemaDefinition = (schema, definition, path) => {
  let isResolved = true;
  if (!resolved[path[path.length - 1]]) {
    Object.values(definition.properties).forEach(property => {
      if (property.hasOwnProperty('type')) {
        Object.values(property).forEach(value => {
          if (value.hasOwnProperty('$ref')) {
            isResolved = false;
            const referencedKeyPath = value['$ref'].split('/');
            const referencedKey = referencedKeyPath[referencedKeyPath.length - 1];
            delete value['$ref'];
            Object.assign(value, schema.definitions[referencedKey]);
            path.concat([value, referencedKey]);
            resolveSchemaDefinition(schema, schema.definitions[referencedKey], [...path])
          }
        })
      } else if (property.hasOwnProperty('$ref')) {
        isResolved = false;
        const referencedKeyPath = property['$ref'].split('/')
        const referencedKey = referencedKeyPath[referencedKeyPath.length - 1]
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

resolveSchema(validate.schema, ['/']);

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <FlightPlan validate={validate} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
