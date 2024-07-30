import React from "react";
import banner from "../images/banner.jpg";
import {
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
//   TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Banner() {
  const handleSearch = () => {
    // Add your search logic here
    console.log("Search button clicked");
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <img
        style={{
          width: "100%",
          height: "408px",
          zIndex: "-1",
          position: "absolute",
        }}
        src={banner}
        alt="banner"
      />
      <Container>
        <div
          style={{
            color: "white",
            fontSize: "60px",
            fontWeight: "bold",
            // marginTop: "80px",
            position: "relative",
            top: "70px",
            zIndex: "0",
          }}
        >
          Agents. Tours.
        </div>
        <div
          style={{
            color: "white",
            fontSize: "60px",
            fontWeight: "bold",
            // marginTop: "150px",
            position: "relative",
            top: "70px",
          }}
        >
          Loans. Homes.
        </div>

        <OutlinedInput
          //   variant="outlined"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          sx={{
            position: "relative",
            top: "100px",
            backgroundColor: "white",
            width: "450px",
            height: "70px",
            borderRadius: "10px",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon sx={{ color: "blue", fontSize: "30px" }} />
              </IconButton>
            </InputAdornment>
          }
        />
      </Container>
    </div>
  );
}

export default Banner;
