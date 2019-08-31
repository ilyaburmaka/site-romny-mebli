import styled from "styled-components"
import colors from "../../themes"
import { MEDIA } from "../../themes/media"

const Wrapper = styled.div`
  background-color: rgba(97, 30, 0, 0.1);
  min-height: 80px;
  width: 100%;
  @media (${MEDIA.XS}) {
    div:first-child {
      padding: unset;
    }
    .row {
      width: 100%;
      margin: unset;
    }
  }
`

const Item = styled.span`
  opacity: ${({ isActive }) => (isActive ? "0.6" : "1.0")};
  color: #231f20 !important;
  font-size: 12px;
  font-family: Roboto !important;
  cursor: pointer;
  text-decoration: none !important;
  a {
    color: #231f20 !important;
    font-size: 12px;
    font-family: Roboto !important;
    cursor: pointer;
    text-decoration: none !important;
  }
`

const FlexContainerNav = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: -40px;

  ${Item}:not(:first-child) {
    margin-left: 15px;
  }
  @media (${MEDIA.MD}) {
    margin-left: -10px;
    ${Item}:not(:first-child) {
      margin-left: 10px;
    }
  }
  @media (${MEDIA.SM}) {
    margin-left: 0;
  }
  @media (${MEDIA.XS}) {
    justify-content: center;
    margin: 6px auto;
  }
`
const LeftSide = styled.div`
  height: 80px;
  width: 300px;
  background-color: ${colors.darkRed100};
  display: flex;
  flex-direction: column;
  color: #efe4dd;
  font-size: 16px;
  font-weight: 400;
  justify-content: center;
  span {
    font-family: Roboto;
    margin: auto 30px;
  }
  @media (${MEDIA.XS}) {
    width: 100%;
  }
`

const MenuItem = styled.span`
  opacity: ${({ isActive }) => (isActive ? "0.6" : "1.0")};
  font-family: Arial;
`
const MobileText = styled.span`
  margin-left: 20px;
  margin-right: 58px;
  color: #231f20;
  font-family: Roboto;
  font-size: 15px;
`
const RightSide = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 60px;
  ${MenuItem} {
    margin-left: 12px;
    color: ${colors.darkRed200};
    font-size: 10px;
    cursor: pointer;
  }

  @media (${MEDIA.SM}) {
    justify-content: center;
    margin-bottom: 15px;
  }

  @media (${MEDIA.XS}) {
    justify-content: center;
    margin-left: 0;
    margin-bottom: 12px;
    img {
      width: 15px;
      height: 15px;
    }
    ${MobileText} {
      font-size: 12px;
      margin-right: 12px;
      margin-left: 5px;
    }
  }
`

const PhoneIcon = styled.img`
  width: 35px;
  height: 34px;
  margin: auto 0;
`

const Line = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${colors.darkRed100};
`
const Flex = styled.div`
  display: flex;
  height: 100%;
`
export {
  Wrapper,
  LeftSide,
  RightSide,
  Flex,
  Line,
  Item,
  MenuItem,
  FlexContainerNav,
  PhoneIcon,
  MobileText,
}
