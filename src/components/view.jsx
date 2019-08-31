import styled from "styled-components"
import colors from "../../themes"

const Wrapper = styled.div`
  background-color: rgba(97, 30, 0, 0.1);
  min-height: 80px;
  width: 100%;
`

const Item = styled.span`
  opacity: ${({ isActive }) => (isActive ? "0.6" : "1.0")};
  color: #231f20;
  font-size: 12px;
  font-family: Roboto;
  cursor: pointer;
`

const FlexContainerNav = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: -40px;

  ${Item}:not(:first-child) {
    margin-left: 15px;
  }
`
const LeftSide = styled.div`
  height: 100%;
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
`

const MenuItem = styled.span`
  opacity: ${({ isActive }) => (isActive ? "0.6" : "1.0")};
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
    font-weight: 400;
    cursor: pointer;
  }
`

const PhoneIcon = styled.img`
  width: 35px;
  height: 34px;
`
const MobileText = styled.span`
  margin-left: 18px;
  margin-right: 60px;
  color: #231f20;
  font-size: 15px;
  font-weight: 400;
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
