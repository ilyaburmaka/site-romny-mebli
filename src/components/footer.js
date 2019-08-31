import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import background from "../images/footer.png"
import styled from "styled-components"
import colors from "../../themes"
import { MEDIA } from "../../themes/media"
const Wrapper = styled.footer`
  height: 240px;
  display: block;
  background-repeat: no-repeat;
  background-image: url(${background});
  background-size: cover;
  @media (${MEDIA.XS}) {
    height: 190px;
  }
`
const WhiteBlock = styled.div`
  width: 7px;
  height: auto;
  background-color: ${colors.white};
  margin-right: 16px;
`
const WrapperAddress = styled.div`
  margin-top: 30px;
  display: flex;
`

const TextAddress = styled.address`
  font-size: 16px;
  width: 200px;
  margin: unset;
  font-family: Roboto !important;
  color: ${colors.white};
`

const Footer = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col lg={{ order: 2, offset: 1 }}>
          <WrapperAddress>
            <WhiteBlock />
            <TextAddress>
              Сумська область, м.Ромни, вул. Гетьмана-Мазепи, 83
            </TextAddress>
          </WrapperAddress>
        </Col>
      </Row>
    </Container>
  </Wrapper>
)

export default Footer
