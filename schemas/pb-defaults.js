export const spacers = ["1", "2", "3", "4", "5", "6", "7"];
export const flex_positions = ["flex-start", "center", "flex-end"];
export const animations = ["slide-in", "fade-in"];
export const headings = ["1", "2", "3", "4", "5", "6"];

export const colorsFields = {
  title: "Colors fields",
  name: "pb_colors_fields",
  type: "object",
  fields: [
    {
      title: "Text color",
      name: "color_text",
      type: "color",
    },
    {
      title: "Background color",
      name: "color_bg",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
  ],
};

export default {
  title: "Defaults fields",
  name: "pb_defaults",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Title heading tag",
      name: "title_heading_tag",
      type: "string",
      options: {
        list: headings,
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      title: "Sub Title",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Container fluid",
      name: "fluid",
      type: "boolean",
    },
    {
      title: "Spacer Vertical",
      name: "spacer_y",
      type: "string",
      options: {
        list: spacers,
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      title: "Spacer Horizontal",
      name: "spacer_x",
      type: "string",
      options: {
        list: spacers,
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      title: "Align items vertical",
      name: "align_items",
      type: "string",
      options: {
        list: flex_positions,
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      title: "Align items horizontal",
      name: "justify_content",
      type: "string",
      options: {
        list: flex_positions,
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      title: "Reveal animation",
      name: "reveal_animation",
      type: "string",
      options: {
        list: animations,
        layout: "radio",
        direction: "horizontal",
      },
    },
  ],
};
