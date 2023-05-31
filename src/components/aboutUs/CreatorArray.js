import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import { useParams } from "react-router-dom";

const CreatorArray = () => {
    const {id} = useParams()
    const CreatorArray  = [
             {
                name: 'Acacia de Meo',
                data: {
                    role: 'Partnerships',
                    email: 'meo@melioraimpact.no',
                    mobile: 47129393920,
                    img: 'acacia.png'
                },
            },
            {
                name: 'Henriette Flink',
                data: {
                    role: 'Non-Profit',
                    email: 'friling@melioraimpact.no',
                    mobile: 47129393920,
                    img: 'henriette.png'
                },
            },
            {
                name: 'Maria Lehman',
                data: {
                    role: 'Product Designer',
                    email: 'lehman@melioraimpact.no',
                    mobile: 47129393920,
                    img: 'maria.png'
                },
            },
        ];

        let object = CreatorArray.find(o => o.name === id);
        if (object === null) {
            object = CreatorArray[0];
            return (
                <h1>404 Page Not Found</h1>
            )
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col style={ImgContainer}>
                                <Card style={{borderRadius:10}} className='p-5 text-center'>
                                    <Col>
                                        <img src={object.data.img} style={imgStyle} alt=''/>
                                    </Col>
                                </Card>
                            </Col>
                        </Row>
        
                    <Col className='mb-5'>
                        <div className='text-center'>
                            <Card.Body>
                                <Card.Title style={NameTitle}>{object.data.name}</Card.Title>
                                <Card.Text style={RoleTitle}>{object.data.role}</Card.Text>                                <ShortLine/>
                                <Card.Text className='mt-3'><strong>email:</strong> {object.data.email}</Card.Text>
                                <Card.Text><strong>mobile:</strong> {object.data.mobile}</Card.Text>
                            </Card.Body>
                            <Button className='btn-block' style={BtnStyle}>Contact me</Button>
                        </div>
                    </Col>
                    </Col>
                </Row>
            </Container>
        );
}

export default CreatorArray;
