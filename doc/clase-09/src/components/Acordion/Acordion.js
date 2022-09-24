import Accordion from 'react-bootstrap/Accordion';
import '../Acordion/Acordion.css';
import Img from '../Img/Img';
import Video from '../Video/Video';
import Audio from '../Audio/Audio';

function Acordion() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Imagen</Accordion.Header>
        <Accordion.Body>
          <Img />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Video</Accordion.Header>
        <Accordion.Body>
          <Video />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Audio</Accordion.Header>
        <Accordion.Body>
          <Audio />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acordion;