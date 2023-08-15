import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'

export const TrendingContainer = styled.div`
  flex-grow: 1;
  height: 90vh;
  overflow-y: auto;
  background-color: ${props => (props.$darkmode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`

export const FailureViewContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureViewImage = styled.img`
  width: 420px;
`

export const FailureViewHeading = styled.h1`
  margin-bottom: 0;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  color: ${props => (props.$darkmode ? '#f5f6f8' : ' #00306e')};
`

export const FailureViewDescription = styled.p`
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.$darkmode ? '#cccccc' : '#7e858e')};
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

export const VideosList = styled.ul`
  padding: 10px 35px;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  padding: 25px 35px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.$darkmode ? '#181818' : '#f1f1f1')};
`

export const IconContainer = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50px;
  background-color: ${props => (props.$darkmode ? '#0f0f0f' : '#e1e8f0')};
  display: grid;
  place-items: center;
  margin-right: 25px;
`

export const TrendingIcon = styled(HiFire)`
  height: 25px;
  width: 25px;
  color: #ff0b37;
`

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  color: ${props => (props.$darkmode ? '#f5f6f8' : ' #00306e')};
`
