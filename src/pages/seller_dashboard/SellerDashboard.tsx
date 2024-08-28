
import Box from "@mui/material/Box";
import Sidebar from "../../components/seller/Sidebar";

interface Props {
  activeSellerId: string;
}

const SellerDashboard = ({ activeSellerId }: Props) => {
  return (
    <Box className="main">
      <Sidebar activeSellerId ={activeSellerId}/>
    </Box>
  );
};

export default SellerDashboard;
