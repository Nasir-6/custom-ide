
import './App.css';
import Editor from './Editor';

function App() {
  // var editor = ace.edit("editor");
  //   editor.setTheme("ace/theme/monokai");
  //   editor.session.setMode("ace/mode/javascript");

  return (
    <div className="App">
      <h1>Custom IDE</h1>
     <Editor/>
    </div>
  );
}

export default App;
