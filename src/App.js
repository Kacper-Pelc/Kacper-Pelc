import Navbar from "./Components/navbar/Navbar";
import Container from "./Components/container/Container";
import Bio from "./Components/Bio/Bio";
import Ui from "./Components/Ui/Ui";
import Aplikacje from "./Components/Aplikacje/Aplikacje";
import Szkola from "./Components/Szkola/Szkola";
import Kontakt from "./Components/Kontakt/Kontakt";

import "./index.css";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Container />
     <Bio />
     <Ui />
     <Aplikacje />
     <Szkola />
     <Kontakt />
    </div>
  );
}

export default App;
