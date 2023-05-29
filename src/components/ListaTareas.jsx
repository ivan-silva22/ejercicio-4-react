import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import ItemTarea from "./ItemTarea";

function ListaTareas({ listadoTareas }) {
  return (
    <ListGroup className="bg-color">
      {listadoTareas.map((tarea, indiceTarea) => {
        <ItemTarea tarea={tarea} key={indiceTarea}></ItemTarea>;
      })}
      <ItemTarea tarea="planificar"></ItemTarea>;
    </ListGroup>
  );
}

ListaTareas.propTypes = {
  listadoTareas: PropTypes.string
};

export default ListaTareas;
