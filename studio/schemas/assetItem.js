export default {
    name: 'assetItem',
    title: 'Asset Item',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspots: true,
            }
        },
        {
            name: 'title',
            title: 'Titre',
            type: 'string'
        },{
            name: 'description',
            title: 'Description',
            type: 'text'
        }
    ]
}