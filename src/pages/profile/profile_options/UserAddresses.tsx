import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { Address } from "../../../api/classModels";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddressForm from "../../../components/address_form/AddressForm";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
  getCustomerSavedAddresses,
  deleteSavedAddress,
} from "../../../api/api";
// import EditNoteIcon from "@mui/icons-material/EditNote";
interface Props {
  activeUserId: string;
}

const UserAddresses = ({ activeUserId }: Props) => {
  const [isAddressFormOpen, setIsAddressFormOpen] = useState<boolean>(false);
  const [userAddresses, setUserAddresses] = useState<Address[]>([]);

  useEffect(() => {
    (async function () {
      const response = await getCustomerSavedAddresses(activeUserId);
      if (response) {
        setUserAddresses([...response]);
      }
    })();
    // eslint-disable-next-line
  }, []);

  const OpenAddressForm = () => {
    setIsAddressFormOpen(true);
  };

  const handleDeleteAddress = async(addressId: string) => {
    await deleteSavedAddress(addressId, activeUserId);
    const response = await getCustomerSavedAddresses(activeUserId);
    setUserAddresses([ ...response ]);
  };

  const handleEditAddress = () => {
    alert("edited");
  };

  return (
    <Container className="main">
      <Button className="add-new-address-button" onClick={OpenAddressForm}>
        Save a new Address <AddCircleOutlineIcon className="add-icon" />
      </Button>
      <Divider />
      {isAddressFormOpen && (
        <Box className="main profile-addresses">
          <Card className="profile-address-form">
            <AddressForm
              activeUserId={activeUserId}
              setIsAddressFormOpen={setIsAddressFormOpen}
              setUserAddresses={setUserAddresses}
            />
          </Card>
        </Box>
      )}
      {!isAddressFormOpen && userAddresses.length <= 0 ? (
        <Box className="empty-address-list-container">
          <Typography
            variant="h5"
            sx={{ fontWeight: "regular", fontStyle: "italic" }}
            className="empty-address-list-text"
          >
            You haven't saved any addresses yet. Add one to make checkout
            easier!
          </Typography>
        </Box>
      ) : (
        userAddresses.map((address) => (
          <Card sx={{ padding: "1rem", margin: "1rem" }} key={uuidv4()}>
            <Typography sx={{ fontWeight: "550" }}>{address.name}</Typography>
            <Typography>{address.streetAddress}</Typography>
            <Typography>{address.landmark}</Typography>
            <Typography>
              {address.locality}, {address.pincode}
            </Typography>
            <Typography>
              {address.city}, {address.state}
            </Typography>
            <Typography>
              {address.phoneNumber}, {address.secondPhoneNumber}
            </Typography>
            <Box>
              <Tooltip title="Delete">
                <IconButton onClick={() => handleDeleteAddress(address.id)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              {/* <Tooltip title="Edit">
                <IconButton onClick={handleEditAddress}>
                  <EditNoteIcon />
                </IconButton>
              </Tooltip> */}
            </Box>
          </Card>
        ))
      )}
    </Container>
  );
};

export default UserAddresses;
