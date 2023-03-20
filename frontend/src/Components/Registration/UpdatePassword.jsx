import "./UpdatePassword.css";

import React, { Fragment, useState, useEffect } from "react";
import Loading from "../Loader/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from "@fortawesome/fontawesome-free-solid";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  updatePassword,
} from "../../actions/userActions";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import Metadata from "../Metadata";

const UpdatePassword = () => {
  const dispatch = useDispatch();

  const alert = useAlert();
  const navigate = useNavigate();

  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [oldpassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("oldPassword", oldpassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(updatePassword(myForm));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Password updated successfully");

      navigate("/account");
      dispatch({ type: UPDATE_PASSWORD_RESET });
    }
  }, [error, alert, dispatch, navigate, isUpdated]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Metadata title="Update Password" />
          <div className="updatePasswordContainer">
            <div className="updatePasswordBox"></div>
            <h2>Update Password</h2>
            <form
              className="updatePasswordForm"
              onSubmit={updatePasswordSubmit}
            >
              <div className="signUpPassword">
                <FontAwesomeIcon icon={faLockOpen} className="fa-lg" />
                <input
                  type="password"
                  placeholder="Old Password"
                  required
                  value={oldpassword}
                  onChange={(e)=> setOldPassword(e.target.value)}
                />
              </div>
              <div className="signUpPassword">
                <FontAwesomeIcon icon={faLockOpen} className="fa-lg" />
                <input
                  type="password"
                  placeholder="New Password"
                  required
                  value={newPassword}
                  onChange={(e)=> setNewPassword(e.target.value)}
                />
              </div>
              <div className="signUpPassword">
                <FontAwesomeIcon icon={faLockOpen} className="fa-lg" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  value={confirmPassword}
                  onChange={(e)=> setConfirmPassword(e.target.value)}
                />
              </div>

              <input
                type="submit"
                value="Update Password"
                className="updatePasswordBtn"
              />
            </form>
          </div>
        </>
      )}
    </>
  );
};
export default UpdatePassword;
