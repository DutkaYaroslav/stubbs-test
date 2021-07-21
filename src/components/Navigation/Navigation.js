import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={classes.header}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link className={classes.color} to="/jobfocus">
            Job Focus
          </Link>
        </li>
        <li className={classes.item}>
          <Link className={classes.color} to="/softskills">
            Soft Skills
          </Link>
        </li>
        <li className={classes.item}>
          <Link className={classes.color} to="/technicalskills">
            Technical Skills
          </Link>
        </li>
        <li className={classes.item}>
          <Link className={classes.color} to="/functionalexpertise">
            Functional Expertise
          </Link>
        </li>
        <li className={classes.item}>
          <Link className={classes.color} to="/domainexpertise">
            Domain Expertise
          </Link>
        </li>
        <li className={classes.item}>
          <Link className={classes.color} to="/patentexpertise">
            Patent Expertise
          </Link>
        </li>
        <li className={classes.item}>
          <Link className={classes.color} to="/personalexpertise">
            Personal Expertise
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
