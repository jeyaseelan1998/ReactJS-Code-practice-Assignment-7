/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'
import {MdPlaylistAdd} from 'react-icons/md'
import {BiLike, BiDislike} from 'react-icons/bi'

export const VideoItemDetailContainer = styled.div`
  flex-grow: 1;
  height: 90vh;
  overflow-y: auto;
  background-color: ${props => (props.$darkmode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  padding: 0 25px;
`

export const FailureViewContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: ${props => (props.$darkmode ? '#181818' : '#ffffff')}; */
  /* overflow-y: auto; */
`

export const FailureViewImage = styled.img`
  width: 380px;
`

export const FailureViewHeading = styled.h1`
  margin-bottom: 0;
  font-family: Roboto;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
  color: ${props => (props.$darkmode ? '#f5f6f8' : ' #00306e')};
`

export const FailureViewDescription = styled.p`
  text-align: center;
  margin-bottom: 25px;
  width: 380px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.$darkmode ? '#ebebeb' : '#7e858e')};
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

export const VideoName = styled.p`
  margin-top: 25px;
  margin-bottom: 25px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  color: ${props => (props.$darkmode ? '#f9f9f9' : '#181818')};
`

export const ChannelLogo = styled.img`
  width: 50px;
  margin-right: 8px;
  align-self: flex-start;
`

export const ChannelName = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  color: ${props => (props.$darkmode ? '#f9f9f9' : '#181818')};
`

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StatisticsText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
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
  margin-bottom: 0;
  color: #7e858e;
`

export const Separator = styled.hr`
  margin: 25px 0;
  border: 1px solid #cccccc;
`

export const ChannelLogoDescription = styled.div`
  display: flex;
`

export const VideoDescription = styled.p`
  margin-top: 35px;
  margin-bottom: 25px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  color: #7e858e;
`

export const Button = styled.button`
  padding: 0;
  border: none;
  font-size: 14px;
  font-weight: 500;
  font-family: Roboto;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  margin-left: 15px;
  display: flex;
  align-items: center;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`

export const PlaylistAddIcon = styled(MdPlaylistAdd)`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`

export const LikeIcon = styled(BiLike)`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`
export const DislikeIcon = styled(BiDislike)`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`
