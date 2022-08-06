import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimp";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm className="mailchimp"/>
          <Col size={12} sm={6}>
            <div className="logo-footer">Rinoindra.</div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rino-indra-wicaksono-43582b235/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADqtXqkBA5gluUzb8WbdxDkKj_n3Qy0kJ_0" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/rino.wicaksono.944" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>&copy; 2022, Rino Indra Creative</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
