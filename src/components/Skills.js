import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {/* Assuming here you want to keep the skill names without images */}
                <div className="item">
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <h5>UX/UI Design</h5> {/* Added a new skill for suggestion */}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="background-image-left">
          {/* You can also add background styles or elements here */}
        </div>
      </div>
    </section>
  );
}
