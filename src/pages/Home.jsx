import Base from "../components/Base";
import { Row, Col, Container, Button } from "reactstrap";
export default function Home() {
    return (
        <Base>
        <Container>
            <Row >
                <Col md={
                    {
                        size: 6,
                        offset: 1
                    }} className="home--content">
                    <h1>
                    Find car of your choice, sharing is our motto
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                    <Button color="primary"> 
                        Get Started
                    </Button>
                    <Button color="primary" className="mx-2"> 
                        View Dashboard
                    </Button>
                </Col>
                <Col>
                </Col>
            </Row>
            </Container>
        </Base>
        
    )
}