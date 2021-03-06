import styled from 'styled-components';

const Container = styled.nav`
    background:#FFF;
    grid-area: nav;
    height:60px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 30px;
    border-bottom: 1px solid lightgray;

    .navbar_icon{
        display:none;
    }
    .navbar_icon > i{
        font-size:26px;
        color:#a5aaad;
    }
    .navbar_left > a{
        margin-right:30px;
        text-decoration:none;
        color:#a5aaad;
        font-size: 15px;
        font-weight: 700;
    }
    .navbar_left .active_link {
        color:#265acc;
        border-bottom: 3px solid #265acc;
        padding-bottom: 12px;
    }
    .navbar_right{
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .navbar_right > a{
       margin-left:20px;
       text-decoration: none;
    }
    .navbar_right > a > i {
        color:#a5aaad;
        font-size: 10px;
        border-radius: 50px;
        background: #FFF;
        box-shadow:2px 2px 5px #d9d9d9,-2px -2px 5px #FFFF;
        padding:7px;
    }

    @media only screen and (max-width:978px){
        .navbar_icon{
            display: inline;
        }
    }

    @media (max-width:488px){
        .navbar_left{
            display: none;
            
        }
    }

`
export default Container;