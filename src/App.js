import "./App.css";
import styled from "styled-components";
import { LinkedinIn } from "@styled-icons/fa-brands/LinkedinIn";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Soundcloud } from "@styled-icons/boxicons-logos/Soundcloud";

function App() {
  return (
    <Wrapper>
      <Card>
        <Background />
        <PersonalDetails>
          <h1>Ra'mar K. Leach</h1>
          <H3>Chicago, IL</H3>
        </PersonalDetails>
        <Image />
        <hr />
        <Numbers>
          <Followers>
            <A href="https://www.linkedin.com/in/musicalprof/" target="_blank">
              <LinkedIn></LinkedIn>
              <P1>LinkedIn</P1>
            </A>
          </Followers>
          <Likes>
            <A href="https://github.com/MusicalProf" target="_blank">
              <GitHub></GitHub>
              <P2>GitHub</P2>
            </A>
          </Likes>
          <Photos>
            <A href="https://soundcloud.com/musicalprof" target="_blank">
              <Music></Music>
              <P3>Music</P3>
            </A>
          </Photos>
        </Numbers>
      </Card>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: green;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a2a6c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fdbb2d,
    #b21f1f,
    #1a2a6c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fdbb2d,
    #b21f1f,
    #1a2a6c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Card = styled.div`
  background-color: aquamarine;
  height: 450px;
  width: 450px;
  border-radius: 15px;
  box-shadow: 4px 3px 5px 1px black;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Background = styled.div`
  background-image: url("https://removal.ai/wp-content/uploads/2021/05/image7.png");
  background-size: cover;
  height: 38%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  text-align: center;
`;

const PersonalDetails = styled.div`
  background-color: white;
  text-align: center;
  height: 38%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const Image = styled.div`
  background-image: url("https://avatars.githubusercontent.com/u/23270076?v=4");
  /* background-image: url("././images/Profile.jpg"); */
  background-size: cover;
  border: 5px solid white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-top: 75px;
  position: absolute;
  left: 38%;
`;

const Numbers = styled.div`
  background-color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 38%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
`;

const H3 = styled.h2`
  color: blue;
`;

const Followers = styled.div``;
const Likes = styled.div``;
const Photos = styled.div``;

export const LinkedIn = styled(LinkedinIn)`
  color: rgba(42, 102, 188);
  font-size: 50px;
  height: 50px;
  width: 50px;
`;

export const GitHub = styled(Github)`
  color: #000;
  font-size: 50px;
  height: 50px;
  width: 50px;
`;

export const Music = styled(Soundcloud)`
  color: rgb(237, 97, 43);
  font-size: 50px;
  height: 50px;
  width: 50px;
`;

const P1 = styled.h3`
  color: rgba(42, 102, 188);
`;
const P2 = styled.h3`
  color: #000;
`;
const P3 = styled.h3`
  color: rgb(237, 97, 43);
`;

const A = styled.a`
  text-decoration: none;
`;
// Finish -
// Bonus - Button to change the background color.
