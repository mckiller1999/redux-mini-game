import styled from "styled-components";
import React from "react";

// export const Links = (props) =>{

//     return <a className={props.className}>
//         {props.children}
//     </a>

// }
//=>>>>

export const Links = ({ className, children, ...restProps }) => (
  <a className={className} {...restProps}>
    {children}
  </a>
);

export const StyledLink = styled(Links)`
  color: palevioletred;
  font-weight: bold;
`;
