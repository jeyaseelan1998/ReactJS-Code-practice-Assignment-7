import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

export const VideoItemList = styled.li`
  list-style: none;
  margin-bottom: 10px;
  margin-right: 10px;
`

export const VideoLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #181818;
  display: flex;
`

export const VideoThumbnail = styled.img`
  margin-right: 15px;
  width: 360px;
`

export const VideoDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const VideoName = styled.p`
  margin-top: 0;
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
`

export const ChannelName = styled.p`
  margin-top: 0;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  color: #7e858e;
`

export const Statistics = styled.div`
  display: flex;
  align-items: center;
`

export const DotIcon = styled(BsDot)`
  margin-bottom: 15px;
`
