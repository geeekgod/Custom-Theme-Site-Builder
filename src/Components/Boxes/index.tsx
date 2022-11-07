import { ThemeContext } from "../../Context/ThemeContext";
import { ThemesInterface } from "../../types/interface";
import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import ReactDOM from "react-dom";
import App from "../../App";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface boxesProps {
  selectedTheme: number;
  theme: Array<ThemesInterface>;
}

const Boxes = ({ selectedTheme, theme }: boxesProps) => {
  const navigate = useNavigate();

  const [template, setTemplate] = useState(theme[0]);
  const [text, setText] = useState(`${template.body}`);
  const [title, setTitle] = useState(`${template.title}`);
  const [submitted, setSubmitted] = useState(false);

  const location = useLocation();

  const locationPath = location.pathname.split("/");
  const locationId = parseInt(locationPath[locationPath.length - 1]);

  useEffect(() => {
    const template = theme.find((i) => i.id === locationId);
    if (template) {
      setTemplate(template);
    }
  }, [locationId, theme]);

  const [alldata, setAllData] = useState();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(text, "textkk");
    const data = {
      text1: text,
      title1: title,
    };
    //  setAllData(data)

    //   onClick={() => {
    //   const orderData = {
    //     customer_id: customerId,
    //     customer_name: customerName,
    //     contact_number: parseInt(customerContact),
    //     customer_address: customerAddr,
    //     customer_email: cusEmailAddr,
    //     total: total,
    //     date: `${new Date().getDate()}-${
    //       new Date().getMonth() + 1
    //     }-${new Date().getFullYear()}`,
    //     items_attributes: data.slice(0, data.length - 1),
    //   };
    //   addOrder(orderData);
    // }}

    navigate("/finaldisplay/");
    // navigate("/orders/" + res.data.id)
  };

  const { setSelectedTheme } = useContext(ThemeContext);
  return (
    <>
      {
        <div
          key={template.id}
          className="container"
          style={{ background: theme[selectedTheme].bgPrimary }}
        >
          <TextareaAutosize
            style={{ fontSize: theme[selectedTheme].fontSize1 }}
            value={title}
            onChange={(e) => {
              const { value } = e.target;
              setTitle(value);
            }}
          />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <TextareaAutosize
                  placeholder="Content goes here...."
                  style={{
                    color: theme[selectedTheme].secondary,
                    backgroundColor: theme[selectedTheme].bgPrimary,
                    fontSize: theme[selectedTheme].fontSize2,
                    border: "none",
                  }}
                  value={text}
                  onChange={(e) => {
                    const { value } = e.target;
                    setText(value);
                  }}
                  // defaultValue={template.body}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>hello</Box>
            </Grid>
          </Grid>

          <button onClick={handleSubmit}>Save</button>
        </div>
        // )
      }
    </>
  );
};

export default Boxes;
