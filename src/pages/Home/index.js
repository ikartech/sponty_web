import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import { BrowserView, MobileView } from "react-device-detect";
import { shuffleArray } from "../../common/util/util";
import { Col, Row } from "antd";
import Fade from "react-reveal/Fade";
import { members } from "./members";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ImageBlock = lazy(() => import("../../components/ImageBlock"));
const ImagesBlock = lazy(() => import("../../components/ImagesBlock"));
const Team = lazy(() => import("../../components/Team"));

const Home = () => {
  return (
    <div id="home">
      <ScrollToTop />
      <Container>
        <ContentBlock
          type="right"
          first="true"
          title={IntroContent.title}
          content={IntroContent.text}
          firstText={IntroContent.firstText}
          secondText={IntroContent.secondText}
          button={IntroContent.button}
          imageStyle={{
            width: "90%",
            height: "100%",
            objectFit: "cover",
            overflow: "hidden",
          }}
          icon={process.env.PUBLIC_URL + "/img/home/content_images.png"}
          id="intro"
        />

        <BrowserView>
          <Fade right>
            <Row
              type="flex"
              justify="end"
              align="middle"
              style={{ paddingBottom: 40 }}
            >
              <a
                href="https://apps.apple.com/us/app/sponty-spontaneous-events/id1558525532"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/home/app_store.svg"}
                  style={{ objectFit: "contain", width: 160 }}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.sponty.android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/home/play_store.png"}
                  style={{ objectFit: "contain", width: 200 }}
                />
              </a>
            </Row>
          </Fade>
          <ImageBlock
            id="content"
            img={process.env.PUBLIC_URL + "/img/home/screenshots.png"}
          />
          <ImagesBlock
            leftImg={
              process.env.PUBLIC_URL + "/img/home/content_row_1_img1.png"
            }
            rightImg={
              process.env.PUBLIC_URL + "/img/home/content_row_1_img2.png"
            }
            leftImgWidth="45%"
            rightImgWidth="55%"
            addPaddingToRight
          />
          <ImagesBlock
            leftImg={
              process.env.PUBLIC_URL + "/img/home/content_row_2_img1.png"
            }
            rightImg={
              process.env.PUBLIC_URL + "/img/home/content_row_2_img2.png"
            }
            leftImgWidth="42%"
            rightImgWidth="58%"
            addPaddingToLeft
          />
          <ImagesBlock
            leftImg={
              process.env.PUBLIC_URL + "/img/home/content_row_3_img1.png"
            }
            rightImg={
              process.env.PUBLIC_URL + "/img/home/content_row_3_img2.png"
            }
            leftImgWidth="50%"
            rightImgWidth="50%"
            addPaddingToRight
          />
        </BrowserView>

        <MobileView>
          <Fade right>
            <Col
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: 28 }}
            >
              <a
                href="https://apps.apple.com/us/app/sponty-spontaneous-events/id1558525532"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/home/app_store.svg"}
                  style={{ objectFit: "contain", width: 160 }}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.sponty.android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/home/play_store.png"}
                  style={{ objectFit: "contain", width: 200 }}
                />
              </a>
            </Col>
          </Fade>
          <ImageBlock
            id="content"
            img={process.env.PUBLIC_URL + "/img/home/ss_row_2.png"}
          />
          <ImageBlock
            type="right"
            img={process.env.PUBLIC_URL + "/img/home/ss_row_3.png"}
          />
          <ImageBlock img={process.env.PUBLIC_URL + "/img/home/ss_row_4.png"} />

          <ImageBlock
            type="right"
            img={process.env.PUBLIC_URL + "/img/home/content_row_1_img1.png"}
          />
          <ImageBlock
            img={process.env.PUBLIC_URL + "/img/home/content_row_1_img2.png"}
          />

          <ImageBlock
            type="right"
            img={process.env.PUBLIC_URL + "/img/home/content_row_2_img2.png"}
          />
          <ImageBlock
            img={process.env.PUBLIC_URL + "/img/home/content_row_2_img1.png"}
          />

          <ImageBlock
            type="right"
            img={process.env.PUBLIC_URL + "/img/home/content_row_3_img1.png"}
          />
          <ImageBlock
            img={process.env.PUBLIC_URL + "/img/home/content_row_3_img2.png"}
          />
        </MobileView>
      </Container>
      <ImageBlock
        type="right"
        img={process.env.PUBLIC_URL + "/img/home/activities.png"}
      />
      <Team members={shuffleArray(members)} />
    </div>
  );
};

export default Home;
