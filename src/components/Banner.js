import { Container, Col, Row } from "react-bootstrap"
import { useState, useEffect } from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import pasFoto from '../assets/img/pasfoto2-01.png';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "FrontEnd Developer", "Graphic Designer", "UX Designer" ];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                      <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                          <span className="tagline">Welcome To My Website</span>
                          <h1>{`Hello, I'm Rino Indra Wicaksono`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "FrontEnd Developer", "Graphic Designer", "UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                          <p>An Undergraduate Computer System student who wants to gain experience and really interested in Web Developer, especially Front End Developer.I am a person who likes to look for opportunities and can work in a team.</p>
                          <button onClick={() => console.log('connect')}>Let???s Connect <ArrowRightCircle size={25} /></button>
                        </div>}
                      </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                      <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                          <img src={pasFoto} alt="PasFoto"/>
                        </div>}
                      </TrackVisibility>
                    </Col>
                </Row>
              </Container>
        </section>
  )
}