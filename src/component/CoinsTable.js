import {
  Container,
  createTheme,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { CoinList } from "../api";
import { CryptoState } from "../CryptoContext";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);

    const { data } = await axios.get(CoinList(currency));
    setCoins(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter((coin) => {
      coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search);
    });
  };

  //   console.log(coins);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Realtime CrptoCurrency Prices By Market Cap
        </Typography>
        <TextField
          label="Search for Crypto Currency"
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table>
              <TableHead style={{ backgroundColor: "gold" }}>
                <TableRow>
                  {["Coins", "Price", "24H Change", "Market Cap"].map(
                    (head) => (
                      <TableCell
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "700",
                          color: "black",
                        }}
                        key={head}
                        align={head === "Coins" ? "" : "right"}
                      >
                        {head}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>

              <TableBody>{handleSearch()}</TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
