import PropTypes from "prop-types";

export const Resumen = (props) => {
  const {
    retrocedePaso,
    datosPersonales: { nombre, apellidos, fechaNacimiento, email },
    datosRegistro: { username, password },
    datosAcceso: { recordarPassword },
  } = props;
  return (
    <>
      <section className="container formulario-seccion  p-3 mb-5 bg-white rounded d-flex justify-content-center">
        <ul className="list-group w-75 shadow-sm ">
          <li className="list-group-item">Nombre: {nombre}</li>
          <li className="list-group-item">Apellidos: {apellidos}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Apodo: {username}</li>
          <li className="list-group-item">
            fecha de nacimiento: {fechaNacimiento}
          </li>
          <li className="list-group-item">Contraseña: {password}</li>
          <li className="list-group-item">
            Recordar contraseña: {recordarPassword ? "si" : "no"}
          </li>
        </ul>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            retrocedePaso();
          }}
        >
          <p className="vertical">Deslogear</p>
        </button>
      </section>
    </>
  );
};

Resumen.propTypes = {
  retrocedePaso: PropTypes.func.isRequired,
};
