export default {
    name: 'contact',
    title: 'Contact-nous',
    type: 'document',
    fields : [
        {
            name: 'presentation',
            title: 'Présentation',
            type: 'array',
            of: [{type: 'presentation'}]
        },{
            name: 'contactText',
            title: 'Saissez le texte',
            type: 'text'  
        }
    ]
}