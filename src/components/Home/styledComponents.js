import styled from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'

export const HomeContainer = styled.div`
  flex-grow: 1;
  height: 90vh;
  overflow-y: auto;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`

export const BannerBackgroundImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 35px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  align-self: center;

  @media screen and (max-width: 767px) {
    width: 120px;
  }
`

export const BannerDescription = styled.p`
  font-weight: 500;
  font-size: 16px;
  font-family: Roboto;
  color: #181818;
  margin-bottom: 45px;
`

export const CloseIcon = styled(AiOutlineClose)`
  height: 15px;
  width: 15px;
  color: ${props => (props.darkMode ? '#f1f1f1' : '#1e293b')};
`

export const Button = styled.button`
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
`

export const GetItNowButton = styled(Button)`
  border: 1px solid #181818;
  padding: 12px 24px;
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  font-family: Roboto;
  color: #181818;
`

export const VideosListContainer = styled.ul`
  padding: 10px 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const FailureViewContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')}; */
  /* overflow-y: auto; */
`

export const FailureViewImage = styled.img`
  width: 260px;
`

export const FailureViewHeading = styled.h1`
  margin-bottom: 0;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  color: ${props => (props.darkMode ? '#f5f6f8' : ' #00306e')};
`

export const FailureViewDescription = styled.p`
  text-align: center;
  width: 280px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.darkMode ? '#ebebeb' : '#7e858e')};
`

export const RetryButton = styled.button`
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: #4f46e5;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
`
