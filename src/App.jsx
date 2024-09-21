import data from "./data";
import { List } from "./List";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button
          className="btn btn-block"
          type="button"
          onClick={() => setPeople([])}
        >
          Clear List
        </button>
      </section>
    </div>
  );
};
export default App;
