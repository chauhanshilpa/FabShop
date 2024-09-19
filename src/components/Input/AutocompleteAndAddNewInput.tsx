import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { v4 as uuidv4 } from "uuid";

const filter = createFilterOptions<FilmOptionType>();

const AutocompleteAndAddNewInput = () => {
  const [value, setValue] = React.useState<FilmOptionType | null>(null);

  return (
    <Autocomplete
      className="input"
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
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
      options={top100Films}
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
      renderInput={(params) => <TextField {...params} label="Type" />}
    />
  );
};

interface FilmOptionType {
  inputValue?: string;
  title: string;
}

const top100Films: readonly FilmOptionType[] = [
  { title: "shirt" },
  { title: "t-shirt" },
  { title: "top" },
  { title: "frock" },
  { title: "footwear" },
  { title: "bag" },
  { title: "watch" },
  {
    title: "dress",
  },
  { title: "jeans" },
  { title: "shorts" },
  {
    title: "hoodie",
  },
  {
    title: "co-ords",
  },
  { title: "trouser" },
  { title: "jumpsuit" },
];

export default AutocompleteAndAddNewInput;
