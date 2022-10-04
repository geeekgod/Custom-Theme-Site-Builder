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
        {/* <p className="heading">Templates</p> */}
        {theme &&
          theme.map((the) => {
            console.log(the?.id, "id");
            console.log(the?.body, "body");
            return (
              <Link key={the.id} to={`/cards/${the?.id}`}>
                <div
                  className="content"
                  style={{
                    color: the.primary,
                    fontSize: the.fontSize1,
                    background: the.bgPrimary,
                  }}
                >
                  <h2 className="card">{the?.title}</h2>
                  <p
                    className="card"
                    style={{
                      color: the.secondary,
                      fontSize: the.fontSize2,
                    }}
                  >
                    {the?.description}
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
