import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ["PLC Course", "C/C++ Corse", "Online Course", "Contact Us"];
const DrawerComponents = () => {
    const [OpenDrawer,setOpenDrawer]=useState(false)
  return (
  <React.Fragment>
<Drawer open={OpenDrawer}
onClose={()=>setOpenDrawer(false)}
>


<List>
    {
        PAGES.map((pages,index)=>(
            <ListItemButton onClick={()=>setOpenDrawer(false)} key={index}>
            <ListItemIcon>
                <ListItemText>
                    {pages}
                </ListItemText>
            </ListItemIcon>
           </ListItemButton>

        ))

    }
   
</List>
</Drawer>
<IconButton sx={{color:'white', marginLeft:'auto'}} onClick={()=>setOpenDrawer(!OpenDrawer)}>
    <MenuIcon/>
</IconButton>
  </React.Fragment>
  )
}

export default DrawerComponents
