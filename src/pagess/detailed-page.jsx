import  { React,useEffect, useState }from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Style from "../CSS styles/detailed-page-card.module.css";
import DetailedPageCard from '../components/detailed-page-card'

const DetailedPage = () => {
    const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "8a75e9def8895d8c1f9e824dc7033473";
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;


  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(baseUrl);
        setVideo(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [baseUrl]);

  if (loading) {
    return <p className={Style.loader}>Loading...</p>;
  }

  if (error) {
    return <p className={Style.error}>Error: {error.message}</p>;
  }  
  return (
    

<div className={Style.Container}>

    {/* <h1>HIII</h1> */}

    <DetailedPageCard 
      key={video.id}
      poster_path={`https://image.tmdb.org/t/p/w500${video?.poster_path}`}
      title={video.title}
      video={video.video}
      overview={video.overview}
      vote_count={video.vote_count}
      backdrop_path={`https://image.tmdb.org/t/p/w500${video?.backdrop_path}`}
      release_date={video.release_date}


      />
    </div>
  )
}

export default DetailedPage