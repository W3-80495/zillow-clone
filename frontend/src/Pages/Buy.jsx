import React from "react";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import ghar from "../images/ghar.webp";

function Buy() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(16),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Navbar />
      <hr style={{marginTop: "20px"}} />
      <Search />
      <hr />
      <div style={{marginTop: "-10px"}}>
        <table>
          <tr>
            <td
              style={{
                backgroundColor: "#C3DCC9",
                width: "1100px",
                height: "600px",
              }}
            ></td>
            <td style={{ width: "50%", height: "100%", padding: "20px" }}>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                >
                  <Grid item xs={6}>
                    {/* <Item>1</Item> */}
                    <Card>
                      <CardMedia
                        component="img"
                        alt="ghar"
                        height="140"
                        image={ghar}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          $ 310,000
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          3 bds | 3 ba | 1,842 sqft - Active
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          1066 Bird Road, Branson, MO 65616
                        </Typography>
                        <Typography color="text.secondary" sx={{fontSize: "12px"}}>
                          WHITE MONGOLIA REAL ESTATE
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    {/* <Item>2</Item> */}
                    <Card>
                      <CardMedia
                        component="img"
                        alt="ghar"
                        height="140"
                        image={ghar}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          $ 310,000
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          3 bds | 3 ba | 1,842 sqft - Active
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          1066 Bird Road, Branson, MO 65616
                        </Typography>
                        <Typography color="text.secondary" sx={{fontSize: "12px"}}>
                          WHITE MONGOLIA REAL ESTATE
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    {/* <Item>3</Item> */}
                    <Card>
                      <CardMedia
                        component="img"
                        alt="ghar"
                        height="140"
                        image={ghar}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          $ 310,000
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          3 bds | 3 ba | 1,842 sqft - Active
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          1066 Bird Road, Branson, MO 65616
                        </Typography>
                        <Typography color="text.secondary" sx={{fontSize: "12px"}}>
                          WHITE MONGOLIA REAL ESTATE
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    {/* <Item>4</Item> */}
                    <Card>
                      <CardMedia
                        component="img"
                        alt="ghar"
                        height="140"
                        image={ghar}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          $ 310,000
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          3 bds | 3 ba | 1,842 sqft - Active
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          1066 Bird Road, Branson, MO 65616
                        </Typography>
                        <Typography color="text.secondary" sx={{fontSize: "12px"}}>
                          WHITE MONGOLIA REAL ESTATE
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Buy;
