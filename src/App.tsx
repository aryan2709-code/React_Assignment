import { BrowserRouter , Routes , Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { SignIn } from "./pages/SignInPage"
import { SignUp } from "./pages/SignUpPage"
import { Profile } from "./pages/ProfilePage"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path = "/profile" element = {<Profile/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App