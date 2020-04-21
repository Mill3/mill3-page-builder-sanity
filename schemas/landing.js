export default {
  title: "Landing",
  name: "landing",
  type: "document",

  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      required: true,
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      required: true,
      options: {
        source: "name"
      }
    },
    {
      title: "Page builder",
      name: "pb_rows",
      type: "array",
      of: [{type: "pb_header"}, {type: "pb_cards"}]
    }
    // {
    //   title: 'Author',
    //   name: 'author',
    //   type: 'reference',
    //   to: [{type: 'author'}]
    // }
  ]
}