import { Route, Routes } from "react-router"
import ObjectsDashboard from "./components/ObjectsDashboard"
import ObjectAdd from "./components/ObjectAdd"

function App(){
  return(

    <Routes>
      <Route path="/" element={<ObjectsDashboard/>}/>
      <Route path="/add" element={<ObjectAdd/>}/>
    </Routes>
  )
}
export default App