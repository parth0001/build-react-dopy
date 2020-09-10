import React from 'react';

import Card from '../components/Card';

import devgrub from '../assets/images/insta.png';
import youtube from '../assets/images/logo.png';
import evverest from '../assets/images/logofb.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'DoPy Instagram',
                    subTitle: 'Creative Photography',
                    imgSrc: devgrub,
                    link: 'https://www.instagram.com/dopybitsgoa/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'DoPy YouTube',
                    subTitle: 'Video Projects',
                    imgSrc: youtube,
                    link: 'https://www.youtube.com/user/dopybitsgoa',
                    selected: false
                },
                {
                    id: 2,
                    title: 'DoPy Facebook',
                    subTitle: 'Campus-wide Releases',
                    imgSrc: evverest,
                    link: 'https://www.facebook.com/DoPy.BITSGoa/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;