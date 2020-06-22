import React from "react";
import PropTypes from "prop-types";
import { theme } from "./Section.module.css";

const Section = ({ children, title }) => (
  <>
    <h2 className={theme}>{title}</h2>
    <div>{children}</div>
  </>
);

Section.protoTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
