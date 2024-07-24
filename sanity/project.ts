export default {
    // Name of the schema
    name: 'project',
    
    // Title of the schema
    title: 'Project',
    
    // Type of the schema
    type: 'document',
    
    // Array of fields in the schema
    fields: [
        {
            // Field for the name of the project
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            // Field for the image of the project
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            // Field for the URL of the project
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            // Field for the category of the project
            name: 'category',
            title: 'Category',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
};
