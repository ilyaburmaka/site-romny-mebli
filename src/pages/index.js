import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../../themes"
import getImage from "../components/image"
import Img from "gatsby-image"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { MEDIA } from "../../themes/media"
const WrapperPicture = styled.div`
  width: 100%;
  display: flex;
`
const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 35px;
  margin-bottom: 60px;
  ${({ withBackground }) =>
    withBackground &&
    `background-color:${colors.white400};padding-bottom:50px;padding-top:35px;margin-bottom:unset;`};
`
const Title = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  color: ${colors.darkRed300};
`

const EntityText = styled.p`
  margin-top: 30px;
  font-size: 14px;
  @media (${MEDIA.XS}) {
    font-size: 12px;
    margin-top: 8px;
  }
`
const Line = styled.div`
  margin-top: 23px;
  width: 332px;
  height: 2px;
  background-color: ${colors.darkRed300};
  @media (${MEDIA.XS}) {
    width: 100%;
  }
`

const EntityImage = styled.div`
  width: 100%;
  height: 550px;
  .gatsby-image-wrapper {
    height: 550px;
  }
  @media (${MEDIA.SM}) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    height: 100%;
  }
  @media (${MEDIA.XS}) {
    .gatsby-image-wrapper {
      height: 190px;
    }
    height: 190px;
  }
`

const ImageExampleProd = styled.div`
  height: 207px;
  width: 216px;
  .gatsby-image-wrapper {
    height: 207px;
    width: 216px;
    img {
      height: 207px;
      width: 216px;
    }
  }
  @media (${MEDIA.XS}) {
    height: 275px;
    width: 290px;
    .gatsby-image-wrapper {
      height: 275px;
      width: 290px;
    }
  }
`
const WrapperTopImage = styled.div`
  @media (${MEDIA.MD}) {
    margin: unset;
    * > div {
      display: flex;
      justify-content: space-around;
      margin-bottom: 15px;
    }
  }
`
const WrapperGallery = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  @media (${MEDIA.MD}) {
    margin: unset;
    * > div {
      display: flex;
      justify-content: space-around;
      margin-bottom: 15px;
    }
  }
`
const IndexPage = () => {
  const { square, headerMainPage } = getImage()
  return (
    <Layout>
      <SEO title="Home" />
      <WrapperPicture>
        <EntityImage>
          <Img fluid={headerMainPage.childImageSharp.fluid} />
        </EntityImage>
      </WrapperPicture>
      <WrapperContent>
        <Title>Майстерня</Title>
        <Line />
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <EntityText>
                Ми виготовляємо ексклюзивні дерев'яні вироби з натурального
                дерева: сходи, двері, меблі, також корпусні меблі з якісного,
                сертифікованого ДСП, МДФ, масиву дерева, фанери шпонированной.
                Виготовлення можливо за Вашими ескізами, виїзд на місце для
                зняття розмірів.
              </EntityText>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <EntityText>
                При виготовленні виробів використовуються технологія та якісні
                натуральні фарби провідних європейських виробників. Проведемо
                реставрацію вінтажних виробів з дерева. У нас тільки
                індивідуальний підхід до кожного клієнта.
              </EntityText>
            </Col>
          </Row>
          <WrapperTopImage>
            <Row>
              <Col lg={3} md={6} sm={6}>
                <ImageExampleProd>
                  <Img fluid={square.childImageSharp.fluid} />
                </ImageExampleProd>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <ImageExampleProd>
                  <Img fluid={square.childImageSharp.fluid} />
                </ImageExampleProd>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <ImageExampleProd>
                  <Img fluid={square.childImageSharp.fluid} />
                </ImageExampleProd>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <ImageExampleProd>
                  <Img fluid={square.childImageSharp.fluid} />
                </ImageExampleProd>
              </Col>
            </Row>
          </WrapperTopImage>
        </Container>
      </WrapperContent>
      <WrapperContent withBackground>
        <Title>Галерея</Title>
        <Line />
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <EntityText>
                Можна виділити кілька переваг виготовлення меблів своїми руками:
                економія грошових коштів можливість виготовити меблі, які
                відповідатимуть всім вимогам і побажанням господарів можливість
                довести самому собі, який я молодець самі незвичайні ідеї можна
                втілити в життя. Сьогодні знайти матеріали з приводу того, як
                зробити меблі своїми руками нескладно. Випускається спеціальна
                література, багато корисної інформації є в інтернеті, можна
                подивитися не тільки схеми, креслення та інструкції, а й навіть
                відео. Якщо у людини лежить душа до такої справи, то навчитися
                буде нескладно.
              </EntityText>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <EntityText>
                Можна виділити кілька переваг виготовлення меблів своїми руками:
                економія грошових коштів можливість виготовити меблі, які
                відповідатимуть всім вимогам і побажанням господарів можливість
                довести самому собі, який я молодець самі незвичайні ідеї можна
                втілити в життя. Сьогодні знайти матеріали з приводу того, як
                зробити меблі своїми руками нескладно. Випускається спеціальна
                література, багато корисної інформації є в інтернеті, можна
                подивитися не тільки схеми, креслення та інструкції, а й навіть
                відео. Якщо у людини лежить душа до такої справи, то навчитися
                буде нескладно.
              </EntityText>
            </Col>
          </Row>
          <WrapperGallery>
            <Row>
              <Col lg={3} md={6} sm={6}>
                <ImageExampleProd>
                  <Img fluid={square.childImageSharp.fluid} />
                </ImageExampleProd>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <ImageExampleProd>
                  <Img fluid={square.childImageSharp.fluid} />
                </ImageExampleProd>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <ImageExampleProd>
                  <Img fluid={square.childImageSharp.fluid} />
                </ImageExampleProd>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <ImageExampleProd>
                  <Img fluid={square.childImageSharp.fluid} />
                </ImageExampleProd>
              </Col>
            </Row>
          </WrapperGallery>
          <WrapperGallery>
            <Row>
              <Col lg={3} md={6} sm={6}>
                <ImageExampleProd>
                  <Img fluid={square.childImageSharp.fluid} />
                </ImageExampleProd>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <ImageExampleProd>
                  <Img fluid={square.childImageSharp.fluid} />
                </ImageExampleProd>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <ImageExampleProd>
                  <Img fluid={square.childImageSharp.fluid} />
                </ImageExampleProd>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <ImageExampleProd>
                  <Img fluid={square.childImageSharp.fluid} />
                </ImageExampleProd>
              </Col>
            </Row>
          </WrapperGallery>
        </Container>
      </WrapperContent>
    </Layout>
  )
}

export default IndexPage
