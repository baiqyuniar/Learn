import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";
import data from "./data";

const App = () => {
  const input = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Header />
      <Hero />
      <section className="list">{input}</section>
    </div>
  );
};

export default App;
