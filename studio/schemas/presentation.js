export default {
    name: 'presentation',
    title: 'Presentation',
    type: 'object',
    fields : [
        {
            name: 'text',
            title: 'Saissez le texte',
            type: 'text'  
        },
        {
            name: 'image',
            title: 'Image de la présentation',
            type: 'image',
            options: {
                hotspots: true,
            }
        },
    ]
}