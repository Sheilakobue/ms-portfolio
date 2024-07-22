import { useEffect, useState } from "react";

export default function useScrollEffect() {
const [isScrolling, setIsScrolling] = useState(false)

useEffect(()=>{
    const handleScroll =()=> {
        setIsScrolling(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll)
    return()=>{
        window.removeEventListener("scroll",handleScroll)
    }
}, []);
return isScrolling;

};
