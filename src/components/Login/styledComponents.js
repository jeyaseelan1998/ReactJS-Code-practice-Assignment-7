import styled from 'styled-components'

export const LoginRouteContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.$darkmode ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginForm = styled.form`
  width: 90%;
  max-width: 380px;
  padding: 35px 25px;
  border-radius: 12px;
  background-color: ${props => (props.$darkmode ? '#000' : '#fff')};
  ${props => (props.$darkmode ? '' : 'box-shadow: 0px 5px 15px #cccccc;')}
  display: flex;
  flex-direction: column;
`
export const WebsiteLogo = styled.img`
  width: 150px;
  align-self: center;
  margin-bottom: 25px;
`
export const LabelName = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${props => (props.$darkmode ? '#f8fafc' : '#64748b')};
  user-select: none;
`

export const InputField = styled.input`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.$darkmode ? '#f8fafc' : '#1e293b')};
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #94a3b8;
  outline: none;
  border-radius: 4px;
  background-color: transparent;
`

export const CheckboxInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`
export const CheckboxInput = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  cursor: pointer;
`
export const CheckboxInputLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.$darkmode ? '#e2e8f0' : '#475569')};
  user-select: none;
`
export const Button = styled.button`
  padding: 12px 24px;
  border: none;
  outline: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
`
export const ErrorMsg = styled.p`
  color: ${props => (props.$darkmode ? '#ff0b37' : '#ff0000')};
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 0;
`
// export const temp = styled.div``
// export const temp = styled.div``
