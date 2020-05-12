import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Lside from './components/Lside'

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {

    axios.get("http://localhost:8080")
    .then(response => console.log("response", response.data))

  }, [])



  return (
    <>
    <Header />
    <main className="main-container">
        <Lside />
        <section>Главная инфа</section>
    </main>
    </>
  );
}

export default App;
