import React from "react";
import { useParams } from 'react-router-dom';

function New(){
    
    let {id} = useParams()
    console.log(id)

    return(
      <div>
        <h2>현재 New페이지의 파라미터는 {id} 입니다</h2>
      </div>
    )
  }
export default New;