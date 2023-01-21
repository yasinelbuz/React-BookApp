import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
	//merhaba
	return <>{useRoutes(routes)}</>;
}

export default App;
