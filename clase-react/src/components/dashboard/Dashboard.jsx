import { useLocation } from 'react-router';

function Dashboard() {
  const location = useLocation();
  const { nombreUsuario } = location.state; // Obtiene la variable de Login
  return (
    <>
      <h1>Bienvenido {nombreUsuario.campo}</h1>
    </>
  );
}
export default Dashboard;
