import * as S from "./styles";

const Button = ({ color, width, children, onClick, style }) => (
  <S.Button color={color} width={width} onClick={onClick} style={style}>
    {children}
  </S.Button>
);

export default Button;
