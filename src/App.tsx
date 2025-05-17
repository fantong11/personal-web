import React from "react";
import Header from "./components/Header";

function App(): JSX.Element {
  React.useEffect(() => {
    document.title = "Kai Hsiang Fan";
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
