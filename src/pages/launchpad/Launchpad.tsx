import { useEffect, useState } from "react";
import "./Launchpad.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { MuiFileInput } from "mui-file-input";
import AutocompleteAndAddNewInput from "../../components/Input/AutocompleteAndAddNewInput";
import NumberInput from "../../components/Input/NumberInput";
import {
  CATEGORY_LIST,
  SUB_CATEGORY_LIST,
  ProductTypeInterface,
} from "../../helpers/FabShop_constants";

const Launchpad = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [categoryInputValue, setCategoryInputValue] = useState("");
  const [subCategory, setSubCategory] = useState<string | null>(null);
  const [subCategoryInputValue, setSubCategoryInputValue] = useState("");
  const [name, setName] = useState("");
  const [productType, setProductType] = useState<ProductTypeInterface | null>(
    null
  );
  const [type, setType] = useState<string>("");
  const [price, setPrice] = useState("");
  const [ratings, setRatings] = useState<number | undefined>(undefined);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [browsedImage, setBrowsedImage] = useState<File | null>(null);

  useEffect(() => {
    if (productType) {
      setType(productType.title);
    }
  }, [productType]);

  const handleChange = (newValue: File | null) => {
    setBrowsedImage(newValue);
  };
  console.log(typeof ratings);
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
          options={CATEGORY_LIST}
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
          options={SUB_CATEGORY_LIST}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose sub-category" />
          )}
        />
        <AutocompleteAndAddNewInput
          productType={productType}
          setProductType={setProductType}
        />
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
        {/* <TextField
          className="input"
          id="outlined-basic"
          label="Ratings"
          variant="outlined"
        > */}
        <NumberInput />
        {/* </TextField> */}
        {/* <TextField
          className="input"
          id="outlined-basic"
          label="Ratings"
          variant="outlined"
          value={ratings}
          onChange={(event) => setRatings(event.target.value)}
        /> */}
      </Box>
      <Box className="input-line-3">
        <MuiFileInput
          value={browsedImage}
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
