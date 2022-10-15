import Accordion from 'react-bootstrap/Accordion';
import '../Acordion/Acordion.css';
import Img from '../components/Img/Img';

function Acordion() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Componente imagen</Accordion.Header>
        <Accordion.Body>
          <Img />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Descripción del ejercicio</Accordion.Header>
        <Accordion.Body>
          <div>
            <li>
              Usar el array del ejercicio anterior (con map) ahora agregar dos buttons
            </li>
            <li>
              Estos botones usaran hooks para agregar y quitar elementos del array.            </li>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acordion;