import Home from "./Components/Other/Home";
import Gadget from "./Components/Other/Gadget";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Page from "./Components/Page/Page";
import GadgetDetails from "./Components/GadgetDetails/GadgetDetails";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import Liked from "./Components/Liked/Liked";

function App() {
    return (
        <div className="app">
            <div className="uphome">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/gadget" element={<Gadget />} />
                        <Route exact path="/create" element={<Form />} />
                        <Route exact path="/page" element={<Page />} />
                        <Route path="/liked" element={<Liked />} />
                        <Route path="/page/:id" element={<GadgetDetails />} />
                    </Routes>
                    <Routes>
                        <Route exact path="/signin" element={<SignIn />} />
                        <Route exact path="/signup" element={<SignUp />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );
}

export default App;
