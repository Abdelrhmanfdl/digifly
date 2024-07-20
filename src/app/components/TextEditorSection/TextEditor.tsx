import React, { useEffect, useRef, useState } from "react";
import Toolbar, { PositionStatus } from "./Toolbar";
import { FONT_SIZES } from "./Toolbar/Buttons/FontDropdown";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import FontSize from "./TipTapExtinsions/FontSize";
import Underline from "@tiptap/extension-underline";
import { Indent } from "./TipTapExtinsions/Indent";

export default function TextEditor() {
  const editor = useEditor({
    extensions: [StarterKit, Underline, FontSize, Indent],
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

  function extractPositionStatus() {
    setPositionStatus({
      isBold: editor?.isActive("bold"),
      isItalic: editor?.isActive("italic"),
      isUnderline: editor?.isActive("underline"),
      fontSize: getFontSize(),
    });
  }

  const applyFontSize = (size: string) => {
    if (editor) {
      editor.chain().focus().setMark("fontSize", { fontSize: size }).run();
    }
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

  useEffect(() => {
    if (editor?.state) extractPositionStatus();
  }, [editor?.state]);

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full z-[9999]">
        <Toolbar
          toggleBold={toggleBold}
          toggleItalic={toggleItalic}
          toggleUnderline={toggleUnderline}
          applyFontSize={applyFontSize}
          applyIndent={applyIndent}
          applyOutdent={applyOutdent}
          status={positionStatus}
        />
      </div>
      <div className="z-0 editor-container">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
