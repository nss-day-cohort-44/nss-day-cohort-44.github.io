import { Route, Routes } from "react-router-dom"
import Home from './home/Home'

const ApplicationViews = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default ApplicationViews