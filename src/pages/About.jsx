import React from 'react';


function About() {
  return (
    <div>
      <div style={{ margin: "100px" }}>
          <div className="m-4" size="md-12 mx-5">
            <h1 style={{ color: "rgb(53, 55, 77)" }}>Hi there!</h1>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
              <img style={{ height: "300px", width: "300px", border: "3px solid fuchsia"}} src="./src/assets/images/hazal.jpg" alt="hazal-img" />
            </div>
            <div className="col-sm-12 col-md-9 col-lg-9">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque et dui id justo finibus sollicitudin
              at et metus. Ut feugiat tellus nec metus commodo, sed suscipit
              nisi gravida. Duis eget vestibulum quam, ut porttitor sem. Donec
              sagittis mi sollicitudin turpis semper, et interdum risus
              lobortis. Vestibulum suscipit nunc non egestas tristique. Proin
              hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
              quam non, tristique tempor erat. Nullam non sem facilisis, tempus
              tortor sit amet, volutpat nisl. Ut et turpis non nunc maximus
              mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet
              cursus. Praesent suscipit orci neque, vestibulum tincidunt augue
              tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
