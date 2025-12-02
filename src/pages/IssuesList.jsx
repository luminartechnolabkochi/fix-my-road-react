import axios from 'axios'
import React, { useEffect, useState } from 'react'
import IssueDetail from '../components/IssueDetail'

function IssuesList() {

    const[issues,setIssues]=useState()

    useEffect(()=>{listIssueApi()},[])

    async function listIssueApi(){

        let token=localStorage.getItem("token")
        let headers={
            "Authorization":token
        }
        let response=await axios.get("http://127.0.0.1:8000/api/issues/",{headers})
        
        if(response.status>=200 && response.status<300){

           setIssues(response.data)
            
        }
    }
  return (
    <div>

        <h1>IssueList</h1>

        {issues&&issues.map((i)=>(
            <IssueDetail id={i.id} issue={i}></IssueDetail>
        ))}
      
    </div>
  )
}

export default IssuesList
