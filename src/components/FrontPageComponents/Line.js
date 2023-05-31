import Line from "../../images/Line.png"
import {Container} from "react-bootstrap";

const LongLine = () => {
    return (
        <Container className="text-center">
            <img src={Line} alt="Line" style={lineStyle}/>
        </Container>
    )
}
export default LongLine

const lineStyle = {
    width: 980,
    paddingBottom: 30,
    paddingTop: 30
}