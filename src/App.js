import './App.scss';
import { useState } from 'react';
import {HeroSection} from '../src/components/HeroSection/HeroSection';
import {SearchForm} from '../src/components/SearchForm/SearchForm';
import { Loading } from './components/Loading/Loading';
import axios from 'axios';

function App() {
  
  const [response, setResponse] = useState('')

  const searchChannel = (channel) => {
    axios
      .get(`http://localhost:4444/channel/${channel}`)
      .then((res) => {
        setResponse(res.data.channel)
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="app">
      <HeroSection/>
      <SearchForm handler = {searchChannel} />
      {response ?
        <p style = {{color:"white", textAlign:"center"}}> {response} </p>
        : <Loading/>
        }
    </div>
  );
}

export default App;
