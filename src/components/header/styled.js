import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    background-color: #000;
    color: #ffffff;

    .container{
        padding: 5px 100px;
        display: flex;
        align-items: center;
    }

    .logo{
        flex: 1;

        img{
            width: 120px;
        }
    }

    nav{
        ul{
            display: flex;
        }
        li{
            list-style: none;
            margin-left: 20px;
        }
    }

    .logout{
        border-style: solid;
        border-color: #ffffff;
        border-radius: 10%;
        border-width: 2px;
        padding: 0px 1vh;
    }
`;