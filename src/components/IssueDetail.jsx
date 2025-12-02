import React from 'react'

function IssueDetail({id,issue}) {
  return (
    <div className='border-2  border-purple-500 my-3 w-1/2 mx-auto p-3 rounded-2xl'>
        <h1>Id:{id}</h1>
        <h3>title:{issue.title}</h3>
        <p>
            {issue.description}
        </p>

        <div>
         
            <img src={issue.image} alt="noimage" />
        </div>
        <div>
            reacted : {issue.still_present_count}

            <button className='bg-purple-300 p-1  rounded'>still present</button>
        </div>
      
    </div>
  )
}

export default IssueDetail
