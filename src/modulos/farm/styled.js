import styled from 'styled-components';


export const FarmButton = styled.div`
    margin-top:2%;
    height: 5vh;
    width: 80vw;
    background-color: #FF0000;
    align-items: center;

    .option_button{
        align-items: center;
        background: #FAF9F9;
        border: 2px solid #6C6B6B;
        border-radius: 10ch;
        color: #6C6B6B;
        font-size: calc(1.8vmin);
        padding: 0.4vh 1.6vw;
        margin-left: 20px;
    }

`;

export const Template = styled.div`
    height: 80vh;
    width: 100vw;

    .page_farm {
    margin-top:2%;
    margin-left: 10%;
    height: 80vh;
    width: 80vw;
    border-radius: 2ch;
    color: rgb(255, 255, 255);
    background-color: #FFFFFF;
    font-size: calc(10px + 2vmin);
    }

    .title_farm{
    text-align: center;
    margin-top: 1vh;
    color: rgb(66, 124, 81);

    .input_form{
        align-items: center;
        background-color: #FF0000;
    }
}
`;