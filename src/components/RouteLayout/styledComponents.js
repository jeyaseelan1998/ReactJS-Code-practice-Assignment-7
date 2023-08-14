import styled from 'styled-components'

export const RouteBgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const PageContainer = styled.div`
  height: 90vh;
  display: flex;
`

export const SideBarDesktop = styled.div`
  height: 100%;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
