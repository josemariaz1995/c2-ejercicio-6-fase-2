import { useState } from "react";
import { Paso1 } from "./componentes/Paso1";
import { Paso2 } from "./componentes/Paso2";
import { Paso3 } from "./componentes/Paso3";
import { Resumen } from "./componentes/Resumen";

function App() {
  const [paso, setPaso] = useState(1);
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    email: "",
  });
  const [datosRegistro, setDatosRegistro] = useState({
    username: "",
    password: "",
    repitePassword: "",
  });
  const [datosAcceso, setDatosAcceso] = useState({
    username: "",
    password: "",
    recordarPassword: true,
  });
  const avanzaPaso = () => {
    if (paso === 4) {
      return;
    }
    setPaso(paso + 1);
  };
  const retrocedePaso = () => {
    if (paso === 1) {
      return;
    }
    setPaso(paso - 1);
  };
  return (
    <>
      <header className="d-flex align-items-center justify-content-center p-5 bg-primary text-white border-bottom">
        <h1>Crea una cuenta/logeate</h1>
      </header>
      <main className="p-5 vw-100 d-flex justify-content-center align-items-center vh-100">
        {paso === 1 && (
          <Paso1
            avanzaPaso={avanzaPaso}
            setDatosPersonales={setDatosPersonales}
            datosPersonales={datosPersonales}
          />
        )}
        {paso === 2 && (
          <Paso2
            avanzaPaso={avanzaPaso}
            setDatosRegistro={setDatosRegistro}
            datosRegistro={datosRegistro}
            retrocedePaso={retrocedePaso}
          />
        )}
        {paso === 3 && (
          <Paso3
            datosAcceso={datosAcceso}
            avanzaPaso={avanzaPaso}
            setDatosAcceso={setDatosAcceso}
            retrocedePaso={retrocedePaso}
          />
        )}
        {paso === 4 && (
          <Resumen
            retrocedePaso={retrocedePaso}
            datosPersonales={datosPersonales}
            datosAcceso={datosAcceso}
            datosRegistro={datosRegistro}
          />
        )}
      </main>
    </>
  );
}

export default App;
