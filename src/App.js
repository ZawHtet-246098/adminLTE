import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
