import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import work1 from "../assets/img/work1.PNG"
import work2 from "../assets/img/work2.PNG"
import work3 from "../assets/img/work3.PNG"
import work4 from "../assets/img/work4.PNG"
import work5 from "../assets/img/work5.png"
import work6 from "../assets/img/work6.jpg"
import work7 from "../assets/img/work7.png"
import work8 from "../assets/img/Details.png"
import kuching from "../assets/img/kuching-01.png"
import work9 from "../assets/img/work9.png"
import work10 from "../assets/img/work10.png"
import work11 from "../assets/img/cobacoba2-01.png"
import keranjang from "../assets/img/Keranjang.png"
import konfirmasi from "../assets/img/Konfirmasi.png"
import search from "../assets/img/Search.png"
import transaction from "../assets/img/Transaction.png"
import kustomisasi from "../assets/img/Kustomisasi.png"
import kustompes from "../assets/img/KustomisasiPesanan.png"
import popup from "../assets/img/PopUp.png"
import web1 from "../assets/img/web1.PNG"
import web2 from "../assets/img/web2.PNG"
import web3 from "../assets/img/web3.PNG"
import web4 from "../assets/img/web4.PNG"
import web5 from "../assets/img/web5.PNG"
import gd1 from "../assets/img/gd1.png"
import gd2 from "../assets/img/gd2.png"
import gd3 from "../assets/img/gd3.png"
import colorSharp2 from "../assets/img/12345.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "Alt Web",
            description: "FrontEnd Developer",
            imgUrl: web2,
        },
        {
            title: "NextJs Profile Web",
            description: "FrontEnd Developer",
            imgUrl: web1,
        },
        {
            title: "Bookshelf App",
            description: "FrontEnd Developer",
            imgUrl: web3,
        },
        {
            title: "Calculator Web",
            description: "FrontEnd Developer",
            imgUrl: web4,
        },
        {
            title: "Alt Web",
            description: "FrontEnd Developer",
            imgUrl: work1,
        },
        {
            title: "Login Web",
            description: "FrontEnd Developer",
            imgUrl: work2,
        },
        {
            title: "Alt Web",
            description: "FrontEnd Developer",
            imgUrl: work3,
        },
        {
            title: "Vclass Web",
            description: "FrontEnd Developer",
            imgUrl: work4,
        },
        {
            title: "Alt Web",
            description: "FrontEnd Developer",
            imgUrl: web5,
        },
    ];
      const secondtab = [
        {
            title: "Logo Designer",
            description: "Graphic Designer",
            imgUrl: work5,
        },
        {
            title: "Creative Poster",
            description: "Graphic Designer",
            imgUrl: work6,
        },
        {
            title: "Logo Designer",
            description: "Graphic Designer",
            imgUrl: work9,
        },
        {
            title: "Logo Designer",
            description: "Graphic Designer",
            imgUrl: work10,
        },
        {
            title: "Poster",
            description: "Graphic Designer",
            imgUrl: work11,
        },
        {
            title: "Logo Designer",
            description: "Graphic Designer",
            imgUrl: gd1,
        },
        {
            title: "Logo Designer",
            description: "Graphic Designer",
            imgUrl: gd2,
        },
        {
            title: "Logo Designer",
            description: "Graphic Designer",
            imgUrl: gd3,
        },
        {
            title: "Extras",
            description: "Graphic Designer",
            imgUrl: kuching
        },
    ];
      const thirdtab = [
        {
            title: "Home",
            description: "UI/UX Designer",
            imgUrl: work7,
        },
        {
            title: "Details",
            description: "UI/UX Designer",
            imgUrl: work8,
        },
        {
            title: "Keranjang",
            description: "UI/UX Designer",
            imgUrl: keranjang,
        },
        {
            title: "Konfirmasi",
            description: "UI/UX Designer",
            imgUrl: konfirmasi,
        },
        {
            title: "Search",
            description: "UI/UX Designer",
            imgUrl: search,
        },
        {
            title: "Transaction",
            description: "UI/UX Designer",
            imgUrl: transaction,
        },
        {
            title: "Kustomisasi",
            description: "UI/UX Designer",
            imgUrl: kustomisasi,
        },
        {
            title: "Kustomisasi Pesanan",
            description: "UI/UX Designer",
            imgUrl: kustompes,
        },
        {
            title: "Pop Up",
            description: "UI/UX Designer",
            imgUrl: popup,
        },
      ]
      
      
    
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <p>My Work in FrontEnd Web Developer, Graphic Designer, and UI/UX Designer</p>
                                <div className="linkproject">
                                    <p><a href="https://github.com/rinoindraw?tab=repositories" target="_blank" className="link">Github</a></p>
                                    <p><a href="https://www.figma.com/file/dqGISnKhXQsqCzVHaLRVPJ/UX-Designer?node-id=100%3A587" target="_blank" className="link">Figma</a></p>
                                </div>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">FrontEnd Developer</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Graphic Designer</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">UI/UX Designer</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                            <Row className="firsttab">
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                    )
                                                })
                                            }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <Row>
                                            {
                                                thirdtab.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                    )
                                                })
                                            }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Row>
                                            {
                                                secondtab.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                    )
                                                })
                                            }
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp2} alt="Image" />
        </section>
    )
}