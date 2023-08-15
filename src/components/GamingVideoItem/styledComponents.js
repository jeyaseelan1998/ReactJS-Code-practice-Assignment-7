import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemList = styled.li`
  list-style: none;
  margin-bottom: 25px;
  margin-right: 25px;
`

export const VideoLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #181818;
  display: flex;
  flex-direction: column;
`

export const VideoThumbnail = styled.img`
  margin-bottom: 15px;
  width: 240px;
`

export const VideoDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const VideoName = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  color: ${props => (props.$darkmode ? '#f9f9f9' : '#181818')};
`

export const Views = styled.p`
  margin-top: 0;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  color: #7e858e;
`
