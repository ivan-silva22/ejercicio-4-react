import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

function ListaTareas(){
    return(
        <ListGroup className="bg-color">
            <ItemTarea tarea = 'planificar'></ItemTarea>
            <ItemTarea tarea = 'maquetar'></ItemTarea>
            <ItemTarea tarea = 'codear'></ItemTarea>
        </ListGroup>
    )
}

export default ListaTareas;