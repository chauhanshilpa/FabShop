import Button from "@mui/material/Button";
import { Product } from ".././api/classModels";
import {
  addItemToWishlist,
  removeItemFromWishlist,
  getWishlist,
} from ".././api/api";

interface Props {
  variant: "text" | "outlined" | "contained" | undefined;
  action: string;
  text: string;
  isProductInWishlist: boolean;
  activeUserId: string;
  productId: string;
  setWishlistProductsList: (value: React.SetStateAction<Product[]>) => void;
  buttonClass: string;
}

const WishlistActionButton = ({
  variant,
  action,
  text,
  isProductInWishlist,
  activeUserId,
  productId,
  setWishlistProductsList,
  buttonClass,
}: Props) => {

  async function handleWishlist() {
    console.log("wishlist")
    let response;
    if (action === "add") {
      // add product to wishlist
     await addItemToWishlist(activeUserId, productId);
     console.log("add")
    } else if (action === "remove") {
      //remove product to wishlist
      await removeItemFromWishlist(activeUserId, productId)
      console.log("remove")
    }
    response = await getWishlist(activeUserId); 
    setWishlistProductsList(response);
    console.log(response)
  }
  return (
    <Button variant={variant} className={buttonClass} onClick={handleWishlist}>
      {text}
    </Button>
  );
};

export default WishlistActionButton;
