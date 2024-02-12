import { useLocation } from "react-router-dom";
import {useLayoutEffect} from 'react'


const Scrolltop = () => {
    const {pathname} =useLocation();
    useLayoutEffect(()=>{
        window.scrollTo({top:0,behavior:"auto"});

    },[pathname])
  return null;
}

export default Scrolltop
