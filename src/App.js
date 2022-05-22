import "./App.css";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";
import { Footer } from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
			<ToastContainer />
		</div>
	);
}

export default App;
