import validator from "validator";

// all the common function that are being used accross the application.

export function titleCase(string: string) {
  let wordsList = string.split(" ");
  for (let i = 0; i < wordsList.length; i++) {
    let word = wordsList[i];
    if (word.charAt(0).toUpperCase() === word.charAt(0)) {
      wordsList[i] = word;
    } else {
      wordsList[i] =
        word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }
  }
  return wordsList.join(" ");
}

export function sentenceCase(string: string) {
  let sentenceCase =
    string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
  return sentenceCase;
}

export function prevent_e_onInputTypeNumber(
  event: React.KeyboardEvent<HTMLInputElement>
) {
  if (event.key.toLowerCase() === "e") {
    event.preventDefault();
  }
}

export function validUpi(upiId: string) {
  if (
    upiId.includes("@") &&
    upiId.charAt(0) !== "@" &&
    upiId.charAt(1) !== "@" &&
    upiId.charAt(upiId.length - 1) !== "@" &&
    upiId.charAt(upiId.length - 2) !== "@" &&
    upiId.charAt(upiId.length - 3) !== "@"
  ) {
    return true;
  }
  return false;
}

export function validCard(
  cardNumber: string,
  ownerName: string,
  cardValidity: string,
  cvv: string
) {
  let isOwnerNameValid = ownerName.length > 1;
  if (isOwnerNameValid === false) {
    return false;
  }
  let isValidCvv = cvv.length === 3;
  if (isValidCvv === false) {
    return false;
  }
  let isDateValid = false;
  if (cardValidity.length === 7) {
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    const arrayOfValidityDate = cardValidity.split("/");
    let cardValidityMonth = arrayOfValidityDate[0];
    let cardValidityYear = arrayOfValidityDate[1];
    if (
      (+currentMonth <= +cardValidityMonth &&
        +currentYear <= +cardValidityYear) ||
      (+currentMonth > +cardValidityMonth && +currentYear < +cardValidityYear)
    ) {
      isDateValid = true;
    }
  }
  if (isDateValid === false) {
    return false;
  }
  let isCardNumberValid = cardNumber.split("").length === 16 ? true : false;
  if (isDateValid && isCardNumberValid && isOwnerNameValid && isValidCvv) {
    return true;
  }
  return false;
}

export function validLaunchpadInputs(
  category: string,
  subCategory: string,
  productName: string,
  productType: string,
  price: string,
  description: string,
  imgUrl: string
) {
  let isImageUrlValid = false;
  if (imgUrl.startsWith("blob")) {
    let blobUrl = imgUrl.split(":").splice(1).join("").toString();
    imgUrl = blobUrl;
    isImageUrlValid = true;
  } else {
    isImageUrlValid = validator.isURL(imgUrl);
  }
  const isCategoryValid = category.length > 0;
  const isSubCategoryValid = subCategory.length > 0;
  const isProductTypeValid = productType.length > 1;
  const isProductNameValid = productName.length > 1;
  const isPriceValid = price.length > 0;
  const isDescriptionValid = description.length >= 8;
  if (
    isCategoryValid &&
    isSubCategoryValid &&
    isProductTypeValid &&
    isProductNameValid &&
    isPriceValid &&
    isDescriptionValid &&
    isImageUrlValid
  ) {
    return true;
  }
  return false;
}
