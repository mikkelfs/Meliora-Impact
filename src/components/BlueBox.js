import PropTypes from 'prop-types'
import {Container, Row, Card} from 'react-bootstrap'

const BlueBox = ({text}) => {
    return (
        <Container>
            <Row>
                <Card className='mb-3' style={Box}>
                    <Card.Body>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default BlueBox
BlueBox.defaultProps = {
    text: "insert text here",
}

BlueBox.propTypes = {
    text: PropTypes.string,
}
const Box = {
    backgroundColor: '#0D2E6E',
    color: 'white'

}