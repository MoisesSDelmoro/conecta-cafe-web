import styled from 'styled-components';

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
        font-size: calc(5vmin);

}
`;

export const FarmButton = styled.div`
    margin-top:2%;
    margin-left: 20%;
    height: 5vh;
    width: 80vw;
    align-items: center;

    .option_button{
        align-items: center;
        background: #EEFBDF;
        border: 2px solid #EEFBDF;
        border-radius: 10ch;
        color: #4B9100;
        font-size: calc(1.8vmin);
        padding: 0.4vh 1.6vw;
        margin-left: 20px;
    }
`;

export const FarmFields = styled.div`
    height: 58vh;
    width: 80vw;
    margin-top: 4%;
    align-items: center;
    
    .sub_title_farm{
        text-align: left;
        margin-left: 10%;
        margin-top: 1vh;
        color: #394B68;
        font-size: calc(3vmin);
        font-style: bold;
    }

    .input_form{
        margin-top: 2vh;
        margin-left: 12%;
        align-items: center;
        background: #EEFBDF;
        border: 2px solid #EEFBDF;
        border-radius: 10ch;
        color: #4B9100;
        font-size: calc(1.8vmin);
        padding: 0.4vh 1.6vw;
        margin-left: 20px;
    }

    .title_fields{
        text-align: left;
        margin-top: 2vh;
        margin-left: 12%;
        color: #706D6D;
        font-size: calc(1.8vmin);
        font-style: bold;
    }
`;
