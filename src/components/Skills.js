import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skill1 from "../assets/img/2.jpg";
import skill2 from "../assets/img/3.jpg";
import skill3 from "../assets/img/4.jpg";
import skill4 from "../assets/img/sk5.jpg"
import colorSharp from "../assets/img/12345.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>What Can I Do</h2>
                            <br></br>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <div className='skill-item'>
                                        <div className='skill-inner'>
                                            <img src={skill1} alt="Image" className='skill-img'/>
                                            <div className='overlay'>
                                                <h5>FrontEnd Developer</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='skill-item'>
                                        <div className='skill-inner'>
                                            <img src={skill2} alt="Image" className='skill-img'/>
                                            <div className='overlay'>
                                                <h5>Graphic Designer</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='skill-item'>
                                        <div className='skill-inner'>
                                            <img src={skill3} alt="Image" className='skill-img'/>
                                            <div className='overlay'>
                                                <h5>UX Designer</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='skill-item'>
                                        <div className='skill-inner'>
                                            <img src={skill4} alt="Image" className='skill-img'/>
                                            <div className='overlay'>
                                                <h5>Photography</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}