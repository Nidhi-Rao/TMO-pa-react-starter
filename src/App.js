import './App.css';
import Recipe from './Recipe';

function App() {
  return (
    <div className="container">
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}
      <Recipe />
    </div>
  );
}

export default App;
