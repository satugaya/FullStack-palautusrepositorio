import React from 'react'


const StatisticLine = (props) => {
  
  console.log(props, "StatisticLine")
  
return(
      <tbody>
          <tr>
            <td>{props.text}:</td>
            <td>{props.value}{props.text2}</td>

          </tr>
      </tbody>
          
              
            
          
      
    
    )
    
}


export default StatisticLine