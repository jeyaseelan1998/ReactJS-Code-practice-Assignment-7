/* eslint-disable no-nested-ternary */
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export const SideBarContainer = styled.div`
  width: 100%;
  max-width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.$darkmode ? '#212121' : '#ffffff')};

  @media screen and (max-width: 767px) {
    height: fit-content;
    margin: auto 0;
    width: 100vw;
    max-width: 100vw;
  }
`

export const SideBarNavItemsList = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
`

export const NavItem = styled.li`
  list-style: none;
  background-color: ${props =>
    props.$active ? (props.$darkmode ? '#383838' : '#e2e8f0') : 'transparent'};
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 25px;
  text-decoration: none;
  color: black;
  font-family: Roboto;
  font-size: 16px;
  font-weight: ${props => (props.$active ? 500 : 400)};

  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`

export const NavLabel = styled.span`
  width: 150px;
  color: ${props => (props.$darkmode ? '#f1f1f1' : '#383838')};
`

export const HomeIcon = styled(AiFillHome)`
  height: 15px;
  width: 15px;
  margin-right: 15px;
  color: ${props =>
    props.$active ? '#ff0b37' : props.$darkmode ? '#f1f1f1' : '#383838'};
`

export const TrendingIcon = styled(HiFire)`
  height: 15px;
  width: 15px;
  margin-right: 15px;
  color: ${props =>
    props.$active ? '#ff0b37' : props.$darkmode ? '#f1f1f1' : '#383838'};
`
export const GamingIcon = styled(SiYoutubegaming)`
  height: 15px;
  width: 15px;
  margin-right: 15px;
  color: ${props =>
    props.$active ? '#ff0b37' : props.$darkmode ? '#f1f1f1' : '#383838'};
`
export const PlaylistAddIcon = styled(MdPlaylistAdd)`
  height: 15px;
  width: 15px;
  margin-right: 15px;
  color: ${props =>
    props.$active ? '#ff0b37' : props.$darkmode ? '#f1f1f1' : '#383838'};
`

export const Footer = styled.footer`
  display: block;
  padding: 25px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const FooterHeading = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  color: ${props => (props.$darkmode ? '#f1f1f1' : '#181818')};

  margin-bottom: 15px;
`

export const FooterLogoGroup = styled.div`
  display: flex;
  align-items: center;
`

export const FooterLogo = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 10px;
`

export const FooterDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.$darkmode ? '#e2e8f0' : '#1e293b')};
  margin-top: 15px;
`
