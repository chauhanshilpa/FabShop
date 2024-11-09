import { useEffect, useState } from "react";
import "./Launchpad.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { MuiFileInput } from "mui-file-input";
import AutocompleteAndAddNewInput from "../../components/Input/AutocompleteAndAddNewInput";
import {
  CATEGORY_LIST,
  SUB_CATEGORY_LIST,
  ProductTypeInterface,
} from "../../helpers/FabShop_constants";
import Button from "@mui/material/Button";
import { addNewProduct, fetchAllProducts } from "../../api/api";
import { Product } from "../../api/classModels";
interface Props {
  refreshProducts: () => Promise<void>;
}

const Launchpad = ({ refreshProducts }: Props) => {
  const [category, setCategory] = useState<string | null>(null);
  const [categoryInputValue, setCategoryInputValue] = useState("");
  const [subCategory, setSubCategory] = useState<string | null>(null);
  const [subCategoryInputValue, setSubCategoryInputValue] = useState("");
  const [name, setName] = useState("");
  const [productType, setProductType] = useState<ProductTypeInterface | null>(
    null
  );
  const [productTypeTitle, setProductTypeTitle] = useState<string>("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [browsedImage, setBrowsedImage] = useState<File | null>(null);

  useEffect(() => {
    if (productType) {
      setProductTypeTitle(productType.title);
    }
  }, [productType]);

  const handleChange = (newValue: File | null) => {
    setBrowsedImage(newValue);
    // const fileUrl = URL.createObjectURL(newValue as File);
    //  console.log(newValue, fileUrl);
  };

  const launchProduct = async () => {
    await addNewProduct(
      category as string,
      subCategory as string,
      productTypeTitle,
      Number(price),
      imageUrl,
      name,
      description
    );
    // const allProducts = await fetchAllProducts();
     await refreshProducts();
    // setAllProducts([...allProducts]);
  };

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
      <Box className="launch-button-Box">
        <Button className="launch-button" onClick={launchProduct}>
          Launch Now&nbsp;🚀
        </Button>
      </Box>
    </Box>
  );
};

export default Launchpad;
