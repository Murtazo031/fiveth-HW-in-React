import { Children } from "react";

export default function Button ({width,Children,bgcolor,color,padding,fsize}){
    return <button style={{width:width, background:bgcolor,color:color,borderRadius:"25px",border:"none",padding:padding,fontWeight:"600",fontSize:fsize}}>{Children}</button>
}