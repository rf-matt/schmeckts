import Accordion from 'react-bootstrap/Accordion';
import '../Acordion/Acordion.css';
import Img from '../Img/Img';
import image from '../../assets/img/9ab.jpg';
import Video from '../Video/Video';
import video from '../../assets/video/bear.mp4';
import Audio from '../Audio/Audio';
import audio from '../../assets/audio/wind8.wav';

function Acordion() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Imagen</Accordion.Header>
        <Accordion.Body>
          <Img image={image} />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Video</Accordion.Header>
        <Accordion.Body>
          <Video video={video}  />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Audio</Accordion.Header>
        <Accordion.Body>
          <Audio audio={audio} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acordion;