import data from "./data";
import { List } from "./List";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <section className="container">
        <h3>{people.length} Today's Birthdays</h3>
        <List people={people} />
      </section>
    </div>
  );
};
export default App;
