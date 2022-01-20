import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

const MainBanner = ({ ...props }) => {
  let { categoria } = useParams(),
    location = useLocation();

  const { getRandomImgByTerm } = api.Unsplash,
    defaultImg =
      "https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif",
    defaultTerm = "nature",
    [isLoading, setIsLoading] = useState(true),
    [img, setImg] = useState(defaultImg),
    [term, setTerm] = useState(categoria ? categoria : defaultTerm),
    { title } = props;

  useEffect(() => {
    const imgCallback = (url) => {
      if (!url.includes("source-404")) {
        setImg(url);
        setTimeout(setIsLoading(false), 1500);
      } else {
        setImg(defaultImg);
        setIsLoading(true);
        changeTheme();
      }
    };
    getRandomImgByTerm(term, imgCallback);
  }, [getRandomImgByTerm, term]);

  useEffect(() => {
    if (categoria) {
      setTerm(categoria);
    } else {
      setTerm(defaultTerm);
    }
  }, [location, categoria]);

  const changeTheme = (event = undefined) => {
    if (event !== undefined) {
      event.preventDefault();
    }
    const newTerm = prompt(
      "Qual tema deseja?\nVocê pode definir mais de um tema, separando-os por vírgula.\nO termo deve ser escrito em inglês."
    );
    if (newTerm && newTerm !== undefined) {
      setTerm(newTerm.replace(/ /gi, ""));
      setImg(defaultImg);
      setIsLoading(true);
    } else {
      return;
    }
  };

  return (
    <section
      className={`main-banner ${isLoading ? "loading" : ""}`}
      style={{ backgroundImage: `url(${img}` }}
    >
      <h1 className="main-banner__title">{title ? title : "MAIN BANNER"}</h1>
      <a href="/produto" className="main-banner__btn" onClick={changeTheme}>
        Trocar tema
      </a>
    </section>
  );
};

export default MainBanner;
