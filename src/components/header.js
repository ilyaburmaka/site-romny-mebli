import React from "react"
import {
  Wrapper,
  LeftSide,
  RightSide,
  Line,
  MenuItem,
  Item,
  FlexContainerNav,
  PhoneIcon,
  MobileText,
} from "./view"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import IconPhone from "../images/phone.png"
const Header = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col lg={4}>
          <LeftSide>
            <span>
              АТЕЛЬЄ СТОЛЯРНИХ ВИРОБІВ
              <br /> «ФАСАД»
            </span>
          </LeftSide>
        </Col>
        <Col lg={2}>
          <FlexContainerNav>
            <Item isActive>ВИРОБНИЦТВО</Item>
            <Item>КАТАЛОГ</Item>
            <Item>ВІДГУКИ</Item>
          </FlexContainerNav>
        </Col>
        <Col lg={2}>
          <RightSide>
            <PhoneIcon src={IconPhone} />
            <MobileText>096 721 65 38</MobileText>
            <MenuItem isActive>УКР</MenuItem>
            <MenuItem>РУС</MenuItem>
            <MenuItem>ENG</MenuItem>
          </RightSide>
        </Col>
      </Row>
    </Container>
    <Line />
  </Wrapper>
)

export default Header
