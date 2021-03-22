import * as S from "./styles";

const Container = ({ padding, border, children, id }) => (
  <S.Container padding={padding} border={border} id={id}>
    {children}
  </S.Container>
);

export default Container;
