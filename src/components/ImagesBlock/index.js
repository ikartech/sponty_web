import { lazy } from "react";
import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const ImagesBlock = ({ leftImg, rightImg, leftImgWidth, rightImgWidth }) => {
  return (
    <S.ImagesBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade left>
          <img
            src={leftImg}
            style={{
              width: leftImgWidth ? leftImgWidth : "50%",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          />
        </Fade>
        <Fade right>
          <img
            src={rightImg}
            style={{
              width: rightImgWidth ? rightImgWidth : "50%",
              paddingRight: "5%",
              paddingLeft: "5%",
            }}
          />
        </Fade>
      </Row>
    </S.ImagesBlock>
  );
};

export default withTranslation()(ImagesBlock);
