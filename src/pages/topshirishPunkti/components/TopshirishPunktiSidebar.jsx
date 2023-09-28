import {
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useNavigate } from "react-router-dom";


export default function TopshirishPunktiSidebar() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index, path) => {
    setSelectedIndex(index);
    navigate(path);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0, "delivery-points")}
        >
          <ListItemText primary="Topshirish punktlari" />
        </ListItemButton>
      <Divider />

        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1, "careers")}
        >
          <ListItemText primary="Vakansiyalar" />
        </ListItemButton>
      </List>
    </Box>
  );
}
