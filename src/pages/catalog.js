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
  display: flex;
  justify-content: center;
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
const FilterWrapper = styled.div`
  width: 920px;
  display: flex;
  justify-content: space-between;
  padding-top: 33px;
`
const FilterLeftSide = styled.div`
  margin-left: 60px;
`
const TitleFilter = styled.span`
  font-size: 22px;
  font-family: Roboto;
  color: #eee4dd;
`
const Line = styled.div`
  height: 2px;
  width: ${({ size }) => (!!size ? `${size}px` : "327px")};
  background-color: #eee4dd;
`
const FilterImages = styled.div`
  margin-right: 35px;
  margin-top: 32px;
  height: 80px;
  width: 80px;
  .gatsby-image-wrapper {
    height: 80px;
    width: 80px;
    img {
    
      height: 80px;
      width: 80px;
    }
  }
`
const WrapperFilterImages = styled.div`
  display: flex;
`
const FilterRightSide = styled.div``
const SecondPage = () => {
  const { headerCatalogPage, square, filterDor, filterBed,filterBoxer,filterDrarbina,filterLed } = getImage()
  return (
    <Layout>
      <SEO title="catalog" />
      <WrapperPicture>
        <EntityImage>
          <Img fluid={headerCatalogPage.childImageSharp.fluid} />
        </EntityImage>
      </WrapperPicture>
      <Wrapper>
        <FilterWrapper>
          <FilterLeftSide>
            <TitleFilter>СТАНДАРТНІ ВИРОБИ</TitleFilter>
            <Line />
            <WrapperFilterImages>
              <FilterImages>
                <Img fluid={filterDor.childImageSharp.fluid} />
              </FilterImages>
              <FilterImages>
                <Img fluid={filterBed.childImageSharp.fluid} />
              </FilterImages>
              <FilterImages>
                <Img fluid={filterBoxer.childImageSharp.fluid} />
              </FilterImages>
            </WrapperFilterImages>
          </FilterLeftSide>
          <FilterRightSide>
            <TitleFilter>НЕСТАНДАРТНІ ВИРОБИ</TitleFilter>
            <Line size={434} />
            <WrapperFilterImages>
              <FilterImages>
                <Img fluid={filterDor.childImageSharp.fluid} />
              </FilterImages>
              <FilterImages>
                <Img fluid={filterBed.childImageSharp.fluid} />
              </FilterImages>
              <FilterImages>
                <Img fluid={filterLed.childImageSharp.fluid} />
              </FilterImages>
              <FilterImages>
                <Img fluid={filterDrarbina.childImageSharp.fluid} />
              </FilterImages>
            </WrapperFilterImages>
          </FilterRightSide>
        </FilterWrapper>
      </Wrapper>
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
