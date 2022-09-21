import "./App.css";
import FrontPage from "../frontpage/frontpage";
import ContextProvider from "../../contexts/appState";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <FrontPage />
      </div>
    </ContextProvider>
  );
}

export default App;
