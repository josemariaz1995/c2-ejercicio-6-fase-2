import PropTypes from "prop-types";
import { useFormulario } from "../hooks/useFormulario";

export const Paso3 = (props) => {
  const { datosAcceso, avanzaPaso, retrocedePaso, setDatosAcceso } = props;
  const {
    datos: { username, password, recordarPassword },
    setDato,
  } = useFormulario(datosAcceso);
  return (
    <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
      <form
        noValidate
        className="row p-3 justify-content-center"
        onSubmit={() => {
          avanzaPaso();
          setDatosAcceso((datos) => {
            return {
              ...datos,
              password: password,
              recordarPassword: recordarPassword,
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
        <div className="form-check col-sm-12 ml-5">
          <input
            type="checkbox"
            id="recordarPassword"
            className="form-check-input"
            checked={recordarPassword}
            onChange={setDato}
          />
          <label htmlFor="recordarPassword" className="form-check-label">
            Recordar contraseña
          </label>
        </div>
        <button
          className="btn btn-primary mt-3 col-sm-4 mr-3"
          onClick={retrocedePaso}
        >
          Anterior
        </button>
        <button className="btn btn-primary mt-3 col-sm-4" type="submit">
          Acceder
        </button>
      </form>
    </section>
  );
};

Paso3.propTypes = {
  avanzaPaso: PropTypes.func.isRequired,
  retrocedePaso: PropTypes.func.isRequired,
  datosAcceso: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    recordarPassword: PropTypes.bool.isRequired,
  }).isRequired,
};
