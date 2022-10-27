import { useState } from "react";
import "./App.css";
import StartButton from "./components/StartButton";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>Chat App</h1>
			<div className="card">
				<StartButton />
			</div>
		</div>
	);
}

export default App;
