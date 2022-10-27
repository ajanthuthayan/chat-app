import { useState } from "react";
import "./App.css";
import JoinForm from "./components/JoinForm";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>Chat App</h1>
			<div className="card">
				<JoinForm />
			</div>
		</div>
	);
}

export default App;
