import Tooltip from "./Tooltip";
function App() {
  let position = "right";
  let text = "this is a tooltip";
  return (
    <div className="App">
      <Tooltip text={text} position={position}>
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
}

export default App;
