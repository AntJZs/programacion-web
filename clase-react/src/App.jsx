import { useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router';
function App() {
  const [count, setCount] = useState(0);

  // Importación del componente
  return (
    // <>
    //   {/* Código anterior, valor se llama en Login.jsx */}
    //   <h1> App.js component </h1>
    //   <Login valor={'Hola'} />
    // </>

    <BrowserRouter>
      {/* Contexto de rutas */}
      <Routes>
        {/* Ruta individual */}
        <Route path='/' element={<Login text={'hi'} />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
