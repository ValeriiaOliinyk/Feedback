import React from "react";
import PropTypes from "prop-types";
import { text } from "./Notification.module.css";

const Notificaion = ({ message }) => <p className={text}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notificaion;
