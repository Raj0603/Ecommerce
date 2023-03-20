import "./ForgotPassword.css";
import React, { useState, useEffect } from "react";
import Loading from "../Loader/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../actions/userActions";
import { useAlert } from "react-alert";
import Metadata from "../Metadata";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );
  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      alert.success(message);
    }
  }, [error, alert, dispatch, message]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Metadata title="Forgot Password" />
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox"></div>
            <h2>Forgot Password</h2>
            <form
              className="forgotPasswordForm"
              onSubmit={forgotPasswordSubmit}
            >
              <div className="forgotPasswordEmail">
                <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <input type="submit" value="Send" className="forgotPasswordBtn" />
            </form>
          </div>
        </>
      )}
    </>
  );
};
export default ForgotPassword;
