import Accordion from 'react-bootstrap/Accordion';
import '../Acordion/Acordion.css';
import Img from '../Img/Img';

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
              Usando el componente de Image de clases anteriores
            </li>
            <li>
              Construir una lista de estos componente usando map y filter.
            </li>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acordion;