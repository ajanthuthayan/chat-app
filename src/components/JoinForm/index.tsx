import { useState } from "react";

export default function JoinForm(): JSX.Element {
	const [username, setUsername] = useState("");

	return (
		<form
			className="flex flex-col mt-5"
			onSubmit={(e) => {
				e.preventDefault();
				console.log(username);
			}}
		>
			<label className="text-left ">Username</label>
			<input
				className="p-2 rounded-sm"
				type="text"
				required
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<button className="mt-2">Join</button>
		</form>
	);
}
