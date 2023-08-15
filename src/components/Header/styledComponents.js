import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import Popup from 'reactjs-popup'

export const HeaderContainer = styled.header`
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.$darkmode ? '#212121' : '#ffffff')};
  height: 10vh;

  @media screen and (min-width: 768px) {
    padding: 0 25px;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #1e293b;
  cursor: pointer;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  align-self: center;

  @media screen and (max-width: 767px) {
    width: 120px;
  }
`

export const DesktopHeaderItems = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
`

export const MobileHeaderItems = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HeaderItem = styled.li`
  list-style: none;
  margin-left: 15px;

  @media screen and (min-width: 768px) {
    margin-left: 25px;
  }
`

export const Button = styled.button`
  padding: ${props => (props.outline ? '8px 16px' : '0px')};
  border: ${props => (props.outline ? '1px solid #3b82f6' : 'none')};
  border-radius: ${props => (props.outline ? '4px' : '0px')};
  color: #3b82f6;
  font-size: 14px;
  font-weight: 500;
  font-family: Roboto;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const CloseButton = styled(Button)`
  align-self: flex-end;
  margin: 25px;
  padding: 10px;
`

export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`
export const MoonIcon = styled(FaMoon)`
  height: 25px;
  width: 25px;
  color: #181818;
`

export const SunIcon = styled(FiSun)`
  height: 25px;
  width: 25px;
  color: #f1f1f1;
`

export const HamburgerMenuIcon = styled(GiHamburgerMenu)`
  height: 25px;
  width: 25px;
  color: ${props => (props.$darkmode ? '#f1f1f1' : '#1e293b')};
`

export const CloseIcon = styled(AiOutlineClose)`
  height: 15px;
  width: 15px;
  color: ${props => (props.$darkmode ? '#f1f1f1' : '#1e293b')};
`

export const LogoutIcon = styled(FiLogOut)`
  height: 25px;
  width: 25px;
  color: ${props => (props.$darkmode ? '#f1f1f1' : '#1e293b')};
`

export const StyledPopup = styled(Popup)`
  &-content {
    background-color: ${props => (props.$darkmode ? '#212121' : '#fff')};
    height: 100%;
    width: 100%;
  }
`

export const StyledLogoutPopup = styled(Popup)`
  &-overlay {
    background-color: #00000040;
    /* backdrop-filter: blur(2px); */
  }

  &-content {
    background-color: ${props => (props.$darkmode ? '#212121' : '#fff')};
    border-radius: 12px;
    padding: 25px;
    display: flex;
    flex-direction: column;
  }
`

export const AlertText = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: Roboto;
  text-align: center;
  margin-bottom: 35px;
  color: ${props => (props.$darkmode ? '#f9f9f9' : '#181818')};
`

export const ButtonGroup = styled.div`
  align-self: center;
`

export const CancelButton = styled.button`
  padding: 12px 24px;
  border: 1px solid #909090;
  color: #909090;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  font-family: Roboto;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  margin-right: 25px;
`

export const ConfirmButton = styled(CancelButton)`
  color: #fff;
  background-color: #3b82f6;
  border: none;
  margin-right: 0;
`
