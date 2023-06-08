import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateUser from "./components/CreateUser"
import ShowUsers from "./components/ShowUsers"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowUsers />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
