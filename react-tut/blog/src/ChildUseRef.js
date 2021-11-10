import React,{forwardRef} from "react";

function ChildUseRef(props,ref){
   
    return(
         <>
          <input type="text" placeholder=" " ref={ref} ></input>
         </>
    );
}
export default forwardRef(ChildUseRef);