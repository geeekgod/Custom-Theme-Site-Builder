import React from "react";
import { Link } from "react-router-dom";

import { ThemesInterface } from "../../types/interface";

interface cardsProps {
  selectedTheme: number;
  theme: Array<ThemesInterface>;

  // key: number;
}
const Cards = ({ selectedTheme, theme }: cardsProps) => {
  return (
    <>
      <div id="Cards">
        <p className="heading">Templates</p>
        {theme &&
          theme.map((the) => {
            console.log(the?.id, "id");
            console.log(the?.body, "body");
            return (
              <Link key={the.id} to={`/cards/${the?.id}`}>
                <div
                  style={{
                    color: theme[selectedTheme].primary,
                    fontSize: theme[selectedTheme].fontSize1,
                  }}
                >
                  <h2>{the.title}</h2>
                  <p
                    style={{
                      color: theme[selectedTheme].secondary,
                      fontSize: theme[selectedTheme].fontSize2,
                    }}
                  >
                    {the.body}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Cards;
