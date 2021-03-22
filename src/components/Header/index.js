import { useState, Fragment, lazy } from "react";
import { Row, Col, Button, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { scrollTo } from "../../common/util/util";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));

const Header = ({ t, displayItems }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const isAtHomePage = location !== undefined && location.pathname === "/";

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = ({ textColor }) => {
    return (
      <div style={{ marginTop: "5vh", marginRight: "1vw" }}>
        <Fragment>
          <S.CustomNavLinkSmall
            onClick={() => {
              if (!isAtHomePage) {
                history.push("/");
              }
              scrollTo("team", () => {
                setVisibility(false);
              });
            }}
          >
            <S.Span style={{ color: textColor }}>{t("Team")}</S.Span>
          </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall onClick={() => history.push("/privacy-policy")}>
            <S.Span style={{ color: textColor }}>{t("Privacy Policy")}</S.Span>
          </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall
            onClick={() => history.push("/terms-of-service")}
          >
            <S.Span style={{ color: textColor }}>{t("EULA")}</S.Span>
          </S.CustomNavLinkSmall>
          <Button
            size={40}
            onClick={() => {
              if (!isAtHomePage) {
                history.push("/");
              }
              scrollTo("contact");
            }}
            style={{
              marginLeft: 8,
              backgroundImage: "linear-gradient(#9DEDFF, #2DD3DE)",
              color: "white",
              borderRadius: 20,
            }}
          >
            {t("Contact")}
          </Button>
        </Fragment>
      </div>
    );
  };

  return (
    <S.Header style={{ paddingTop: 0 }}>
      <S.Span
        style={{
          backgroundImage: "linear-gradient(#F79AFF, #E339F3)",
          transform: "translate(0%, -40%)",
          position: "absolute",
          width: "65vw",
          height: "65vw",
          zIndex: -2,
          right: 0,
          borderRadius: "50%",
        }}
      ></S.Span>
      <div>
        <Row type="flex" justify="space-between" gutter={20}>
          <div
            aria-label="homepage"
            style={{ flex: 1, paddingTop: 0, display: "flex" }}
            onClick={() => history.push("/")}
          >
            <S.Span>
              <img
                style={{
                  width: "40%",
                  height: "100%",
                  objectFit: "cover",
                  overflow: "hidden",
                }}
                src={process.env.PUBLIC_URL + "/img/home/half_circle_icon.png"}
              />
            </S.Span>
          </div>
          <div style={{ position: "relative", maxWidth: "inherit" }}>
            <S.NotHidden>
              <MenuItem textColor={visible ? "red" : "white"} />
            </S.NotHidden>
            <S.Burger onClick={showDrawer}>
              <S.Outline style={{ color: "white" }} />
            </S.Burger>
          </div>
        </Row>

        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
          style={{ flex: 1 }}
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </div>
    </S.Header>
  );
};

export default withTranslation()(Header);
