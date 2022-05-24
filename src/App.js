import './App.scss';
import {HeroSection} from '../src/components/HeroSection/HeroSection';
import {SearchForm} from '../src/components/SearchForm/SearchForm';

function App() {
  return (
    <div className="app">
      <HeroSection/>
      <SearchForm/>
    </div>
  );
}

export default App;
