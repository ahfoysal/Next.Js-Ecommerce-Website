import React from "react";
import Link from "next/link";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import {
  required,
  maxLength20,
  minLength8,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
} from "../../helpers/validation";
import {  FaTwitter,
  FaFacebookF,
  FaGoogle } from 'react-icons/fa';
import { Phone,  ShieldLock } from 'react-bootstrap-icons';


const SignInForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <form
      onSubmit={onSubmit}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <input
        name="email"
        type="text"
        label="Mobile no"
        component={renderFormGroupField}
        placeholder="Mobile no without country code"
        icon={Phone}
        // validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
        required={true}
        max="999999999999999"
        min="9999"
        className="mb-3"
      />
      <input
        name="password"
        type="password"
        label="Your password"
        component={renderFormGroupField}
        placeholder="******"
        icon={ShieldLock}
        validate={[required, maxLength20, minLength8]}
        required={true}
        maxLength="20"
        minLength="8"
        className="mb-3"
      />
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={submitting}
        >
          Log In
        </button>
      </div>
      <Link className="float-start" href="/account/signup" title="Sign Up">
        Create your account
      </Link>
      <Link
        className="float-end"
        href="/account/forgotpassword"
        title="Forgot Password"
      >
        Forgot password?
      </Link>
      <div className="clearfix"></div>
      <hr></hr>
      <div className="row">
        <div className="col- text-center">
          <p className="text-muted small">Or you can join with</p>
        </div>
        <div className="col- text-center">
          <Link href="/" className="btn btn-light text-white bg-twitter me-3">
            <FaTwitter />
          </Link>
          <Link href="/" className="btn btn-light text-white me-3 bg-facebook">
            <FaFacebookF className="mx-1" />
          </Link>
          <Link href="/" className="btn btn-light text-white me-3 bg-google">
            <FaGoogle  className="mx-1" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm