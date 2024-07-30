import { Button, Container, Typography } from "@mui/material";
import React from "react";
import buy from "../images/buy-home.webp";
import sell from "../images/sell-home.webp";
import rent from "../images/rent-home.webp";

function Category() {
  return (
    <div style={{ position: "relative", top: "300px", marginTop: "30px", marginBottom: "30px" }}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "300px",
              height: "400px",
              borderStyle: "solid",
              borderRadius: "20px",
              borderColor: "#e6e6e6",
              padding: "30px",
            }}
          >
            <img
              style={{ width: "150px", height: "150px" }}
              src={buy}
              alt="buy home"
            />
            <div style={{ fontWeight: "bold", fontSize: "35px" }}>
              Buy a home
            </div>
            <br />
            <Typography sx={{textAlign: "center"}}>
              Find your place with an immersive photo experience and the most
              listings, including things you won’t find anywhere else.
            </Typography>
            <br />
            <Button
              sx={{
                textTransform: "none",
                color: "blue",
                borderRadius: "14px",
                fontSize: "18px",
              }}
              variant="outlined"
            >
              Browose homes
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "300px",
              height: "400px",
              borderStyle: "solid",
              borderRadius: "20px",
              borderColor: "#e6e6e6",
              padding: "30px",
            }}
          >
            <img
              style={{ width: "150px", height: "150px" }}
              src={sell}
              alt="sell home"
            />
            <div style={{ fontWeight: "bold", fontSize: "35px" }}>
              Sell a home
            </div>
            <br />
            <Typography sx={{textAlign: "center"}}>
              No matter what path you take to sell your home, we can help you
              navigate a successful sale.
            </Typography>
            <br />
            <Button
              sx={{
                textTransform: "none",
                color: "blue",
                borderRadius: "14px",
                fontSize: "18px",
              }}
              variant="outlined"
            >
              See your options
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "300px",
              height: "400px",
              borderStyle: "solid",
              borderRadius: "20px",
              borderColor: "#e6e6e6",
              padding: "30px",
            }}
          >
            <img
              style={{ width: "150px", height: "150px" }}
              src={rent}
              alt="buy home"
            />
            <div style={{ fontWeight: "bold", fontSize: "35px" }}>
              Rent a home
            </div>
            <br />
            <Typography sx={{textAlign: "center"}} >
              We’re creating a seamless online experience – from shopping on the
              largest rental network, to applying, to paying rent.
            </Typography>
            <br />
            <Button
              sx={{
                textTransform: "none",
                color: "blue",
                borderRadius: "14px",
                fontSize: "18px",
              }}
              variant="outlined"
            >
              Find rentals
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Category;
