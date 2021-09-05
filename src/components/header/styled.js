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
`;