import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrarUsuario from './components/RegistrarUsuario';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Página de Inicio</h1>} />
          <Route path="/registrar-usuario" element={<RegistrarUsuario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
