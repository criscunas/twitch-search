import './App.scss';
import { useState } from 'react';
import {HeroSection} from '../src/components/HeroSection/HeroSection';
import {SearchForm} from '../src/components/SearchForm/SearchForm';
import { Loading } from './components/Loading/Loading';
import { GenerateUser } from './components/GenerateUser/GenerateUser';
import axios from 'axios';

export default function App() {
  
  const [user, setUser] = useState('')

  const searchChannel = (channel) => {
    axios
      .get(`http://localhost:4444/channel/${channel}`)
      .then((res) => {
        setUser(res.data.channel)
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="app">
      <HeroSection/>
      <SearchForm handler = {searchChannel} />
      {user ?
        <GenerateUser user = {user} />
        : <Loading/>
        }
    </div>
  );
}


