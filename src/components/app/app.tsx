import './app.css';
import { ROUTES, RenderRoutes } from "../../routes";

function App() {
  return (
      <div className="App">
        <RenderRoutes routes={ROUTES} />
      </div>
  );
}

export default App;
