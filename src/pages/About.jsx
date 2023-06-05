import { Container, Row, Col } from "react-bootstrap"
import Layout from "../layout/AppLayout"

export default function About () {

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h2> About </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae, maxime dolorem officia deserunt, error omnis facere assumenda distinctio ab tempora iure, libero consequuntur est atque iste obcaecati? Modi, aut.</p>
          </Col>
        </Row>
      </Container>

    </Layout>
  )
}