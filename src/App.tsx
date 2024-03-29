import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PeopleList } from "./PeopleList";
import { Add } from "./Add";

export interface PeopleState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}
function App() {
  const [people, setPeople] = useState<PeopleState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg",
    },
  ]);

  return (
    <div className="App">
      <h1>People</h1>
      <PeopleList people={people} />
      <Add people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
