import { Container, Row, Col } from "react-bootstrap"
import Gallery from "../layout/Gallery"
import Layout from "../layout/AppLayout"

export default function Portfolio () {

  return (
    <Layout>
      <Container>
        <Row>
          <Col className="text-cetner">
            <h2> Portfolio </h2>
          </Col>
        </Row>

        <Row>
          <Col md={7}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias rerum ratione adipisci praesentium beatae impedit, iure ex vel nisi deleniti, omnis, eaque commodi tenetur corrupti. Error neque suscipit aliquid eveniet.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum possimus similique ut repellat perferendis, sed nesciunt tempora dignissimos delectus quaerat quibusdam non repudiandae aperiam, aliquam earum excepturi labore voluptates rerum.</p>
          </Col>
        </Row>
      </Container>
      <Gallery/>
    </Layout>
  )
}