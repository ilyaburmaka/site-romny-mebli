import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../../themes"
import getImage from "../components/image"
import Img from "gatsby-image"
import styled from "styled-components"

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
`
const Title = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  color: ${colors.darkRed300};
`

const EntityText = styled.p`
  font-size: 14px;
`
const Line = styled.div`
  margin-top: 23px;
  width: 332px;
  height: 2px;
  background-color: ${colors.darkRed300};
`

const EntityImage = styled.div`
  height: 545px;
  width: 100%;
`

const ImageExampleProd = styled.div`
  height: 207px;
  width: 216px;
`
const WrapperImage = styled.div`
  display: flex;
  img:not(:first-child) {
    margin-left: 20px;
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
        <div>
          <EntityText>
            Можна виділити кілька переваг виготовлення меблів своїми руками:
            економія грошових коштів можливість виготовити меблі, які
            відповідатимуть всім вимогам і побажанням господарів можливість
            довести самому собі, який я молодець самі незвичайні ідеї можна
            втілити в життя. Сьогодні знайти матеріали з приводу того, як
            зробити меблі своїми руками нескладно. Випускається спеціальна
            література, багато корисної інформації є в інтернеті, можна
            подивитися не тільки схеми, креслення та інструкції, а й навіть
            відео. Якщо у людини лежить душа до такої справи, то навчитися буде
            нескладно. Можна виділити кілька переваг виготовлення меблів своїми
            руками
          </EntityText>
          <EntityText>
            Можна виділити кілька переваг виготовлення меблів своїми руками:
            економія грошових коштів можливість виготовити меблі, які
            відповідатимуть всім вимогам і побажанням господарів можливість
            довести самому собі, який я молодець самі незвичайні ідеї можна
            втілити в життя. Сьогодні знайти матеріали з приводу того, як
            зробити меблі своїми руками нескладно. Випускається спеціальна
            література, багато корисної інформації є в інтернеті, можна
            подивитися не тільки схеми, креслення та інструкції, а й навіть
            відео. Якщо у людини лежить душа до такої справи, то навчитися буде
            нескладно.
          </EntityText>
          <WrapperImage>
            <ImageExampleProd>
              <Img fluid={square.childImageSharp.fluid} />
            </ImageExampleProd>
            <ImageExampleProd>
              <Img fluid={square.childImageSharp.fluid} />
            </ImageExampleProd>
            <ImageExampleProd>
              <Img fluid={square.childImageSharp.fluid} />
            </ImageExampleProd>
            <ImageExampleProd>
              <Img fluid={square.childImageSharp.fluid} />
            </ImageExampleProd>
          </WrapperImage>
        </div>
      </WrapperContent>
      <WrapperContent>
        <Title>Галерея</Title>
        <Line />
      </WrapperContent>
    </Layout>
  )
}

export default IndexPage
