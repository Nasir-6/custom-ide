import React from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";

import 'ace-builds/src-noconflict/snippets/javascript'

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = () => {
    const annotations = [
        {
          row: 3, // must be 0 based
          column: 4, // must be 0 based
          text: "error.message", // text to show in tooltip
          type: "error"
        }
      ];

  const editor = (
    <AceEditor
      mode="javascript"
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
    //   enableBasicAutocompletion={true}
      enableLiveAutocompletion={true}
      enableSnippets={true}
      editorProps={{
        $blockScrolling: true,
      }}
      annotations={annotations}
    />
  );

  function onChange(newValue) {
    console.log("change", newValue);
    console.log(editor);
  }

  return <>{editor}</>;
};

export default Editor;