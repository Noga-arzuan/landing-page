import styled from "styled-components";

export  const StyledFooter=styled.footer`
background-color:${({theme})=>theme.colors.footer};
color:#fff;
padding :100px 0 60 px;

ul{
    list-style-type:none;
}

ul li{
    margin-bottom:20px;

}

p{
    text-align: right;
}

`