import './App.css';
import Main from './components/main';
import Navigation from './layouts/navigation';
import Footer from './layouts/footer';

function App() {
  return (
    <div className='App'>
      
    <Navigation />

      <div className='container m-flex py-2'>        
          <Main />
      </div>

    <Footer />

  </div>
  );
}

export default App;