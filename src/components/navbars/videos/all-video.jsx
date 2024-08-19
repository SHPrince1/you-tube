import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";
import LoadingSpin from "react-loading-spin";
import Style from "../../../CSS styles/allvideos.module.css";
import VideoCard from "./video-card";
import { SearchContext } from "../../../search-context";

const AllVideos = () => {
  const { searchQuery } = useContext(SearchContext); // Get the search query from the search context
  const [movieData, setMovieData] = useState(
    () => JSON.parse(sessionStorage.getItem("movieData")) || []
  ); // Initialize movie data state with data from sessionStorage if available
  const [page, setPage] = useState(
    () => parseInt(sessionStorage.getItem("currentPage")) || 1
  ); // Initialize page state with the current page from sessionStorage if available
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors
  const navigate = useNavigate(); // Hook to navigate programmatically

  const apiKey = "8a75e9def8895d8c1f9e824dc7033473";
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;

  // Configure Fuse.js for fuzzy search
  const options = {
    keys: ["title"],
    includeScore: true,
    threshold: 0.6, // Threshold for more or less fuzzy matching
  };

  const fuse = new Fuse(movieData, options); // Initialize Fuse.js with movie data and options

  // Filter movie data based on the search query
  const filteredMovieData = searchQuery
    ? fuse.search(searchQuery).map((result) => result.item)
    : movieData;

  // Fetch movie data from the API
  useEffect(() => {
    const fetchMovieData = async (page) => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const response = await axios.get(apiUrl); // Fetch data from the API
        const newMovies = response.data.results; // Get the movie results from the API response

        // Update movie data state with new movies, avoiding duplicates
        setMovieData((prevData) => {
          const existingMovieIds = new Set(prevData.map((movie) => movie.id));
          const filteredNewMovies = newMovies.filter(
            (movie) => !existingMovieIds.has(movie.id)
          );
          const updatedData = [...prevData, ...filteredNewMovies];
          sessionStorage.setItem("movieData", JSON.stringify(updatedData)); // Save updated movie data to sessionStorage
          return updatedData;
        });
      } catch (error) {
        setError(error); // Set error state if there is an error
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchMovieData(page); // Fetch movie data whenever the page state changes
  }, [page, apiUrl]);

  // Handle scroll event to load more data when reaching the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;

      if (bottom && !loading) {
        setPage((prevPage) => {
          const nextPage = prevPage + 1;
          sessionStorage.setItem("currentPage", nextPage); // Save the current page to sessionStorage
          return nextPage;
        });
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove scroll event listener on cleanup
    };
  }, [loading]);

  // Restore the scroll position when the component mounts
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
  }, []);

  // Handle click on a movie item to navigate to the detail page
  const handleMovieClick = (id) => {
    sessionStorage.setItem("scrollPosition", window.scrollY); // Save the current scroll position to sessionStorage
    sessionStorage.setItem("currentPage", page); // Save the current page to sessionStorage
    navigate(`/detailed-page/${id}`); // Navigate to the detail page for the selected movie
  };

  return (
    <>
      <div className={Style.Container}>
        {error && <div className={Style.error}>Error: {error.message}</div>}
        <div className={Style.movieDataBox}>
          {filteredMovieData.map((item) => (
            <div key={item.id} onClick={() => handleMovieClick(item.id)}>
              <VideoCard
                poster_path={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                title={item.title}
                video={item.video}
                backdrop_path={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                release_date={item.release_date}
              />
            </div>
          ))}

          <div className={Style.loadBox}>
            {loading && (
              <LoadingSpin
                duration=".2s"
                width="15px"
                timingFunction="ease-in-out"
                direction="alternate"
                size="50px"
                primaryColor="red"
                secondaryColor="#333"
                numberOfRotationsInAnimation={2}
              />
            )}

            
          </div>
        </div>

      </div>
    </>
  );
};

export default AllVideos;
