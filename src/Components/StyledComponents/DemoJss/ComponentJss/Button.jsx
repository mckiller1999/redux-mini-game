//xây dựng css cho 1 thẻ bằng tính năng styled
//cách làm
import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  background: ${(props) => (props.Bg_primary ? "blue" : "orange")};
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  padding: 1rem;
  opacity: 1;
  &:hover {
    opacity: 0.7;
    transition: all 1s;
  }
  &.btnStyle {
    font-size: ${(props) => (props.fontSize_2x ? "2rem" : "16px")};
  }
`;

//ngoài ra styled component còn có tính kế thừa từ thuộc tính cũ vd:

export const SmButton = styled(Button)`
  background-color: orange;
  font-size: 16px;
  padding: 0.5rem;
`;
// khi này SmButton sẽ kế thừa các thuộc tính từ Button nếu có sự thay đổi sẽ đè sự thay đổi lên những thuộc tính tương ứng
