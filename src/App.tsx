import "./App.css";
import { CheckNumber } from "./components/CheckNumber";
import { Cities } from "./components/Cities";
import { DrinkStore } from "./components/DrinkStore";
import { RenderMessage } from "./components/RenderMessage";
import { NumberDisplay } from "./components/NumberDisplay";
import { TextAreaComponent } from "./components/TextAreaComponent";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <DrinkStore />
      <CheckNumber />
      <Cities />
      <NumberDisplay number={10} />
      <RenderMessage message="Rendering test" />
      <TextAreaComponent onSubmit={() => "New Message"} />
      <Counter />
    </div>
  );
}

export default App;
