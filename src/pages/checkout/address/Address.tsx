import "./Address.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { STATES_LIST } from "../../../FabShop_constants";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Address() {
  const states = {
    options: STATES_LIST,
  };

  function handleNextMove(){

  }

  function goToPreviousMove(){
    
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
      }}
      noValidate
      className="address-box"
    >
      <Container id="text-fields">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Item>
              <Box>
                <TextField
                  required
                  id="standard-search"
                  label="Name"
                  type="search"
                  variant="standard"
                />
                <TextField
                  required
                  id="outlined-number"
                  label="10-digit mobile number"
                  type="number"
                  variant="standard"
                />
                {/* to do */}
                <TextField
                  required
                  id="standard-search pincode"
                  label="Pincode"
                  type="search"
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-basic"
                  label="Locality"
                  variant="standard"
                />
              </Box>
              <Box>
                <TextField
                  required
                  multiline
                  rows={4}
                  className="multiline-address"
                  id="standard-multiline-static"
                  label="Address (Area and Street)"
                  variant="standard"
                />
              </Box>
              <Box>
                <TextField
                  required
                  id="standard-basic"
                  label="City/District/Town"
                  variant="standard"
                />
                <Autocomplete
                  {...states}
                  id="select-on-focus"
                  selectOnFocus
                  className="autocomplete-states"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      label="Select State"
                      variant="standard"
                    />
                  )}
                />
                <TextField
                  id="standard-basic"
                  label="Landmark (Optional)"
                  variant="standard"
                />
                <TextField
                  id="outlined-number"
                  label="Alternate Phone (Optional)"
                  type="number"
                  variant="standard"
                />
              </Box>
              <Box className="checkout-address-save-and-cancel-buttons">
                <Button variant="contained" color="success" className="save" onClick={handleNextMove}>
                  SAVE AND DELIVER HERE
                </Button>
                <Button variant="outlined" color="error" className="cancel" onClick={goToPreviousMove}>
                  CANCEL
                </Button>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>xs=6 md=4</Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
