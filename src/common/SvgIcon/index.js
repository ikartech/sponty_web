const SvgIcon = ({ src, width, height, style }) => (
  <img
    src={`/img/svg/${src}`}
    alt={src}
    with={width}
    height={height}
    style={style}
  />
);

export default SvgIcon;
