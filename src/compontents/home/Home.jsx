import avatar from "../../../src/avatar.jpg";
import { AiFillGithub } from "react-icons/ai";
import "./styleImg.css";

const Home = () => {
  return (
    <div className="home px-5 pt-2">
      <div className="d-flex align-items-center">
        <h4 className="me-5">
          Hello, My name is Mariam. I’m a front-end engineer. I describe myself
          as a passionate developer who loves coding, open source, and the web
          platform.
        </h4>
        <img src={avatar} alt="avatar" className="image" />
      </div>

      <h4 className="text-primary fw-bold fs-3">
        Please feel free to contact me at any time &nbsp;
        <span>
          <a href="https://github.com/Mariam-Ashraf">
            <AiFillGithub />
          </a>
        </span>
      </h4>
    </div>
  );
};

export default Home;
