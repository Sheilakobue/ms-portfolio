// Importing necessary type definitions from 'sanity'
import { SchemaTypeDefinition } from 'sanity';

// Importing the project schema definition from './project'
import project from './project';

// Defining the schema object with types property as an array of SchemaTypeDefinition
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project], // Adding the project schema to the array of schema types
}
