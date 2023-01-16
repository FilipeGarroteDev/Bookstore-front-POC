import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./common/GlobalStyle";
import Reset from "./common/Reset";
import PrivatePage from "./components/PrivatePage/PrivatePage";
import Checkout from "./pages/Checkout";
import MainPage from "./pages/Mainpage";
import SignIn from "./pages/Sign-in";
import SignUp from "./pages/Sign-up";

function App() {
	return (
		<>
			<Reset />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<PrivatePage>
								<MainPage />
							</PrivatePage>
						}
					/>
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route
						path="/checkout"
						element={
							<PrivatePage>
								<Checkout />
							</PrivatePage>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
