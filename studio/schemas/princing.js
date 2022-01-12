/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'pricing',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Nom de la formule',
            type: 'string'
        }, {
            name: 'price',
            title: 'Tarifs',
            type: 'array',
            of: [
                {
                    type: 'object', 
                    fields:[
                        {
                            name: 'chapterName',
                            title: 'Nom du chapitre',
                            type: 'string'
                        }, {
                            name: 'chapterPricing',
                            title: 'Prix du chapitre',
                            type: 'string'
                        }
                    ]
                }
            ]
        }
    ]
}