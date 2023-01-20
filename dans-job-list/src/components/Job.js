import React from 'react'

const Job = (props) => {

  const {
    id,
    type,
    url,
    created_at,
    company,
    company_url,
    location,
    title,
    description,
    how_to_apply,
    company_logo,
  } = props.data;
  
// let keywords = [title, location, type]
// return <div className='job-container'>{props.data.company}
  return <div className='job-container'>
    {/* <div className='logo'>
    <img src={company_logo} alt='' />
    </div> */}
    <div className='part1'>
    <div className='company'>
      <div className='cname'>{company}</div>
      {/* {props.data.new && <span className='new'>new!</span>}
      {props.data.featured && <span className='featured'>featured</span>} */}
    </div>
    <div className='title'>{title}</div>
    <div className='details'>
      <span>{type}</span>
      <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
      <span>{location}</span>
    </div>
    <div className='created'>
      <span>{created_at}</span>
    </div>
    </div>
    {/* <div className='part2'>
      {keywords.map((key, id) => (
        <button onClick={() => props.setKeywords(key)} key={id}>{key}</button>
      ))}
    </div> */}
    <button className='apply'>Apply</button>
  </div>
}

export default Job