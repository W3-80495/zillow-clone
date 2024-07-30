import React from "react";
import img from "../images/recommended-img.webp";
import { Container } from "@mui/material";

function Recommended() {
  return (
    <div style={{ position: "relative", top: "250px" }}>
      <Container>
        <table>
          <tr>
            <td>
              <div style={{ width: "670px" }}>
                <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Recommendations underway
                </div>
                <br />
                <div>
                  Search and save a few homes you like and we'll find
                  recommendations for you.
                </div>
              </div>
            </td>
            <td>
              <div>
                <img style={{ width: "470px", height: "370px" }} src={img} alt="recmd" />
              </div>
            </td>
          </tr>
        </table>
      </Container>
    </div>
  );
}

export default Recommended;
