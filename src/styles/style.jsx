import styled from 'styled-components';
import { WHITE, BLUE, GREEN, YELLOW, GREY } from './colors';


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
        min-height: 91vh;
        // height: 100%;
        position: absolute;
        width: 260px;
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

export const MainStyle = styled.div`
        margin-left: 260px;
        max-height: 90vh;
        overflow: auto;
`

export const WhiteBackground = styled.div`
    // margin: auto 2px;
    background: #FFFFFF;
    border: 1px solid #EEF8FD;
    box-sizing: border-box;
    border-radius: 2px;
    .btn-light{
        background: #CCCFD4;
        &:hover{
            // transform: rotate(-180deg);

        }
    }

    .progress{
        background-color: ${YELLOW};
        height: 4px;
    }
    .orders-txt{
        font-family: Segoe UI;
        font-size: 14px;
        line-height: 16px;
        color: #262626;
    }
    .yellow-color{
        color: ${YELLOW};
        font-weight: bold
    }

    .green-color{
        color: ${GREEN};
        font-weight: bold

    }

    
    .blue-color{
        color: ${BLUE};
        font-weight: bold

    }
`

export const StyledSelect = styled.select`
    color: ${BLUE};
    background-color: transparent;
    border: none;
    outline: none;
    font-size: small;
    margin-left: 5px;
    margin-right: 5px;
`

export const StyledShowSelect = styled.select`
    background-color: transparent !important;
    font-size: small;
    .option{
        &:hover{
            background-color: #F4F4F4 !important;
        }
    }
`


export const StyledSearch = styled.div`   
    width: 200px;
    border-bottom: 0.5px solid ${GREY};
    input{
        width: 90%;
        font-family: Segoe UI;
        font-size: 11px;
        line-height: 15px;
        background-color: transparent;
        border: none;
        outline: none;
        color: ${GREY};
    }
`

export const StyledTable = styled.table`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    thead{
        background: #EAEEF0;
    }
    td{
        padding: 15px;

    }
    tbody{
        background-color: ${WHITE};
        td{
            border-bottom: 1px solid #CCCFD4;   
            font-family: Segoe UI;
            font-size: 14px;
            line-height: 19px;
        }
    }
    .ball{
        width: 36px;
        height: 36px;
        left: 317px;
        top: 725px;
        color: ${WHITE};
        border-radius: 50px;
        padding: 10px;
        font-size: small;
        background: #7F8FA4;
    }

`