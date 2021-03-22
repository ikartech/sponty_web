import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ImageBlock = lazy(() => import("../../components/ImageBlock"));
const ImagesBlock = lazy(() => import("../../components/ImagesBlock"));

const Home = () => {
  return (
    <div>
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
          <ImageBlock
            img={process.env.PUBLIC_URL + "/img/home/screenshots.png"}
          />
          <ImagesBlock
            leftImg={
              process.env.PUBLIC_URL + "/img/home/content_row_1_img1.png"
            }
            rightImg={
              process.env.PUBLIC_URL + "/img/home/content_row_1_img2.png"
            }
            leftImgWidth="40%"
            rightImgWidth="60%"
          />
          <ImagesBlock
            leftImg={
              process.env.PUBLIC_URL + "/img/home/content_row_2_img1.png"
            }
            rightImg={
              process.env.PUBLIC_URL + "/img/home/content_row_2_img2.png"
            }
            leftImgWidth="45%"
            rightImgWidth="55%"
          />
          <ImagesBlock
            leftImg={
              process.env.PUBLIC_URL + "/img/home/content_row_3_img1.png"
            }
            rightImg={
              process.env.PUBLIC_URL + "/img/home/content_row_3_img2.png"
            }
            leftImgWidth="40%"
            rightImgWidth="60%"
          />
        </BrowserView>

        <MobileView>
          <ImageBlock img={process.env.PUBLIC_URL + "/img/home/ss_row_2.png"} />
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
    </div>
  );
};

export default Home;
