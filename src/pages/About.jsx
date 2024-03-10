import React from 'react';
import Pdf from '../assets/documents/hazal-resume.pdf'
import Img from '../assets/images/cv.jpg'


function About() {
  return (
    <div>
      <div style={{ padding: "50px" }}>
          <div className="p-md-3" size="md-12">
            <h1 style={{ color: "rgb(53, 55, 77)" }}>Hi there!</h1>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <img style={{ height: "350px", width: "320px", border: "3px solid rgb(255, 0, 179)"}} src={Img} alt="hazal-img" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-9 text-md-end p-lg-5">
            <p>My journey has been quite an adventure—beginning with political science,
               progressing into intelligence and security for my master's,
                and unexpectedly leading me to manage a dog sitting business alongside an online pet accessories store.
                But the plot thickens: I've recently embarked on a new path into the realm of front-end development through a bootcamp.
                Learning HTML, CSS, Bootstrap, JavaScript, Node.js, testing, and React has been a thrilling rollercoaster ride. 
                Weekends often turn into coding marathons. There's an undeniable rush in overcoming coding challenges that keeps me fully engaged. 
            </p>
            <br/>
            <p>
            If you're interested in a detailed version of my career and educational background, you can find my CV  <a href = {Pdf} target = "_blank" class="text-reset">here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
