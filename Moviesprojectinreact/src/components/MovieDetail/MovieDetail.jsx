// import React from "react";
// import { useParams } from "react-router-dom";
// import { movies } from "../../data/movies";
// import "./MovieDetail.css";

// const MovieDetail = () => {
//   const { id } = useParams();
//   const movie = movies.find((m) => m.id === parseInt(id));

//   if (!movie) return <div>Movie not found</div>;

//   return (
//     <div className="movie-detail">
//       <div className="banner">
//         <img src={movie.banner} alt={movie.title} className="banner-img" />

//         <div className="main-content">
//           <div className="left">
//             <img src={movie.image} alt={movie.title} className="poster-img" />
//           </div>
//           <div className="right">
//             <h1>{movie.title}</h1>
//             <p className="genre">Family • Comedy • Adventure • Fantasy</p>
//             <p className="description">
//               Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical q...show more
//             </p>
//             <h2>Top Casts</h2>
//             <div className="casts">
//               <p>Jason Momoa</p>
//               <p>Jack Black</p>
//               <p>Sebastian Eugene Hansen</p>
//               <p>Emma Myers</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="trailer">
        
//         <h2>Movies</h2>
       

//         <iframe 
//         key={index}
//           width="70%"
//           height="500"
//           src={`https://www.youtube.com/embed/${movie.youtubeTrailerId}`}
//            title={`YouTube trailer ${index + 1}`}
//           frameBorder="0"
//            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default MovieDetail;



// import React from "react";
// import { useParams } from "react-router-dom";
// import { movies } from "../../data/movies";
// import "./MovieDetail.css";

// const MovieDetail = () => {
//   const { id } = useParams();
//   const movie = movies.find((m) => m.id === parseInt(id));

//   if (!movie) return <div>Movie not found</div>;

//   return (
//     <div className="movie-detail">
//       <div className="banner">
//         <img src={movie.banner} alt={movie.title} className="banner-img" />

//         <div className="main-content">
//           <div className="left">
//             <img src={movie.image} alt={movie.title} className="poster-img" />
//           </div>
//           <div className="right">
//             <h1>{movie.title}</h1>
//             <p className="genre">Family • Comedy • Adventure • Fantasy</p>
//             <p className="description">
//               Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest.
//             </p>
//             <h2>Top Casts</h2>
//             <div className="casts">
//               <p>Jason Momoa</p>
//               <p>Jack Black</p>
//               <p>Sebastian Eugene Hansen</p>
//               <p>Emma Myers</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="trailer">
//         <h2>Trailers</h2>
//         {movie.youtubeTrailerIds && movie.youtubeTrailerIds.map((id, index) => (
//           <iframe
//             key={index}
//             width="70%"
//             height="500"
//             src={`https://www.youtube.com/embed/${id}`}
//             title={`YouTube trailer ${index + 1}`}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieDetail;


// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { movies } from "../../data/movies";
// import "./MovieDetail.css";

// const MovieDetail = () => {
//   const { id } = useParams();
//   const movie = movies.find((m) => m.id === parseInt(id));

//   const [trailerIndex, setTrailerIndex] = useState(0);

//   if (!movie) return <div>Movie not found</div>;

//   const handleNext = () => {
//     setTrailerIndex((prevIndex) =>
//       prevIndex + 1 < movie.youtubeTrailerIds.length ? prevIndex + 1 : 0
//     );
//   };

//   return (
//     <div className="movie-detail">
//       <div className="banner">
//         <img src={movie.banner} alt={movie.title} className="banner-img" />

//         <div className="main-content">
//           <div className="left">
//             <img src={movie.image} alt={movie.title} className="poster-img" />
//           </div>
//           <div className="right">
//             <h1>{movie.title}</h1>
//             <p className="genre">Family • Comedy • Adventure • Fantasy</p>
//             <p className="description">
//               Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld...
//             </p>
//             <h2>Top Casts</h2>
//             <div className="casts">
//               <p>Jason Momoa</p>
//               <p>Jack Black</p>
//               <p>Sebastian Eugene Hansen</p>
//               <p>Emma Myers</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="trailer">
//         <h2>Trailer {trailerIndex + 1}</h2>
//         <iframe
//           width="70%"
//           height="500"
//           src={`https://www.youtube.com/embed/${movie.youtubeTrailerIds[trailerIndex]}`}
//           title={`YouTube trailer ${trailerIndex + 1}`}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//         <div className="trailer-buttons">
//           <button onClick={handleNext}>Next Trailer</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetail;



import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { movies } from "../../data/movies";
import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  const [trailerIndex, setTrailerIndex] = useState(0);

  if (!movie) return <div>Movie not found</div>;

  const handleNext = () => {
    setTrailerIndex((prevIndex) =>
      prevIndex + 1 < movie.youtubeTrailerIds.length ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="movie-detail">
      <div className="banner">
        <img src={movie.banner} alt={movie.title} className="banner-img" />

        <div className="main-content">
          <div className="left">
            <img src={movie.image} alt={movie.title} className="poster-img" />
          </div>
          <div className="right">
            <h1>{movie.title}</h1>
            <p className="genre">Family • Comedy • Adventure • Fantasy</p>
            <p className="description">
              Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld...
            </p>
            <h2>Top Casts</h2>
            <div className="casts">
              <p>Jason Momoa</p>
              <p>Jack Black</p>
              <p>Sebastian Eugene Hansen</p>
              <p>Emma Myers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="trailer">
        <h2>Trailer {trailerIndex + 1}</h2>

        {/* First Trailer Display */}
        <iframe
          width="70%"
          height="500"
          src={`https://www.youtube.com/embed/${movie.youtubeTrailerIds[trailerIndex]}`}
          title={`YouTube trailer ${trailerIndex + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Second Trailer Display (same as above) */}
        <iframe
          width="70%"
          height="500"
          src={`https://www.youtube.com/embed/${movie.youtubeTrailerIds[trailerIndex]}`}
          title={`YouTube trailer duplicate ${trailerIndex + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

      </div>
    </div>
  );
};

export default MovieDetail;
