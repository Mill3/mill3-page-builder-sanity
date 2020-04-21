export default {
  title: "Author",
  name: "author",
  type: "document",
  preview: {
    select: {
      firstname: 'firstname',
      lastname: 'lastname'
    },
    prepare(selection) {
      const {firstname, lastname} = selection
      return {
        title: [firstname, lastname].join(" "),
      }
    }
  },
  fields: [
    // This document has only one field
    {
      // The display name for this field
      title: "First name",

      // The identifier for this field used in the api's
      name: "firstname",

      // The type of this field
      type: "string",
    },
    {
      // The display name for this field
      title: "Last name",

      // The identifier for this field used in the api's
      name: "lastname",

      // The type of this field
      type: "string",
    },
  ]
}