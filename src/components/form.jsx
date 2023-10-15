import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckMark from "../assets/images/icon-list.svg";
import ImageRight from "../assets/images/illustration-sign-up-desktop.svg";

const Form = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  console.log(success);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email != "" && email.includes("@")) {
      setSuccess(true);
      navigate("/success", { state: { email } });
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="formContainer">
        <div className="innerBox">
          <div className="leftSideContents">
            <div className="leftTitle">Stay Updated!</div>
            <div className="leftSideBody"></div>
            Join 60,000+ product managers receiving monthly updates on:
            <div className="checkList">
              <span className="checkListItem">
                <img src={CheckMark} alt="CheckMark" height="20" width="20" />
                &nbsp;&nbsp;Product discovery and building what matters
              </span>

              <span className="checkListItem">
                <img src={CheckMark} alt="CheckMark" height="20" width="20" />
                &nbsp;&nbsp;Measuring to ensure updates are a success
              </span>

              <span className="checkListItem">
                <img src={CheckMark} alt="CheckMark" height="20" width="20" />
                &nbsp;&nbsp;And much more!
              </span>
            </div>
            <div className="emailAddressInput">
              <div className="label_ni">
                <label htmlFor="email">Email Address</label>
                {error && (
                  <span className="errorMsg">Valid email required!</span>
                )}
              </div>

              <input
                type="email"
                placeholder="email@company.com"
                id="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
                className={error ? "errorClass" : ""}
              />
              <button
                type="submit"
                id="submit"
                name="submit"
                onClick={handleSubmit}
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
          <div className="imageContainer">
            <img src={ImageRight} alt="Image Right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
