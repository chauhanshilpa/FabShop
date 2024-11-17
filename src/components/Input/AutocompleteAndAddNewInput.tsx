import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { v4 as uuidv4 } from "uuid";
import {
  PRODUCT_TYPE,
  ProductTypeInterface,
} from "../../helpers/FabShop_constants";

const filter = createFilterOptions<ProductTypeInterface>();
interface Props {
  productType: ProductTypeInterface | null;
  setProductType: React.Dispatch<
    React.SetStateAction<ProductTypeInterface | null>
  >;
}

const AutocompleteAndAddNewInput = ({ productType, setProductType }: Props) => {
  return (
    <Autocomplete
      className="input"
      value={productType}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setProductType({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setProductType({
            title: newValue.inputValue,
          });
        } else {
          setProductType(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option.title
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={PRODUCT_TYPE}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) => {
        const { ...optionProps } = props;
        return (
          <li key={uuidv4()} {...optionProps}>
            {option.title}
          </li>
        );
      }}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Type" color="success" />
      )}
    />
  );
};

export default AutocompleteAndAddNewInput;
