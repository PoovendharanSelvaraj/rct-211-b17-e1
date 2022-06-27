import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import ShoeCard from "./ShoeCard/ShoeCard";
import styles from "./Shoes.module.css"




const Shoes = () => {
   const products = useSelector(state=>state.shoes)
   const loading =useSelector(state=>state.isLoading)
   const error=useSelector(state=>state.isError)

   const dispatch =useDispatch();
const getData=()=>{
   const request = getShoesRequest();
   dispatch(request);
  return  axios.get("http://localhost:8080/shoes")
   .then((r)=>{dispatch(getShoesSuccess(r.data)); })
   .catch((e)=> dispatch(getShoesFailure(e)))
}
console.log(products)

useEffect(()=>{
  getData();
},[])
 if(loading){
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  )
 }
 if(error){
  return (
    <div>
      <h1>Error 404 found ...</h1>
    </div>
  )
 }
  return(
    <div className={styles.Card} >
     {
      products.map((item)=>{
        return (
          <div   >
            <ShoeCard datas={item} />
        </div>
        )
      })
     }
    </div>
  )
 
};

export default Shoes;
