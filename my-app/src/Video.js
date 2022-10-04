import React ,{useEffect} from 'react'

function Video(text) {
   useEffect(()=>{
    fetch(`https://api.tvmaze.com/search/shows?q=a`)
    .then((response) => console.log(response))
    
    
  },[])
      
  return (
    <div>Video</div>
  )
}

export default Video