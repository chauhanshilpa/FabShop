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
import { addNewProduct, saveLaunchProductsWithSellerId } from "../../api/api";
import balloonGif from "../../api/assets/launch-successfull.gif";
// import cheerAudio from "../../api/assets/cheering-claps.mp3";
import {
  prevent_e_onInputTypeNumber,
  sentenceCase,
  titleCase,
  validLaunchpadInputs,
} from "../../helpers/commonFunctions";
import { useNavigate } from "react-router-dom";
interface Props {
  refreshProducts: () => Promise<void>;
  activeSellerId: string;
}

/**
 * 
 * @returns launchpad for seller to launch new product.
 */
const Launchpad = ({ refreshProducts, activeSellerId }: Props) => {
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
  const [isValid, setIsValid] = useState(false);
  const [isLaunchButtonClicked, setIsLaunchButtonClicked] = useState(false);

  useEffect(() => {
    if (productType) {
      setProductTypeTitle(productType.title);
    }
  }, [productType]);

  //if categories are men and women, it automatically select sub categories.
  useEffect(() => {
    if (categoryInputValue === "Men") {
      setSubCategoryInputValue("Boys");
      setSubCategory("Boys");
    } else if (categoryInputValue === "Women") {
      setSubCategoryInputValue("Girls");
      setSubCategory("Girls");
    }
  }, [category, categoryInputValue]);

  //checks if all inputs are valid and set setIsValid accordingly.
  useEffect(() => {
    const isValid = validLaunchpadInputs(
      category ?? "",
      subCategory ?? "",
      name,
      productTypeTitle,
      price,
      description,
      imageUrl
    );
    isValid ? setIsValid(true) : setIsValid(false);
  }, [
    category,
    subCategory,
    name,
    productTypeTitle,
    price,
    description,
    imageUrl,
  ]);

  const navigate = useNavigate();

  //runs when you browse a image.
  const handleFileChange = (newValue: File | null) => {
    setBrowsedImage(newValue);
    if (newValue) {
      const fileUrl = URL.createObjectURL(newValue);
      setImageUrl(fileUrl);
    } else {
      setImageUrl(""); // Reset image URL if no file is selected
    }
  };

  //after launch it refreshes all inputs
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

  //it runs while clicking launch button. It add the product in all products and sets a seller id with that product in a different variable.
  const launchProduct = async () => {
    setIsLaunchButtonClicked(true);
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
    // let audio = new Audio(cheerAudio);
    // audio.play();
    setTimeout(() => {
      setLauchSuccessfull(false);
    }, 2000);
    await saveLaunchProductsWithSellerId(
      activeSellerId,
      category as string,
      subCategory as string,
      productTypeTitle,
      Number(price),
      imageUrl,
      name,
      description
    );
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
              setIsLaunchButtonClicked(false);
            }}
            inputValue={categoryInputValue}
            onInputChange={(event, newInputValue) => {
              setCategoryInputValue(newInputValue);
              setIsLaunchButtonClicked(false);
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
              setIsLaunchButtonClicked(false);
            }}
            inputValue={subCategoryInputValue}
            onInputChange={(event, newInputValue) => {
              setSubCategoryInputValue(newInputValue);
              setIsLaunchButtonClicked(false);
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
            onChange={(event) => {
              setName(titleCase(event.target.value));
              setIsLaunchButtonClicked(false);
            }}
            color="success"
          />
          <TextField
            className="input"
            type="number"
            required
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={price}
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
              prevent_e_onInputTypeNumber(event)
            }
            onChange={(event) => {
              setPrice(event.target.value);
              setIsLaunchButtonClicked(false);
            }}
            color="success"
          />
        </Box>
        <Box className="input-line-3">
          <MuiFileInput
            value={browsedImage}
            onChange={handleFileChange}
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
              setIsLaunchButtonClicked(false);
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
            onChange={(event) => {
              setDescription(sentenceCase(event.target.value));
              setIsLaunchButtonClicked(false);
            }}
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
          <Button
            className="launch-button"
            variant="contained"
            onClick={launchProduct}
            disabled={isValid ? false : true}
          >
            Launch Now&nbsp;🚀
          </Button>
        </Box>
        <Box className="text-after-launch">
          {isLaunchButtonClicked && (
            <>
              <Typography sx={{ fontWeight: "bold", color: "#4C585B" }}>
                Click
                <b
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    navigate(`/seller/dashboard/${activeSellerId}`)
                  }
                >
                  &nbsp;Fabshop logo&nbsp;
                </b>
                to see launched product
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#4C585B",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#658147",
                  },
                }}
                onClick={() => {
                  setIsLaunchButtonClicked(false);
                  window.scrollTo(0, 0);
                }}
              >
                or launch new product
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Launchpad;
