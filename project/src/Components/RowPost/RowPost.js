import React,{useEffect,useState} from 'react'
import {imageUrl,API_KEY} from '../../constants/constants'
import './RowPost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
function RowPost(props) {
  const [movie, setMovie] = useState([])
  const [video,setVideo] = useState('')
  useEffect(() => {
    axios.get(
      props.urls).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results)
    }).catch((err)=>{
      //console.log('err')
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    },
    
  };
  const handleMovies=(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response)
      if(response.data.results.length!==0){
        
            setVideo(response.data.results[0])
            console.log(video.key)
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
           {movie.map((obj)=>
           <img onClick={()=>handleMovies(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt=''></img>
           
           )}
            
           

            
            
            

        </div>
        {video && <  YouTube opts={opts} videoId={video.key} />}
    </div>
  )
}

export default RowPost