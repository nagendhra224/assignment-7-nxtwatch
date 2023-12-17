import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const FailedImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const FailedHeading = styled.h1`
  font-family: roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`
export const FailedNote = styled.p`
font-size:25px;
font-family:roboto;
color=${props => props.noteColor};
text-align:center;
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding: 10px 5px 10px 5px;
  font-family: roboto;
  font-size: 15px;
`
