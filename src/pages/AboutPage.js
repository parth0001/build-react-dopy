import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, we are The Department of Photography, BITS Goa. We are a team of 150+ members responsible for covering all the events happening on campus..</p>

            <p>We also explore creative photography and videography which can be found on our Instagram page.</p>

            <p>We make great aftermovies of fests happening on our campus that can be found on our YouTube page</p>

            </Content>
        </div>
    );

}

export default AboutPage;