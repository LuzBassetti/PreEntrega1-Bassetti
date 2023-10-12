import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import './App.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Bienvendidos a Pasteleria y Decoracion'/>
      <Footer />
    </div>
  );
}

export default App;

