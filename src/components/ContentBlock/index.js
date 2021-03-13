import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";

const ContentBlock = (props) => {
  console.log(props.expand);
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};

export default ContentBlock;
