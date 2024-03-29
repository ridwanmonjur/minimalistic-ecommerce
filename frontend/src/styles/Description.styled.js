import styled from 'styled-components'

let Description = styled.div`
    display: flex; 
    flex-wrap: wrap;
    margin: 5em 5em 0;
    max-height: 50vh;
    @media (max-width: ${({ theme }) => theme.desktop}) {
        max-height: min-content;
        min-width: 400px;
        max-width: 600px;
        margin: 20px auto;
    }
`
Description.Preview = styled.span`
    flex-basis: 100%; 
    text-align: center;
    position: reative;
    img {
        object-fit: cover;
        margin: auto
        max-width: 80%;
        height: 50vh;
        margin: 0px auto 10px;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
        flex-basis: 50%;
        & img {
            padding: 0 30px;
            height: 50vh;
        }
    }

`
Description.ControlPreview = styled.span`
    flex-basis: 10%;
    max-height: 50vh;
    text-align: center;
    overflow-y: auto;
    cursor-pointer;
    position: reative;
    ::-webkit-scrollbar {
        height: 8px;
    }
    img {
        object-fit: cover;
        width: 100%;
        max-height: 100px;
        margin: 0px auto 10px; 
        cursor: pointer;
        border: ${({ theme }) => `3px solid ${theme.colors.hoverBg}`};
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
        ::-webkit-scrollbar {
            height: 5px;
        }
        margin-bottom: 4px;
        flex-basis: 100%; 
        flex-wrap: nowrap;
        overflow-x: auto;
        white-space: nowrap;
        width: 90vw;
        img {
            margin: auto 5px; 
            width: 100px;
            height: 100px;
        }
    }
`
Description.TextSection = styled.span`
    flex-basis: 40%;  
    max-height: 50vh;
    padding: 20px 30px; 
    background-color: ${({ theme }) => `${theme.colors.hoverBg}`};
    @media (max-width: ${({ theme }) => theme.desktop}) {
        flex-basis: 100%; 
        text-align: center;
        max-height: min-content; 
        padding-left: 0px;
        margin-top: -5px;
    }
`
Description.AddToCart = styled.button`
    display: inline-block;
    cursor: pointer;
    padding: 15px;
    width: 250px;
    text-align: center;
    font-size: 15px;
    margin-right: 5px;
    margin-top: 10px;
    border: 0px solid black;
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: black;
    &:hover{
        background-color: transparent;
        color: black;
        border: ${({ theme }) => `3px solid ${theme.colors.primary}`};
    }  
`
Description.AddToCartError = styled.div`
    color: red;
    margin-top: 5px;
    font-size: 12px;
`
Description.DescriptionText = styled.div`
    height: 10vh;
    font-size: medium; 
    font-weight: 600; 
`
Description.SeeFullButton = styled.div`
    color: red;
    display: block;
    padding-top: 10px;
    cursor: pointer;
    text-decoration: underline; 
    @media (min-width: ${({ theme }) => theme.desktop}) {
    }
`
Description.SeeFullHeadingText = styled.div`
    flex-basis: 40%;  
    max-height: 50vh;
`
Description.SeeFullHeading = styled.div`
    color: red;
    display: block;
    padding-top: 0px;
    cursor: pointer;
    text-align: center;
    
    @media (min-width: ${({ theme }) => theme.desktop}) {
    }
`
Description.SeeFullText = styled(Description.DescriptionText)`
    text-align: center;
    padding: 20px 30px; 
    background-color: ${({ theme }) => `${theme.colors.hoverBg}`};
    @media (max-width: ${({ theme }) => theme.desktop}) {
        flex-basis: 100%; 
        text-align: center;
        padding-left: 0px;
    }
    margin: 0 5em 20px;
`
export default Description