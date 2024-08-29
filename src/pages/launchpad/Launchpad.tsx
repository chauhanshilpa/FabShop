import { useState } from "react";
import "./Launchpad.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

const categoryList = ["Men", "Women", "Kids"];
const subCategoryList = ["Girls", "Boys"];

const Launchpad = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [categoryInputValue, setCategoryInputValue] = useState("");
  const [subCategory, setSubCategory] = useState<string | null>(null);
  const [subCategoryInputValue, setSubCategoryInputValue] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ratings, setRatings] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("")
  const [file, setFile] = useState("")

  return (
    <Box className="main launchpad">
      <Autocomplete
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
      <TextField
        required
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        required
        id="outlined-basic"
        label="Price"
        variant="outlined"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <TextField
        required
        id="outlined-basic"
        label="Ratings"
        variant="outlined"
        value={ratings}
        onChange={(event) => setRatings(event.target.value)}
      />
      <TextField
        required
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        defaultValue="This is a sample description"
      />
      <Box>
        <input type="file" onChange={(event)=>console.log(event.target)}/>
        <img src={file} alt=""/>
        <TextField
          required
          id="outlined-required"
          label="Image url"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
      </Box>
    </Box>
  );
};

export default Launchpad;
