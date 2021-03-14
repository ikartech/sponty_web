import { useState, Fragment, lazy } from "react";
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Button = lazy(() => import("../../common/Button"));

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

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
        setVisibility(false);
      }
    };
    return (
      <Fragment>
        <S.CustomNavLinkSmall
          onClick={() => {
            if (!isAtHomePage) {
              history.push("/");
            }
            scrollTo("about");
          }}
        >
          <S.Span>{t("About")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          onClick={() => {
            if (!isAtHomePage) {
              history.push("/");
            }
            scrollTo("mission");
          }}
        >
          <S.Span>{t("Mission")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          onClick={() => {
            if (!isAtHomePage) {
              history.push("/");
            }
            scrollTo("product");
          }}
        >
          <S.Span>{t("Product")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => history.push("/privacy-policy")}>
          <S.Span>{t("Privacy Policy")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => history.push("/terms-of-service")}>
          <S.Span>{t("Terms Of Service")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => {
            if (!isAtHomePage) {
              history.push("/");
            }
            scrollTo("contact");
          }}
        >
          <S.Span>
            <Button>{t("Contact")}</Button>
          </S.Span>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo_small.svg" />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
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
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
