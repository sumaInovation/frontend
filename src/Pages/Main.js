import React from "react";

import Hero from "../Component/Hero";
import Content from "../Component/Content";
import Card from "../Component/Card";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Main = () => {
  const { pathname } = useLocation();
useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
  return (
    <>
      <Hero />
      <Content />
      <Card />
    </>
  );
};

export default Main;
