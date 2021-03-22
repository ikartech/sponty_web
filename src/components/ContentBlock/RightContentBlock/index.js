import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";
import { scrollTo } from "../../../common/util/util";

import * as S from "./styles";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
  expand,
  imageStyle,
  firstText,
  secondText,
  buttonStyle,
}) => {
  return (
    <S.RightBlockContainer>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h5 style={{ fontSize: "3.5rem", color: "#747474" }}>
                {t(title)}
              </h5>
              {firstText ? (
                <div
                  style={{
                    marginBottom: 12,
                    fontSize: "2rem",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#ffb800", lineHeight: 1 }}>
                    {t(firstText)}
                  </div>{" "}
                  <span
                    style={{
                      backgroundImage: "linear-gradient(#9DEDFF, #2DD3DE)",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    <S.Gradienttext>{t(secondText)}</S.Gradienttext>
                  </span>
                </div>
              ) : (
                <S.Content>{t(content)}</S.Content>
              )}
              <S.ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        style={item.style}
                        width="true"
                        onClick={() => scrollTo("content")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <SvgIcon
                src={icon}
                className="about-block-image"
                style={
                  (expand !== undefined && expand === true
                    ? { width: "100%", height: "100%" }
                    : undefined,
                  { ...imageStyle })
                }
              />
            </div>
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
