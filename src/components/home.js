import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

function Home() {
 const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");
  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMovieList();
  }, [movieList]);

  return (
    <div className="App">
      <>unkerrrrrrrrrr</>
      <div>
        {movieList.map((movie,index) => (
          <h1 key={index}>{movie.title}</h1>
        ))}
      </div>
      <div>raaaaaaaaaaaaaaa</div> <div>raaaaaaaaaaaaaaa</div> <div>raaaaaaaaaaaaaaa</div> <div>raaaaaaaaaaaaaaa</div>
      <Link to="login">hi</Link>
    </div>
  );
}

export default Home;