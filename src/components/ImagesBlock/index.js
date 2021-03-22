import { lazy } from "react";
import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const Button = lazy(() => import("../../common/Button"));

const ImagesBlock = ({ leftImg, rightImg, leftImgWidth, rightImgWidth }) => {
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade left>
          <img
            src={leftImg}
            style={{ width: leftImgWidth ? leftImgWidth : "50%" }}
          />
        </Fade>
        <Fade right>
          <img
            src={rightImg}
            style={{ width: rightImgWidth ? rightImgWidth : "50%" }}
          />
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(ImagesBlock);
