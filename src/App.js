import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Film from "./pages/Film"
import NotFound from "./pages/NotFound"
import BackHome from "./pages/BackHome"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <BackHome />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/film/:id" element={<Film />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App
