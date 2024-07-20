import { Mark, mergeAttributes } from "@tiptap/core";

interface FontSizeOptions {
  HTMLAttributes: Record<string, any>;
}

const FontSize = Mark.create<FontSizeOptions>({
  name: "fontSize",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  parseHTML() {
    return [
      {
        tag: "span[style]",
        getAttrs: (dom: HTMLElement) => {
          const style = dom.getAttribute("style");
          const match = style?.match(/font-size:\s*(\d+px)/);
          return match ? { fontSize: match[1] } : false;
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },

  addAttributes() {
    return {
      fontSize: {
        default: null,
        parseHTML: (element) =>
          element.getAttribute("style")?.match(/font-size:\s*(\d+px)/)?.[1],
        renderHTML: (attributes) => {
          if (!attributes.fontSize) {
            return {};
          }
          return {
            style: `font-size: ${attributes.fontSize}`,
          };
        },
      },
    };
  },
});

export default FontSize;
