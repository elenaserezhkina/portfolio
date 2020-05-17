import React from "react";
// import PropTypes from 'prop-types';
import _Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Card = styled(_Card)`
  width: 80%;
  margin: 0 auto;
`;

const AboutMe = (props) => {
  return (
    <div>
      <h1>About me here</h1>
      <Card>
        <CardContent>
          {/* <Typography variant="h5" component="h2">
             About me
          </Typography> */}
          <br />
          <Typography variant="body2" component="p">
            In the middle of 2019, I’ve challenged myself to become a Web
            Developer and started to learn programming by myself 👩‍💻.
            <br />
            After a few months, of self-studying, I won a scholarship at Wild
            Code School and immediately enrolled for a 5-month Fullstack WebDev
            course. It was a great time during which I had a mixture of in-class
            and online learning, dojos and online challenges, attended
            workshops, 2 hackathons and worked on 3 projects. I gained lots of
            important tech skills, used SCRUM agile methodology with my team,
            and got experience working with a client on a real project.
            <br />
            <br />
            💻 Technologies used: JavaScript, HTML5, CSS3, Bootstrap, ReactJS,
            Material UI, Node.js, Express.js, MySQL, Git, Figma etc.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <br />
      <br />
      <br />
      <span>Credits:</span>
      <small>
        <b>Sun</b> icon made by
        <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a>
        from <a href="https://www.flaticon.com">www.flaticon.com</a>
      </small>
      <br />
      <small>
        <b>Moon</b> icon made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </small>

      {/* <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div> */}
    </div>
  );
};

//Props that this components accepts
// AboutMe.propTypes = {
//     name: PropTypes.string,

// };

export default AboutMe;
