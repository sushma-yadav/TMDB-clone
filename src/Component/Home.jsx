// import './App.css';
import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
import Banner from './Banner';
import Whats_popular from './Whats_popular';
// import Footer from './Footer';
import axios from 'axios';
import { trending, popular } from './Data';
import Latest_trailer from './Latest_trailer';

function Home() {
  const category1 = ['Streaming', 'On TV', 'For Rent', 'In Theaters']
  const category2 = ['Movies', ' TV']
  const category3 = ['Today', 'This Week']

  const [List, setList] = useState([]);
    const [trending, setTrending]=useState([])

  useEffect(() => {
      let popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1e945d2f421edc0fbe6217e79fefca15&language=en-US&page=1'
      let trendingUrl = 'https://api.themoviedb.org/3/trending/all/day?api_key=1e945d2f421edc0fbe6217e79fefca15'


      axios.get(popularUrl)
          .then(response => {
              setList(response.data.results)
              console.log(response.data.results)
          })

      axios.get(trendingUrl)
          .then(response => {
              setTrending(response.data.results)   
              console.log(response.data.results)
          })
      return () => {
          // cleanup
      }
  }, [])

  return (
    <div className="Home">
      {/* <Navbar />   */}
      <Banner />
      <Whats_popular heading='Whats Popular' category={category1} data={List} />
      <Whats_popular heading='Free to Watch' category={category2} data={List}/>
      <Latest_trailer heading='Latest Trailers' category={category1}/>
      <Whats_popular heading='Trending' category={category3} data={trending} />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
