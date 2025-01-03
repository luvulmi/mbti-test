import { useEffect, useState } from 'react'
import axios from 'axios';
import './assets/css/style.css';
import Router from './routes/routes';

function App() {
  // const [data, setData] = useState('')

  // useEffect(() => {
  //     axios.get('/api')
  //     .then(res => setData(res.data))
  //     .catch(err => console.log(err))
  // }, []);

  return <Router/>
}

export default App
