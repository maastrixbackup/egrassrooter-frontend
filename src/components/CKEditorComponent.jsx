// components/custom-editor.js
'use client' // only in App Router

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, Underline, Strikethrough, List, Heading } from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
// import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

function CustomEditor() {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            'undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikethrough',
            'list', 'heading'
          ],
        },
        plugins: [
          Bold, Essentials, Italic, Mention, Underline, Paragraph, Undo, Strikethrough, List, Heading
        ],
        mention: {
        },
        initialData: '<p>Hello from CKEditor 5 in React!</p>'
      }}
    />
  );
}

export default CustomEditor;
