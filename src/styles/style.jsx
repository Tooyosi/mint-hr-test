import styled from 'styled-components';
import { WHITE, BLUE } from './colors';


export const NavContainer = styled.div`
    nav{
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
        .input-group-text{
            background-color: transparent;
            border: none;
        }
        .search{
            outline: none !important;
            border: none !important;
        }
    }
    .notification{
        position: relative;
        bottom: 10px;
        background-color: ${BLUE};
        color: ${WHITE};
        right: 7px;
        font-size: 10px;
        padding: 2px 5px;
        border-radius: 50px;
    }

    .hello{
        position: relative;
        
        font-family: Segoe UI;
        font-size: 10px;
        line-height: 2px;
        
        color: #647787;                    
    }
`