import PropTypes from "prop-types";

export const Resumen = (props) => {
  const { retrocedePaso } = props;
  return (
    <>
      <h2>Resumen</h2>
      <button className="btn btn-info" onClick={retrocedePaso}>
        Anterior
      </button>
    </>
  );
};

Resumen.propTypes = {
  retrocedePaso: PropTypes.func.isRequired,
};
