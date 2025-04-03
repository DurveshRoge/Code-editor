import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Toast from "./components/toast/Toast"
import EditorPage from "./pages/EditorPage"
import HomePage from "./pages/HomePage"
import LandingPage from "./pages/LandingPage"

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/room" element={<HomePage />} />
                    <Route path="/" element={<LandingPage />} />

                    <Route path="/editor/:roomId" element={<EditorPage />} />
                </Routes>
            </Router>
            <Toast /> {/* Toast component from react-hot-toast */}
        </>
    )
}

export default App
