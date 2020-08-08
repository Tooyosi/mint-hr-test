import styled from 'styled-components';
import { WHITE, BLUE, GREEN } from './colors';


export const NavContainer = styled.div`
    z-index: 10;
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

export const SidebarStyle = styled.div`
        background-color: white;
        // width: 260px;
        img, i{
            margin-right: 10px
        }
        .btn-success{
            background: ${GREEN} !important;
            border-radius: 30px;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            text-align: center;
            letter-spacing: 0.2px;            
        }
        a{
            display: block;
            Font Family: Segoe UI;
            Font Style: Regular;
            Font Size: 11px;
            &:hover{
                cursor: pointer;
                text-decoration: none;
            }
        }
        .active{
            background-color: #eaf1ff;
            padding: 10px 0
            border-left: 3px solid ${BLUE};;
        }
`