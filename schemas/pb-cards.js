export const card = {
  title: "Card",
  name: "card",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Sub Title",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
      type: "text",
    },
    {
      title: "Colors",
      name: "colors",
      type: "pb_colors_fields",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Video",
      name: "video",
      type: "file",
    },
  ]
}


export default {
  title: "Page builder : Cards",
  name: "pb_cards",
  type: "object",
  fields: [
    {
      title: "Defaults fields",
      name: "defaults",
      type: "pb_defaults",
    },
    {
      title: "Cards",
      name: "cards",
      type: "array",
      of: [{type: "card"}]
    },
  ]
}