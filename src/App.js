import Parent from "./components/parent"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App (){
  return(
    <>
  
 <Router>
  <Routes>
    <Route
    exact path='/'
    element={<Parent/>}>

    </Route>
  </Routes>
 </Router>
        
    
  
    </>

  )
}

export default App