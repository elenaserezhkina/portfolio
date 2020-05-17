import React from "react";
// import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import _Card from "@material-ui/core/Card";
import _CardHeader from "@material-ui/core/CardHeader";
import _CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";

const Card = styled(_Card)`
  margin: 0 auto;
  padding: 15px;
`;
const CardHeader = styled(_CardHeader)`
  color: blue;
  text-align: center;
`;
const CardBody = styled.div`
  display: flex;
`;
const RightSection = styled.div`
  width: 50%;
`;
const LeftSection = styled.div`
  width: 50%;
`;
const CardMedia = styled(_CardMedia)`
  color: white;
  height: 300px;
`;
const Technologies = styled.div`
  max-width: 300px;
`;

const ProjectCardBig = (props) => {
  return (
    <div>
      <Card>
        <CardHeader
          title={props.project.title}
          subheader={props.project.subheader}
        />
        <CardBody>
          <RightSection>
            <Technologies>
              I worked as a{" "}
              <span style={{ color: "#f50057" }}>
                {props.project.specialization} Developer
              </span>
              ,
              <br /> using {props.project.technologies.join(", ")}.
              <br />
              <br />
              Some of my tasks were:
            </Technologies>
          </RightSection>
          <LeftSection>
            <CardMedia image="/lacesUp.png" title={props.project.title} />
          </LeftSection>
        </CardBody>
      </Card>
    </div>
  );
};

//Props that this components accepts
// AboutMe.propTypes = {
//     name: PropTypes.string,

// };

export default ProjectCardBig;
