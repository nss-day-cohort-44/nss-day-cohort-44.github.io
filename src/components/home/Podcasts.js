import React from 'react';
// import './Podcasts.css'
// Author: Joe Shep
// Purpose: To create an embedded podcasts section to render on our homepage


const Podcasts = () => (
  <>
    <section className="about-us" color='white'>
      <h2 className="podcasts">Get to know us and our NSS stories</h2>
      <iframe width="100%" height="500" scrolling="no" frameborder="no" title="podcasts" allow="autoplay" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/nashville-software-school/sets/cohort-44-demo-day&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    </section>
  </>
)

export default Podcasts;
