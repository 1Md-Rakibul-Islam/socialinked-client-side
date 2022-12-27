import React from "react";
import { Link } from "react-router-dom";
import socialinked from "../../../assets/icons/socialinked-icon.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <Link to='/' className="justify-between items-baseline md:flex hidden">
          <img className="w-[120px]" src={socialinked} alt="" />
          <h2 className="text-purple-800 text-3xl font-bold">ed</h2>
        </Link>
        <p>
            SociaLinked
          <br />
          Providing reliable tech since 2022
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
