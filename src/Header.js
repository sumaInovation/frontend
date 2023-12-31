import {
    AppBar,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import React from "react";
  import { useState } from "react";
  import HouseIcon from "@mui/icons-material/House";
  import DrawerComponents from "./DrawerComponents";
  const PAGES = ["PLC Course", "C/C++ Corse", "Online Course", "Contact Us"];
  const Header = () => {
    const [Value, SetValue] = useState();
    const them = useTheme();
    const isMtch = useMediaQuery(them.breakpoints.down("md"));
    return (
      <React.Fragment>
        <AppBar sx={{ background: "#063970" }}>
          <Toolbar>
            {isMtch ? (
              <>
                <Typography sx={{fontSize:'2rem',paddingLeft:'10%'}}>
                  SUMAAUTOMATIONLK
                  <DrawerComponents />
                </Typography>
              </>
            ) : (
              <>
                <Typography>SUMAAUTOMATIONLK</Typography>
                <HouseIcon />
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  textColor="inherit"
                  value={Value}
                  onChange={(e, Value) => SetValue(Value)}
                  indicatorColor="secondary"
                >
                  {PAGES.map((pages, index) => (
                    <Tab key={index} label={pages} />
                  ))}
                </Tabs>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  };
  
  export default Header;
  