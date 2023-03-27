
// import Tabulator from './components/tabular';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Navbar from './components/navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import BookAppointment from './pages/bookAppointment'
// import { Button } from 'react-bootstrap'

// const columns = [
//   { title: "Name", field: "name", width: 150 },
//   { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
//   { title: "Favourite Color", field: "col" },
//   { title: "Date Of Birth", field: "dob", hozAlign: "center" },
//   { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
//   { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" }
// ];

// const data = [
//   { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
//   { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
//   { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
//   { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
//   { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
// ];

function App() {
  return (
    <Router>
      <div className="row">
        <Navbar></Navbar>
        <Routes>
          <Route path="/bookAppointments" element={<BookAppointment />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        {/* <Tabulator data={data} columns={columns} layout="fitData"><Button variant="success" className='m-2'>Success</Button></Tabulator> */}
      </div>
    </Router>
  );
}

export default App;
