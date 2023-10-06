import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Pages from "./pages/Pages.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="p-5">
          <Pages />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
