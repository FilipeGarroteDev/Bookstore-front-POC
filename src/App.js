import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import MainPage from "./pages/Mainpage";
import SignIn from "./pages/Sign-in";
import SignUp from "./pages/Sign-up";

function App() {
	return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
