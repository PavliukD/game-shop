import { styled } from "styled-components"

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
`

export default function StyledContainer({ children }){
    return (
        <Container>
            {children}
        </Container>
    )
}