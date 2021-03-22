import { Col, Row } from "antd";
import React, { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const Profile = lazy(() => import("./Profile/profile"));

function Team({ members }) {
  //Group the members into ax3 arrays.
  const memberRows = () => {
    const rows = [];
    let my_row = [];
    for (const i in members) {
      const member = members[i];
      my_row.push(member);
      if (my_row.length % 4 === 0) {
        rows.push(my_row);
        my_row = [];
      }
    }
    my_row.push({
      name: "Join Us",
      avatarUrl: process.env.PUBLIC_URL + "/img/home/smiley-grey.svg",
      description: "This could be you!",
      onClick: () =>
        (window.location.href =
          "mailto:spontysup@gmail.com?subject=Join%20Sponty"),
    });
    if (my_row.length % 4 !== 0) {
      rows.push(my_row);
    }
    return rows;
  };

  return (
    <Container id="team">
      <Col>
        <Row type="flex" justify="center" align="middle">
          <img
            style={{ height: "1.5rem", objectFit: "cover", paddingRight: 12 }}
            src={`${process.env.PUBLIC_URL}/img/home/team_1.png`}
          />
          <div style={{ fontSize: "1.5rem", color: "#676767" }}>
            Meet Our Team
          </div>
          <img
            style={{ height: "1.5rem", objectFit: "cover", paddingLeft: 12 }}
            src={`${process.env.PUBLIC_URL}/img/home/team_2.png`}
          />
        </Row>
        {memberRows().map((i) => {
          return (
            <Row type="flex" justify="center" align="middle">
              {i.map((j) => (
                <Profile user={j} />
              ))}
            </Row>
          );
        })}
      </Col>
    </Container>
  );
}

export default Team;
