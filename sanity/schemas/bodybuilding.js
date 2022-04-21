export default {
    name: 'bodybuilding',
    title: 'Bodybuilding',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },{
        name: 'muscleGroup',
        title: 'Muscle Group',
        type: 'reference',
        to: {type: 'muscleGroup'},
      },
      {
        name: 'warmup',
        title: 'Warm Up',
        type: 'blockContent',
      },
      {
        name: 'main',
        title: 'Main',
        type: 'blockContent',
      }
      
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`,
        })
      },
    },
  }
  