import React, { useEffect, useState } from 'react'
import Job from "./Job"

const Jobs = ({data, keywords}) => {
  console.log(data);
  // const [filteredData, setfilteredData] = useState([])
  // const SearchFunc= () => {
  //   if (keywords.length > 0) {
  //     const newData = filteredData.filter(d => {
  //       return d.position.toLocalLowercase().includes(keywords);
  //     });
  //     setfilteredData(newData);
  //   }else {
  //     setfilteredData(data);
  //   }
  // }

  // useEffect(() => {
  //   SearchFunc();
  // }, [keywords]);

  return (
  <div className='jobs'>
    {data.map((d) => {
        return <Job data={d}/>
      })}
  </div>
  )
};

export default Jobs;