import { styled } from "styled-components"
import StyledContainer from "../container"

const StyledHeader = styled.header`
    width: 100%;
`


export default function Header({ children }) {
    
    return (
        <StyledContainer>
            <StyledHeader>
                <h1>This is my awesome project</h1>
             </StyledHeader>
        </StyledContainer>
    )
}