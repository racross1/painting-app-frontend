import React from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Gallery extends React.Component {


 
//create topics key so that each image can have a caption with the topic
//do styling with the topic in italics
    
    render(){
        console.log(this.props.allPaintings.length)
        return(
            <Container fluid>
                <Row>
                    {this.props.allPaintings.map(p => {
                        return <Col lg={3} md={2} className='hover-zoomin'>
                                <a href="#" title=""></a>
                                <Image src={`http://localhost:3000/${p.image}`} thumbnail className="thumbnail"/>
                                {/* <p>{`${p.topic_id}`}</p> */}
                            </Col>
                        })}
                </Row>
            </Container>
        )
    }
}
