import "./App.css";
import Button from "./components/Button/button";
import PersonInfo from "./components/PersonInfo/personInfo";
import ProductList from "./components/ProductList/productList";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/header";

function App() {
  const firstName = "Dimitar";
  const lastName = "Georgievski";
  const person = {
    firstName: "John",
    lastName: "Doe",
  };
  const isParagraphShown = true;
  const isFinished = false;
  const colors: string[] = [
    "lightgreen",
    "lightgray",
    "lightblue",
    "lightyellow",
    "lightcoral",
    "aliceblue",
  ];
  return (
    <div>
      <Header />
      <main className="main">
        {/* Javascript expression?*/}
        <h2>Content</h2>
        <h3>Normal Variables</h3>
        <h4>{firstName}</h4>
        <h4>{lastName}</h4>
        <h3>Object Properties</h3>
        <h4>{person.firstName}</h4>
        <h4>{person.lastName}</h4>
        <button disabled={true}>Test</button>
        {isParagraphShown && (
          <p className="hide-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas
            voluptatem quod libero, reiciendis quis error voluptatum eveniet
            quasi saepe ipsa, adipisci recusandae labore aspernatur quaerat
            quidem dicta pariatur vitae!
          </p>
        )}
        <div
          className="todo"
          style={{ backgroundColor: isFinished ? "lightgreen" : "lightpink" }}
        >
          Do the dishes
        </div>
        <ul className="list">
          {colors.map((color, i) => (
            <li key={i} style={{ color: color }}>
              {color}
            </li>
          ))}
        </ul>

        <ProductList />
        <PersonInfo firstName="Petar" lastName="Petarovski" bgColor="red"/>
        <PersonInfo firstName="Jane" lastName="Doe" />
        <Button text="Click me" style={{backgroundColor: "lightgreen"}}/>
        <Button text="Success"/>
        <Button text="Disabled button" disabled={true}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
