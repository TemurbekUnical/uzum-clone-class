import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import { useContext } from "react";
import AppContext from "../../App.context";
import { SavatchaniIchiStyled } from "./Savatcha.style";

export default function SavatchaSidebar({ children }) {
  const {
    state: { savatchaOchiqmi },
    action: { savatchaAlmashtirish },
  } = useContext(AppContext);
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={savatchaOchiqmi}
      onClose={savatchaAlmashtirish}
      onOpen={savatchaAlmashtirish}
    >
      <SavatchaniIchiStyled
        onClick={savatchaAlmashtirish}
        onKeyDown={savatchaAlmashtirish}
      >
        {children}
      </SavatchaniIchiStyled>
    </SwipeableDrawer>
  );
}
