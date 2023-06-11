import { styled } from "styled-components"
import StyledContainer from "../container"

const StyledHeader = styled.header`
    width: 100%;
`


export default function Header({ children }) {
    
    return (
        <StyledContainer>
            <StyledHeader>
                <h1>Mobile version</h1>
             </StyledHeader>
        </StyledContainer>
    )
}