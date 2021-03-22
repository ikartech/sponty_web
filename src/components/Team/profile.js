import React from "react";
import {
  FaGlobe,
  FaGithub,
  FaMediumM,
  FaDribbble,
  FaBehance,
  FaLinkedin,
} from "react-icons/fa";
import { Col, Row } from "antd";

function Profile({ user }) {
  const iconSize = 16;

  const linkItem = ({ link, name, icon }) => {
    return link !== undefined ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div style={{ color: "black", paddingRight: 4, paddingLeft: 4 }}>
          {icon}
        </div>
      </a>
    ) : (
      <div />
    );
  };

  return (
    <Col
      lg={8}
      md={8}
      sm={24}
      style={{ padding: 16 }}
      type="flex"
      justify="center"
      align="middle"
    >
      <div>
        <img
          src={user.avatarUrl}
          style={{ borderRadius: "50%", width: 150, height: 150 }}
        />
      </div>
      <div
        style={{
          fontSize: "1.1rem",
          color: "#646464",
          paddingTop: 4,
        }}
      >
        {user.name}
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          color: "#848484",
          paddingBottom: 12,
        }}
      >
        {user.description}
      </div>
      {user.links !== undefined ? (
        <Row type="flex" justify="center" align="middle">
          {linkItem({
            icon: <FaGithub size={iconSize} />,
            link: user.links.github,
            name: "GitHub",
          })}
          {linkItem({
            icon: <FaLinkedin size={iconSize} />,
            link: user.links.linkedin,
            name: "Linkedin",
          })}
          {linkItem({
            icon: <FaGlobe size={iconSize} />,
            link: user.links.weburl,
            name: "Website",
          })}
          {linkItem({
            icon: <FaMediumM size={iconSize} />,
            link: user.links.medium,
            name: "Medium",
          })}
          {linkItem({
            icon: <FaDribbble size={iconSize} />,
            link: user.links.dribble,
            name: "Dribble",
          })}
          {linkItem({
            icon: <FaBehance size={iconSize} />,
            link: user.links.behance,
            name: "Behance",
          })}
        </Row>
      ) : (
        <div />
      )}
    </Col>
  );
}

export default Profile;
