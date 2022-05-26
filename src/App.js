import './App.scss';
import { useState } from 'react';
import {HeroSection} from '../src/components/HeroSection/HeroSection';
import {SearchForm} from '../src/components/SearchForm/SearchForm';
import { Loading } from './components/Loading/Loading';
import { GenerateUser } from './components/GenerateUser/GenerateUser';
import axios from 'axios';

export default function App() {
  
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false)



  const searchChannel = (channel) => {
    
    setLoading(true)
    
    axios
      .get(`http://localhost:4444/channel/${channel}`)
      .then((res) => {
        setUser(res.data)
        setLoading(false)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const renderLoading = () => {
    return (
      loading ? <Loading /> : null 
    )
  }

  return (
    <div className="app">
      <HeroSection/>
      <SearchForm handler = {searchChannel} />
      {!user ? renderLoading() : <GenerateUser channel = {user} />}
    </div>
  );
}


