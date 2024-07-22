import React, { useEffect, useState } from "react";
import Toolbar, { FONT_FAMILIES, PositionStatus } from "./Toolbar";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import FontSize from "./TipTapExtinsions/FontSize";
import Underline from "@tiptap/extension-underline";
import { Indent } from "./TipTapExtinsions/Indent";
import TextAlign from "@tiptap/extension-text-align";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";

export default function TextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList.configure({
        HTMLAttributes: {
          class: "custom-ul",
        },
      }),
      Document,
      Paragraph,
      Text,
      Underline,
      FontSize,
      Indent,
      FontFamily,
      TextStyle,
      OrderedList.configure({
        keepMarks: true,
        HTMLAttributes: {
          class: "custom-ol",
        },
      }),
      ListItem,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    editorProps: {
      attributes: {
        class: "w-full min-h-60 p-8 bg-[#6d5cbc05] outline-none",
      },
    },
    content: "",
  });

  const [positionStatus, setPositionStatus] = useState({} as PositionStatus);

  const getFontSize = (): string | undefined => {
    if (editor) {
      const { from, to } = editor.state.selection;

      // Ensure we are inspecting a non-empty selection or cursor position
      if (from === to) {
        // Get the mark at the current cursor position
        const node = editor.state.doc.nodeAt(from);
        if (node) {
          const mark = node.marks.find((mark) => mark.type.name === "fontSize");
          return mark?.attrs.fontSize || undefined;
        }
      }
      return undefined;
    }
  };

  const getFontFamily = (): string | undefined => {
    return editor?.getAttributes("textStyle")?.fontFamily;
  };

  function extractPositionStatus() {
    setPositionStatus({
      isBold: editor?.isActive("bold"),
      isItalic: editor?.isActive("italic"),
      isUnderline: editor?.isActive("underline"),
      isAlignLeft: editor?.isActive({ textAlign: "left" }),
      isAlignCenter: editor?.isActive({ textAlign: "center" }),
      isAlignRight: editor?.isActive({ textAlign: "right" }),
      isUL: editor?.isActive("bulletList"),
      isOL: editor?.isActive("orderedList"),
      fontSize: getFontSize(),
      fontFamily: getFontFamily(),
    });
  }

  const applyFontSize = (size: string) => {
    if (editor) {
      editor.chain().focus().setMark("fontSize", { fontSize: size }).run();
    }
  };

  const applyFontFamily = (fontFamily: string) => {
    editor?.chain().focus().setFontFamily(fontFamily).run();
  };

  const toggleBold = () => {
    editor?.chain().focus().toggleBold().run();
  };

  const toggleItalic = () => {
    editor?.chain().focus().toggleItalic().run();
  };

  const toggleUnderline = () => {
    editor?.chain().focus().toggleUnderline().run();
  };

  const applyIndent = () => {
    editor?.chain().focus().indent().run();
  };

  const applyOutdent = () => {
    editor?.chain().focus().outdent().run();
  };

  const applyAlignLeft = () => {
    editor?.chain().focus().setTextAlign("left").run();
  };

  const applyAlignCenter = () => {
    editor?.chain().focus().setTextAlign("center").run();
  };

  const applyAlignRight = () => {
    editor?.chain().focus().setTextAlign("right").run();
  };

  const applyUnorderedList = () => {
    editor?.chain().focus().toggleBulletList().run();
  };

  const applyOrderedList = () => {
    editor?.chain().focus().toggleOrderedList().run();
  };

  useEffect(() => {
    if (editor?.state) extractPositionStatus();
  }, [editor?.state]);

  return (
    <div className="flex flex-col w-full border-[1px] border-solid border-[##6d5cbc1a]">
      <div className="relative w-full z-[9999]">
        <Toolbar
          status={positionStatus}
          toggleBold={toggleBold}
          toggleItalic={toggleItalic}
          toggleUnderline={toggleUnderline}
          applyFontSize={applyFontSize}
          applyIndent={applyIndent}
          applyOutdent={applyOutdent}
          applyAlignLeft={applyAlignLeft}
          applyAlignCenter={applyAlignCenter}
          applyAlignRight={applyAlignRight}
          applyUL={applyUnorderedList}
          applyOL={applyOrderedList}
          applyFontFamily={applyFontFamily}
        />
      </div>
      <div className="z-0 editor-container">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
