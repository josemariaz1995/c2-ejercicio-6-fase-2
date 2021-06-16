import PropTypes from "prop-types";
import { useFormulario } from "../hooks/useFormulario";

export const Paso1 = (props) => {
  const { datosPersonales, avanzaPaso, setDatosPersonales } = props;
  const {
    datos: { nombre, apellidos, fechaNacimiento, email },
    setDato,
  } = useFormulario(datosPersonales);
  const enviaPaso = (e) => {
    e.preventDefault();
    avanzaPaso();
  };
  return (
    <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
      <form
        noValidate
        className="row p-3 justify-content-center"
        onSubmit={(e) => {
          enviaPaso(e);
          setDatosPersonales((datos) => {
            return {
              ...datos,
              nombre: nombre,
              apellidos: apellidos,
              fechaNacimiento: fechaNacimiento,
              email: email,
            };
          });
        }}
      >
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="nombre">
              Nombre
            </label>
          </div>
          <input
            type="text"
            value={nombre}
            onChange={setDato}
            className="form-control"
            id="nombre"
          />
        </div>
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="apellidos">
              Apellidos
            </label>
          </div>
          <input
            type="text"
            value={apellidos}
            onChange={setDato}
            id="apellidos"
            className="form-control"
          />
        </div>
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="fechaNacimiento">
              Edad
            </label>
          </div>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={setDato}
            id="fechaNacimiento"
            className="form-control"
          />
        </div>
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="email">
              Email
            </label>
          </div>
          <input
            type="email"
            value={email}
            onChange={setDato}
            id="email"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3 col-sm-8">
          Siguiente
        </button>
      </form>
    </section>
  );
};

Paso1.propTypes = {
  datosPersonales: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    fechaNacimiento: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  avanzaPaso: PropTypes.func.isRequired,
};
