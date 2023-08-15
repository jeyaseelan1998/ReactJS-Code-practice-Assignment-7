import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.$darkmode ? '#181818' : '#ffffff')};
  overflow-y: auto;
`

export const NotFoundImage = styled.img`
  width: 360px;
`

export const NotFoundHeading = styled.h1`
  margin-bottom: 0;
  font-family: Roboto;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
  color: ${props => (props.$darkmode ? '#f5f6f8' : '#1c293a')};
`

export const NotFoundDescription = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.$darkmode ? '#ebebeb' : '#7e858e')};
`
