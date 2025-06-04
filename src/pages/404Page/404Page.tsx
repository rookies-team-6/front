import React from "react"
import styled from "styled-components"
import NotFound from "@shared/assets/image/notFound.svg?react"
import MainBackground from "@shared/ui/main_background";

const NotFoundPage = () => {
    return(
        <MainBackground>
            <Wrapper>
                <NotFound width={500} height={500}/>
            </Wrapper>
            
        </MainBackground>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default NotFoundPage