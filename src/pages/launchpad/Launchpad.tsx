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
import { addNewProduct } from "../../api/api";
import balloonGif from "../../api/assets/launch-successfull.gif";
import cheerAudio from "../../api/assets/cheering-claps.mp3";
import { prevent_e_onInputTypeNumber, titleCase } from "../../helpers/commonFunctions";
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
  const [imageUrlActiveField, setImageUrlActiveField] = useState("");
  const [launchSuccessfull, setLauchSuccessfull] = useState(false);

  useEffect(() => {
    if (productType) {
      setProductTypeTitle(productType.title);
    }
  }, [productType]);

  useEffect(() => {
    if (categoryInputValue === "Men") {
      setSubCategoryInputValue("Boys");
      setSubCategory("Boys");
    } else if (categoryInputValue === "Women") {
      setSubCategoryInputValue("Girls");
      setSubCategory("Girls");
    }
  }, [category, categoryInputValue]);

  const handleChange = (newValue: File | null) => {
    setBrowsedImage(newValue);
    const fileUrl = URL.createObjectURL(newValue as File);
    setImageUrl(fileUrl);
  };

  const refreshInputsToInitialState = () => {
    setCategory(null);
    setCategoryInputValue("");
    setSubCategory(null);
    setSubCategoryInputValue("");
    setName("");
    setProductType(null);
    setProductTypeTitle("");
    setPrice("");
    setDescription("");
    setImageUrl("");
    setBrowsedImage(null);
  };

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

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
    setLauchSuccessfull(true);
    let audio = new Audio(cheerAudio);
    audio.play();
    setTimeout(() => {
      setLauchSuccessfull(false);
    }, 2000);
    refreshInputsToInitialState();
    await refreshProducts();
  };

  return (
    <>
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
              <TextField {...params} label="Choose category" color="success" />
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
            id="controllable-states-demo launchpad_subCategoryInput"
            options={SUB_CATEGORY_LIST}
            sx={{ width: 300 }}
            disabled={
              subCategory !== null &&
              subCategoryInputValue !== "" &&
              category !== "Kids" &&
              categoryInputValue !== "Kids" &&
              category !== null &&
              category !== ""
                ? true
                : false
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose sub-category"
                color="success"
              />
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
            onChange={(event) => setName(titleCase(event.target.value))}
            color="success"
          />
          <TextField
            className="input"
            required
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={price}
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
              prevent_e_onInputTypeNumber(event)
            }
            onChange={(event) => setPrice(event.target.value)}
            color="success"
          />
        </Box>
        <Box className="input-line-3">
          <MuiFileInput
            value={browsedImage}
            onChange={handleChange}
            placeholder="&#128194;&nbsp;Insert a file"
            className="browse-file"
            color="success"
            style={{
              filter:
                imageUrlActiveField === "textField" ? "blur(2px)" : "none",
            }}
            onClick={() => setImageUrlActiveField("fileInput")}
          />
          <TextField
            sx={{ width: "60%" }}
            className="input"
            id="outlined-required"
            label="Image url"
            value={imageUrl}
            color="success"
            style={{
              filter:
                imageUrlActiveField === "fileInput" ? "blur(2px)" : "none",
            }}
            onChange={(event) => {
              setImageUrl(event.target.value);
              setBrowsedImage(null);
            }}
            onClick={() => setImageUrlActiveField("textField")}
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
            onChange={(event) => setDescription(titleCase(event.target.value))}
            defaultValue="This is a sample description"
            color="success"
          />
        </Box>
        {launchSuccessfull && (
          <img
            src={balloonGif}
            alt="balloons for cheering successfull product launch"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "30%",
              zIndex: "100",
            }}
            className="success_launch_image"
          />
        )}
        <Box className="launch-button-Box">
          <Button className="launch-button" onClick={launchProduct}>
            Launch Now&nbsp;🚀
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Launchpad;
