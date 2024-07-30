import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

function Search() {
  
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [bhks, setBhk] = useState("")
  const [hometype, setHometype] = useState("")

  const handleSearch = () => {
    // Add your search logic here
    console.log("Search button clicked");
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeBhk = (event) => {
    setBhk(event.target.value);
  };

  const handleChangeHometype = (event) => {
    setHometype(event.target.value);
  };
  return (
    <div style={{ height: "60px", width: "100%", display: "flex", flexDirection: "row"}}>
      <OutlinedInput
        placeholder="Address, neighborhood, city, ZIP"
        sx={{
          width: "600px",
          height: "56px",
          marginLeft: "20px",
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleSearch}>
              <SearchIcon sx={{ color: "black" }} />
            </IconButton>
          </InputAdornment>
        }
      />
      <FormControl sx={{width: "150px", marginLeft: "10px" }}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          value={status}
          label="Status"
          onChange={handleChangeStatus}
        >
          <MenuItem value={10}>For Sale</MenuItem>
          <MenuItem value={20}>For Rent</MenuItem>
          <MenuItem value={30}>Sold</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{width: "200px", marginLeft: "10px" }}>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          value={price}
          label="Price"
          onChange={handleChangePrice}
        >
          <MenuItem value={10}>Below 1000000</MenuItem>
          <MenuItem value={20}>1000000 - 5000000</MenuItem>
          <MenuItem value={30}>Above 5000000</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{width: "150px", marginLeft: "10px" }}>
        <InputLabel id="demo-simple-select-label">BHKs</InputLabel>
        <Select
          value={bhks}
          label="BHKs"
          onChange={handleChangeBhk}
        >
          <MenuItem value={10}>1 BHK</MenuItem>
          <MenuItem value={20}>2 BHK</MenuItem>
          <MenuItem value={30}>3 BHK</MenuItem>
          <MenuItem value={40}>4 BHK</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{width: "170px", marginLeft: "10px" }}>
        <InputLabel id="demo-simple-select-label">Home Type</InputLabel>
        <Select
          value={hometype}
          label="Home Type"
          onChange={handleChangeHometype}
        >
          <MenuItem value={10}>Houses</MenuItem>
          <MenuItem value={20}>Townhomes</MenuItem>
          <MenuItem value={30}>Multi-family</MenuItem>
          <MenuItem value={40}>Apartments</MenuItem>
          <MenuItem value={50}>Manufactured</MenuItem>
        </Select>
      </FormControl>
      <Button sx={{width: "150px", marginLeft: "10px", height: "54px" }} variant="contained">Save Search</Button>
    </div>
  );
}

export default Search;
