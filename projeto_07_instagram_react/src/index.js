import ReactDOM from 'react-dom';

import Header from "./components/Header";
import MainContent from "./components/Main";
import Aside from "./components/Aside";

function App() {
	return (
		<div>
			<Header />
			<MainContent />
			<Aside />
		</div>
	);
}

const instagram = App();

ReactDOM.render(instagram, document.querySelector(".root"));