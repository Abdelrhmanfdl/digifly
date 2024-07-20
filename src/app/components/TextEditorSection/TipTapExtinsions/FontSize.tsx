// // // import { Mark, mergeAttributes, Extension } from "@tiptap/core";
// // // import TextStyle from "@tiptap/extension-text-style";

// // // // import TextStyle from "@tiptap/extension-text-style";

// declare module "@tiptap/core" {
//   interface Commands<ReturnType> {
//     fontSize: {
//       setFontSize: (size: string) => ReturnType;
//       unsetFontSize: () => ReturnType;
//     };
//   }
// }

// // // const FontSize = TextStyle.extend({
// // //   name: "fontSize",
// // // //   addOptions() {
// // // //     return {
// // // //       types: ["textStyle"],
// // // //     };
// // // //   },
// // //   addGlobalAttributes() {
// // //     return [
// // //       {
// // //         types: this.options.HTMLAttributes["textStyle"],
// // //         attributes: {
// // //           fontSize: {
// // //             default: null,
// // //             parseHTML: (element) =>
// // //               element.style.fontSize.replace(/['"]+/g, ""),
// // //             renderHTML: (attributes) => {
// // //               if (!attributes.fontSize) {
// // //                 return {};
// // //               }
// // //               return {
// // //                 style: `font-size: ${attributes.fontSize}`,
// // //               };
// // //             },
// // //           },
// // //         },
// // //       },
// // //     ];
// // //   },
// // //   addCommands() {
// // //     return {
// // //       setFontSize:
// // //         (fontSize) =>
// // //         ({ chain }) => {
// // //           return chain()
// // //             .setMark("textStyle", { fontSize: fontSize + "px" })
// // //             .run();
// // //         },
// // //       //   unsetFontSize:
// // //       //     () =>
// // //       //     ({ chain }) => {
// // //       //       return chain()
// // //       //         .setMark("textStyle", { fontSize: null })
// // //       //         .removeEmptyTextStyle()
// // //       //         .run();
// // //       //     },
// // //     };
// // //   },
// // // });

// // // export default FontSize;

// // import { Mark, mergeAttributes } from "@tiptap/core";
// // import { Commands } from "@tiptap/react";

// // const FontSize = Mark.create({
// //   name: "fontSize",

// //   addOptions() {
// //     return {
// //       HTMLAttributes: {},
// //       sizes: ["12px", "14px", "16px", "18px", "24px", "32px"], // Customize your pixel sizes here
// //     };
// //   },

// //   parseHTML() {
// //     return this.options.sizes.map((size: string) => ({
// //       tag: `span[style="font-size: ${size};"]`,
// //     }));
// //   },

// //   renderHTML({ HTMLAttributes }) {
// //     return [
// //       "span",
// //       mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
// //       0,
// //     ];
// //   },

// //   addCommands() {
// //     return {
// //       setFontSize:
// //         (size) =>
// //         ({ chain }) => {
// //           return chain()
// //             .setMark(this.name, { style: `font-size: ${size};` })
// //             .run();
// //         },
// //       //   unsetFontSize:
// //       //     () =>
// //       //     ({ commands }) => {
// //       //       return commands.unsetMark(this.name);
// //       //     },
// //     };
// //   },
// // });

// // export default FontSize;

// import { Mark, mergeAttributes } from "@tiptap/core";

// const FontSize = Mark.create({
//   name: "fontSize",

//   addOptions() {
//     return {
//       HTMLAttributes: {},
//       sizes: ["12px", "14px", "16px", "18px", "24px", "32px"], // Customize your pixel sizes here
//     };
//   },

//   parseHTML() {
//     return this.options.sizes.map((size: string) => ({
//       tag: `span[style="font-size: ${size};"]`,
//     }));
//   },

//   renderHTML({ HTMLAttributes }) {
//     return [
//       "span",
//       mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
//       0,
//     ];
//   },

//   addCommands() {
//     return {
//       setFontSize:
//         (size) =>
//         ({ commands }) => {
//           return commands.setMark(this.name, { style: `font-size: ${size};` });
//         },
//       unsetFontSize:
//         () =>
//         ({ commands }) => {
//           return commands.unsetMark(this.name);
//         },
//     };
//   },
// });

// export default FontSize;

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
