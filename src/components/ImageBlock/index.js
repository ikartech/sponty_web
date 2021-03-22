import { lazy } from "react";
import { Row, Col, Image } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const Button = lazy(() => import("../../common/Button"));

const ImageBlock = ({ img, type }) => {
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        {type === "right" ? (
          <Fade right>
            <img src={img} style={{ width: "100%" }} />
          </Fade>
        ) : (
          <Fade left>
            <img src={img} style={{ width: "100%" }} />
          </Fade>
        )}
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(ImageBlock);
