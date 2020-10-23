import React from "react";
import NFormate from "./NewFormate";

const data = {
  name: "app",
  author: "cjl",
  pages: {
    home: "sxx",
  },
  routers: [
    {
      tkey: "sdfsdf",
    },
    {
      dsdf: "sdfsdf",
    },
    {
      eee: ["sdfs", "abc", "def", "ghj"],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <NFormate data={data} />
    </div>
  );
}

export default App;
