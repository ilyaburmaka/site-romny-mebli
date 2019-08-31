import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"
import { MEDIA } from "../../themes/media"
import getImage from "../components/image"
import FilterImage from "../images/bottom-catalog.png"
import background from "../images/footer.png"
import colors from "../../themes"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
const WrapperPicture = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
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
const BottomImage = styled.div`
  width: 100%;
  height: 280px;
  .gatsby-image-wrapper {
    height: 280px;
    overflow: unset;
    div {
      padding: unset;
    }
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${FilterImage});
  background-repeat: no-repeat;
  background-position: bottom;
`
const Content = styled.div`
  padding-top: 50px;
  background-color: ${colors.white400};
  padding-bottom: 65px;
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
const SecondPage = () => {
  const { headerCatalogPage, square } = getImage()
  return (
    <Layout>
      <SEO title="catalog" />
      <WrapperPicture>
        <EntityImage>
          <Img fluid={headerCatalogPage.childImageSharp.fluid} />
        </EntityImage>
      </WrapperPicture>
      <Wrapper>asdas</Wrapper>
      <Content>
        <WrapperTopImage>
          <Container>
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
        </WrapperTopImage>
      </Content>
    </Layout>
  )
}

export default SecondPage
