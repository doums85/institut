/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'chapter',
    title: 'Chapitre',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Nom du chapitre',
            type: 'string'
        },
        {
            name:'description',
            title: 'Description',
            type: 'text'
        }
    ]
}