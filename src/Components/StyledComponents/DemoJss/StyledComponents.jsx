import React, { Component } from "react";
import { Button, SmButton } from "./ComponentJss/Button";
import { StyledLink } from "./ComponentJss/Link";
import { TextField } from "./ComponentJss/TextField";

export default class StyledComponents extends Component {
  render() {
    return (
      <div>
        {/* cách sử dụng: có thể import vào như 1 thẻ tính năng bình thường, vs như thẻ button 
        -ngoài ra có thể tạo 1 class và css chúng bằng js có bên styled component
        */}
        <Button className="btnStyle" Bg_primary fontSize_2x>
          abc
        </Button>
        <SmButton>xyz</SmButton>

        <StyledLink id="abc" name="abc">
          demo
        </StyledLink>
        <TextField inputColor="purple" />
      </div>
    );
  }
}
