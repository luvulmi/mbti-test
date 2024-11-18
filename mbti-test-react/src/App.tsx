import { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
      axios.get('/api')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <p className="read-the-docs">
        받아온 값 : {data}
      </p>
    </>
  )
}

export default App
