export default {
    // Model d'image crée à importer dans un shema sous le nom : "of: [{type: 'imageCarrousel'}]"
    name: 'imageCarrousel',
    title: 'Images',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image du carrousel',
            type: 'image',
            options: {
                hotspots: true,
            }
        },{
            name: 'title',
            title: 'Titre',
            type: 'string'
        },{
            name: 'subtitle',
            title: 'Sous-titre',
            type: 'string'
        }
    ]
}