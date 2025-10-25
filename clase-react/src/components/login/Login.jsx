import './Login.css';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import Dashboard from '../dashboard/Dashboard';
import { useState } from 'react';

function Login(props) {
  const navigate = useNavigate();
  const validateUser = () => {
    // OP Ternario
    campo == 'Antonio'
      ? navigate('/dashboard', {
          state: {
            nombreUsuario: { campo },
          },
        })
      : alert('No tienes acceso');
    // if (campo != 'Juan') {
    //   alert('No tienes acceso');
    // } else {
    //   navigate('/dashboard');
    // }
  };

  const [campo, setCampo] = useState('');
  return (
    <>
      <div className='contenedor-login'>
        <h1>Banco</h1>
        <p> Bienvenido al banco</p>
        <p>{props.valor}</p>
        <input
          type='text'
          value={campo}
          onChange={(evt) => setCampo(evt.target.value)}
          className='ilogin'
          placeholder='Usuario'
        />
        <input type='text' className='ilogin' placeholder='Contraseña' />
        <Link to='/dashboard'>Al Dash</Link>
        <button type='button' id='buttonStyle' onClick={validateUser}>
          Iniciar Sesión
        </button>
      </div>
    </>
  );
}

export default Login;
