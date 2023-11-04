"use client";
import { FunctionComponent } from "react";
import { FiMapPin } from "react-icons/fi";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import IconProvider from "@/provider/icon-provider";
interface MediaIconsProps {}

const MediaIcons: FunctionComponent<MediaIconsProps> = () => {
  return (
    <div className="contact-info flex gap-4 ">
      <a
        href="https://api.whatsapp.com/send/?phone=972544476226&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <IconProvider bgColor="#ffffff">
          <AiOutlineWhatsApp />
        </IconProvider>
      </a>
      <a href="https://maps.app.goo.gl/wiWzWCSUmMfCsX9q6" target="_blank">
        <IconProvider bgColor="#ffffff">
          <FiMapPin />
        </IconProvider>
      </a>
      <a href="https://www.instagram.com/apriltours1/" target="_blank">
        <IconProvider bgColor="#ffffff">
          <AiOutlineInstagram />
        </IconProvider>
      </a>
      <a href="https://www.tiktok.com/@apriltours1" target="_blank">
        <IconProvider bgColor="#ffffff">
          <FaTiktok />
        </IconProvider>
      </a>
      <a href="https://www.facebook.com/apriltours1/" target="_blank">
        <IconProvider bgColor="#ffffff">
          <FaFacebookF />
        </IconProvider>
      </a>
    </div>
  );
};

export default MediaIcons;
