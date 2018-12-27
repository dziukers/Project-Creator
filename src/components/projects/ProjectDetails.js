import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
  return (
      <div className='container section project-details'>
          <div className='card z-depth-0'>
              <div className='card-content'>
                  <span className='card-title'>Project Title - {id}</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, mauris vitae dapibus pretium, purus enim eleifend dui, ut finibus libero risus sed diam. Ut iaculis turpis turpis, quis maximus nibh sodales sit amet. Sed semper in elit id auctor. Nullam ut blandit lacus. Nulla id felis magna. Nam pretium, ex pellentesque sodales pulvinar, nisl erat aliquam nisl, ut iaculis purus diam ut lorem. Donec ex lacus, tempus et cursus sed, fermentum et lectus. Duis mi elit, commodo id leo eu, facilisis dictum nisi. Nam pulvinar et mi ut aliquet. Vestibulum laoreet ullamcorper elit in egestas. Sed in sem elementum, pellentesque diam facilisis, sollicitudin quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ipsum justo, finibus sed dolor vitae, varius condimentum nunc. Vestibulum id arcu vel dolor ultricies egestas. Cras quis fermentum nibh, sed vulputate enim. Nunc eu nibh sit amet nibh gravida faucibus eu at nulla.</p>
              </div>
              <div className='card-action grey lighten-4 grey-text'>
                  <div>Posted by Net Ninja</div>
                  <div>3rd September, 2am</div>
              </div>
          </div>
      </div>

  )
}

export default ProjectDetails;

