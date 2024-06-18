import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageTitle from './components/PageTitle';
import Loader from './common/Loader';

//Pages
import Home from './pages/Home';
import Estilos from './pages/Estilos';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return loading ? (
    <Loader />
  ) : (
      <Routes>
        <Route 
          path="/login" 
          element={
            <>
            <PageTitle title="Inicio de Sesion | World of Boxing" />
            
            </>
          } 
        />
        <Route
          index
          element={
            <>
              <PageTitle title="Inicio | World of Boxing" />
              <Home />
            </>
          }
        />
        <Route
          path="/estilos"
          element={
            <>
              <PageTitle title="Estilos de Boxeo | World of Boxing" />
              <Estilos />
            </>
          }
        />
      </Routes>
  );
}

export default App;

