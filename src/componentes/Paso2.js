import PropTypes from "prop-types";
import { useFormulario } from "../hooks/useFormulario";

export const Paso2 = (props) => {
  const { datosRegistro, avanzaPaso, retrocedePaso, setDatosRegistro } = props;
  const {
    datos: { username, password, repitePassword },
    setDato,
  } = useFormulario(datosRegistro);
  return (
    <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
      <form
        noValidate
        className="row p-3 justify-content-center"
        onSubmit={() => {
          avanzaPaso();
          setDatosRegistro((datos) => {
            return {
              ...datos,
              password: password,
              repitePassword: repitePassword,
              username: username,
            };
          });
        }}
      >
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="username">
              Username
            </label>
          </div>
          <input
            type="text"
            value={username}
            onChange={setDato}
            className="form-control"
            id="username"
          />
        </div>
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="password">
              Contraseña
            </label>
          </div>
          <input
            type="password"
            value={password}
            onChange={setDato}
            id="password"
            className="form-control"
          />
        </div>
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="repitePassword">
              Repetir
            </label>
          </div>
          <input
            type="password"
            value={repitePassword}
            onChange={setDato}
            id="repitePassword"
            className="form-control"
          />
        </div>
        <button
          className="btn btn-primary mt-3 mr-3 col-sm-4"
          onClick={retrocedePaso}
        >
          Anterior
        </button>
        <button type="submit" className="btn btn-primary mt-3 col-sm-4">
          Siguiente
        </button>
      </form>
    </section>
  );
};

Paso2.propTypes = {
  avanzaPaso: PropTypes.func.isRequired,
  retrocedePaso: PropTypes.func.isRequired,
  datosRegistro: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    repitePassword: PropTypes.string.isRequired,
  }).isRequired,
};
