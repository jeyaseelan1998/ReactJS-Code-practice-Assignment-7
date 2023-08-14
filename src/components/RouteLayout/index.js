import Header from '../Header'
import SideBar from '../SideBar'
import {
  PageContainer,
  RouteBgContainer,
  SideBarDesktop,
} from './styledComponents'

const RouteLayout = props => {
  const {children} = props
  return (
    <RouteBgContainer>
      <Header />
      <PageContainer>
        <SideBarDesktop>
          <SideBar />
        </SideBarDesktop>
        {children}
      </PageContainer>
    </RouteBgContainer>
  )
}

export default RouteLayout
