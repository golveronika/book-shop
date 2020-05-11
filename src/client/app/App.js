import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {

    axios.get("http://localhost:8080")
    .then(response => console.log("response", response.data))

  }, [])



  return (
    <div className="App">
        Hello Veronika!
        Helloooo
    </div>
  );
}

export default App;
