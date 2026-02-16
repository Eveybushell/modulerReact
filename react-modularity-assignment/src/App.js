import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ContentA } from './components/ContentA';
import { ContentB } from './components/ContentB';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <ContentA />
      <ContentB />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
