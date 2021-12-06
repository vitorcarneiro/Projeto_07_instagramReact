import ReactDOM from 'react-dom';

import Header from "./components/Header";
import MainContent from "./components/Main";
import Aside from "./components/Aside";

function App() {
	const userData = {name: "cebolinha", description: "O único que usa sapato"};

	return (
		<div id="main">
			<Header />
			<MainContent />
			<Aside userData={userData} />
		</div>
	);
}

const instagram = App();

ReactDOM.render(instagram, document.querySelector(".root"));