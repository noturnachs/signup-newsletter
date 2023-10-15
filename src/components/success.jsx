import { useLocation, useNavigate } from "react-router-dom";
import CheckMark from "../assets/images/icon-success.svg";
import Xmark from "../assets/images/iconmonstr-x-mark-4.svg";

const Success = () => {
  const Nav = useNavigate();
  const location = useLocation();
  const eemail = location.state?.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    Nav("/");
  };

  if (eemail == "No email provided") {
    return (
      <>
        <div className="formContainer">
          <div className="errorBox">
            <img src={Xmark} alt="Check" width="60" height="60" />
            <div className="errorTitle">Error adding to subscribers.</div>
            <span className="successText">
              <b>{eemail}</b>
            </span>
            <button type="button" onClick={handleSubmit}>
              Dismiss message
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="formContainer">
          <div className="successBox">
            <img src={CheckMark} alt="Check" width="50" height="50" />
            <div className="successTitle">Thanks for subscribing!</div>
            <span className="successText">
              A confirmation email has been sent to&nbsp;
              <b>{eemail}</b>. Please open it and click the button inside to
              confirm your subscription.
            </span>
            <button type="button" onClick={handleSubmit}>
              Dismiss message
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Success;
