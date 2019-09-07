import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"
import { MEDIA } from "../../themes/media"
import getImage from "../components/image"
import FilterImage from "../images/bottom-catalog.png"
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
  min-height: 280px;
  background-image: url(${FilterImage});
  background-repeat: no-repeat;
  background-position: bottom;
  @media (${MEDIA.SM}) {
    min-height: 220px;
    background-size: auto 100%;
  }
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
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 33px;
  @media (${MEDIA.SM}) {
    width: 100vw;
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (${MEDIA.XS}) {
    display: flex;
    justify-content: center;
  }
`
const FilterLeftSide = styled.div`
  margin-left: 60px;
  @media (${MEDIA.SM}) {
    margin-left: unset;
  }
`
const TitleFilter = styled.div`
  font-size: 22px;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #eee4dd;
  @media (${MEDIA.SM}) {
    font-size: 16px;
  }
`
const Line = styled.div`
  height: 2px;
  width: ${({ size }) => (!!size ? `${size}px` : "327px")};
  background-color: #eee4dd;
  @media (${MEDIA.SM}) {
    width: ${({ sizeMobile }) => (!!sizeMobile ? `${sizeMobile}px` : "227px")};
  }
`
const FilterImages = styled.div`
  margin-right: 35px;
  margin-top: 30px;
  cursor: pointer;
  height: 130px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80px;
  .gatsby-image-wrapper {
    height: 80px;
    width: 80px;
    img {
      height: 80px;
      width: 80px;
    }
  }
  @media (${MEDIA.SM}) {
    margin-right: 4px;
    margin-top: 10px;
    width: 60px;
    height: 75px;
    .gatsby-image-wrapper {
      height: 50px;
      width: 50px;
      img {
        height: 50px;
        width: 50px;
      }
    }
  }
`
const WrapperFilterImages = styled.div`
  display: flex;
  @media (${MEDIA.SM}) {
    width: ${({ width }) => width || "227px"};
    justify-content: ${({ justify }) => justify || "center"};
  }
`
const FilterTitle = styled.span`
  text-transform: uppercase;
  font-family: Roboto;
  word-break: keep-all;
  font-size: 16px;
  margin-top: 8px;
  color: ${colors.white};
  @media (${MEDIA.SM}) {
    font-size: 11px;
    margin-top: 4px;
  }
`
const FilterRightSide = styled.div`
  @media (${MEDIA.SM}) {
  }
`
const LineSelectFilter = styled.div`
  width: 100%;
  height: 4px;
  background-color: #9d3001;
`
const TitleMainFilter = styled.div`
  font-size: 12px;
  color: #8e2906;
  font-family: Roboto;
  margin-top: 9px;
  margin-left: 2px;
  margin-bottom: 84px;
`
const FilterSelectImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  .gatsby-image-wrapper {
    height: 68px;
    width: 68px;
    img {
      height: 68px;
      width: 68px;
    }
  }
`
const FilterSelectTitle = styled.div`
  text-transform: uppercase;
  font-family: Roboto;
  word-break: keep-all;
  font-size: 16px;
  color: #8e2906;
`
const SecondPage = () => {
  const {
    headerCatalogPage,
    square,
    filterDor,
    filterBed,
    filterBoxer,
    filterDrarbina,
    filterLed,
    dorSelect,
  } = getImage()
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
            <TitleFilter>
              <div>СТАНДАРТНІ</div>
              <div>ВИРОБИ</div>
            </TitleFilter>
            <Line />
            <WrapperFilterImages>
              <FilterImages>
                <Img fluid={filterDor.childImageSharp.fluid} />
                <FilterTitle>двері</FilterTitle>
              </FilterImages>
              <FilterImages>
                <Img fluid={filterBed.childImageSharp.fluid} />
                <FilterTitle>ліжка</FilterTitle>
              </FilterImages>
              <FilterImages>
                <Img fluid={filterBoxer.childImageSharp.fluid} />
                <FilterTitle>меблі</FilterTitle>
              </FilterImages>
            </WrapperFilterImages>
          </FilterLeftSide>
          <FilterRightSide>
            <TitleFilter>
              <div>НЕСТАНДАРТНІ</div>
              <div>ВИРОБИ</div>
            </TitleFilter>
            <Line size={434} sizeMobile={284} />
            <WrapperFilterImages justify={"space-evenly"} width={"285px"}>
              <FilterImages>
                <Img fluid={filterDor.childImageSharp.fluid} />
                <FilterTitle>двері</FilterTitle>
              </FilterImages>
              <FilterImages>
                <Img fluid={filterBed.childImageSharp.fluid} />
                <FilterTitle>ліжка</FilterTitle>
              </FilterImages>
              <FilterImages>
                <Img fluid={filterLed.childImageSharp.fluid} />
                <FilterTitle>кухні</FilterTitle>
              </FilterImages>
              <FilterImages>
                <Img fluid={filterDrarbina.childImageSharp.fluid} />
                <FilterTitle>ексклюзив</FilterTitle>
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
                  <LineSelectFilter />
                  <TitleMainFilter>
                    СТАНДАРТНІ <br />
                    ВИРОБИ
                  </TitleMainFilter>
                  <FilterSelectImages>
                    <Img fluid={dorSelect.childImageSharp.fluid} />
                    <FilterSelectTitle>двері</FilterSelectTitle>
                  </FilterSelectImages>
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
