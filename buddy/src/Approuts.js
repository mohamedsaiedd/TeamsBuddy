import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Quiz from "./components/quiz";
import Layout from "./components/layout";

function AppRouts() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Hero />} />
                    <Route path="form" element={<Quiz />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouts;
