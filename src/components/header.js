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
import { Link } from "gatsby"
import { Location } from "@reach/router"

const Header = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col lg={4} md={6} xs={12}>
          <LeftSide>
            <span>
              АТЕЛЬЄ СТОЛЯРНИХ ВИРОБІВ
              <br /> «ФАСАД»
            </span>
          </LeftSide>
        </Col>
        <Col lg={2} md={6}>
          <FlexContainerNav>
            <Location>
              {({ location }) => (
                <>
                  <Item isActive={location.pathname === "/"}>
                    <Link to={"/"}> ВИРОБНИЦТВО</Link>
                  </Item>
                  <Item isActive={location.pathname === "/catalog"}>
                    <Link to={"/catalog"}>КАТАЛОГ</Link>
                  </Item>
                  <Item isActive={location.pathname === "/reviews"}>
                    <Link to={"/reviews"}> ВІДГУКИ</Link>
                  </Item>
                </>
              )}
            </Location>
          </FlexContainerNav>
        </Col>
        <Col lg={5} md={12}>
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
