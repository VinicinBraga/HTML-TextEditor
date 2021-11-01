import "./App.css";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HTML TEXT EDITOR</h1>
      </header>
      <div className="editor">
        <TextEditor />
      </div>
    </div>
  );
}

export default App;
