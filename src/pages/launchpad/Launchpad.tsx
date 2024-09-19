import { useState } from "react";
import "./Launchpad.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { MuiFileInput } from "mui-file-input";
import AutocompleteAndAddNewInput from "../../components/Input/AutocompleteAndAddNewInput";

const categoryList = ["Men", "Women", "Kids"];
const subCategoryList = ["Girls", "Boys"];

const Launchpad = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [categoryInputValue, setCategoryInputValue] = useState("");
  const [subCategory, setSubCategory] = useState<string | null>(null);
  const [subCategoryInputValue, setSubCategoryInputValue] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [ratings, setRatings] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // const [file, setFile] = useState("");
  const [value, setValue] = useState<File | null>(null);

  const handleChange = (newValue: File | null) => {
    setValue(newValue);
  };
console.log(category)
  return (
    <Box className="main launchpad">
      <Typography variant="h4" className="launchpad-heading">
        Launch New Product
      </Typography>
      <Box className="input-line-1">
        <Autocomplete
          className="input"
          value={category}
          onChange={(event: any, newValue: string | null) => {
            setCategory(newValue);
          }}
          inputValue={categoryInputValue}
          onInputChange={(event, newInputValue) => {
            setCategoryInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={categoryList}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose category" />
          )}
        />
        <Autocomplete
          className="input"
          value={subCategory}
          onChange={(event: any, newValue: string | null) => {
            setSubCategory(newValue);
          }}
          inputValue={subCategoryInputValue}
          onInputChange={(event, newInputValue) => {
            setSubCategoryInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={subCategoryList}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose sub-category" />
          )}
        />
        <AutocompleteAndAddNewInput />
      </Box>
      <Box className="input-line-2">
        <TextField
          className="input"
          required
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          className="input"
          required
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Ratings"
          variant="outlined"
          value={ratings}
          onChange={(event) => setRatings(event.target.value)}
        />
      </Box>
      <Box className="input-line-3">
        <MuiFileInput
          value={value}
          onChange={handleChange}
          placeholder="&#128194;&nbsp;Insert a file"
          className="browse-file"
        />
        <TextField
          sx={{ width: "60%" }}
          className="input"
          id="outlined-required"
          label="Image url"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
      </Box>
      <Box className="input-line-4">
        <TextField
          sx={{ width: "70%" }}
          className="input"
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          defaultValue="This is a sample description"
        />
      </Box>
    </Box>
  );
};

export default Launchpad;
