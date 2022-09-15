import { useState, useEffect } from 'react'
import service from "./Data/service";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cars, setCar] = useState([])

   useEffect(() => {
     service.fetchCars().then((response: any) => {
       setCar(response.data);
     });
   }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App
