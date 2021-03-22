const SvgIcon = ({ src, width, height, style }) => (
  <img
    src={`${process.env.PUBLIC_URL}${src}`}
    alt={src}
    with={width}
    height={height}
    style={style}
  />
);

export default SvgIcon;
