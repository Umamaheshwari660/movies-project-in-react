
// import React, { useState, useEffect } from 'react';
// import './App.css';
// // import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MovieList from "./components/Movielist/Movielist";
// import MovieDetail from "./components/MovieDetail/MovieDetail";


// const movies1 = [
//   {
//     title: 'ISHQ',
//     description: '“Ishq” is a feel-good romantic thriller that follows Rahul, a charming and carefree young man, and Priya, an independent and sweet-natured girl.',
//     backgroundImage: 'https://i.ytimg.com/vi/0gMJTCuR60U/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gNSgTMA8=&rs=AOn4CLDoxkjOm7QdCFWCUiy6plRKIhs9HQ',
//     posterImage: 'https://images.filmibeat.com/ph-big/2011/12/ishq_13250487818.jpg',
//     trailerUrl: 'https://www.youtube.com/embed/_eoiB7wq3Kg',
//   },
//   {
//     title: 'IDDARAMMAYILATHO',
//     description: '“Iddarammayilatho” is a stylish romantic action drama centered around Sanju Reddy, a talented guitarist living in Spain.',
//     backgroundImage: 'https://wallpaperaccess.com/full/2784972.jpg',
//     posterImage: 'http://4.bp.blogspot.com/-YkUZtkU76UQ/UX5dOFSPfQI/AAAAAAAAZv8/lucxgVzoa8w/s1600/Iddarammayilatho+Movie+Audio+Released+Special+Wallpapers+12.jpg',
//     trailerUrl: 'https://www.youtube.com/embed/b3Ya6RdGZGc',
//   },
//   {
//     title: 'PANDAGA CHESKO',
//     description: 'Pandaga Chesko is a high-energy Telugu action-comedy film directed by Gopichand Malineni and stars Ram Pothineni, Rakul Preet Singh, and Sonal Chauhan.',
//     backgroundImage: 'https://wallpapercave.com/wp/wp2929413.jpg',
//     posterImage: 'https://www.chitramala.in/wp-content/uploads/2015/05/Ram-Pandaga-Chesko-Movie-Censor.jpg',
//     trailerUrl: 'https://www.youtube.com/embed/WlhuYvrE3vA',
//   },
//   {
//     title: 'RUDHRAMADEVI',
//     description: '"Rudhramadevi" is a historical Telugu epic based on the life of Queen Rudrama Devi, one of the few women to rule in Indian history.',
//     backgroundImage: 'https://www.wallpaperbetter.com/wallpaper/608/759/788/anushka-shetty-in-rudramadevi-movie-2K-wallpaper.jpg',
//     posterImage: 'http://www.idlebrain.com/images5/still-rudramadevi3.jpg',
//     trailerUrl: 'https://www.youtube.com/embed/Fc0QmDnNy3U',
//   },
//   {
//     title: 'SYE RAA NARASIMHA REDDY',
//     description: '"Sye Raa Narasimha Reddy" is a historical action drama based on the life of Uyyalawada Narasimha Reddy, a fearless freedom fighter who led a rebellion against British rule in pre-independence India.',
//     backgroundImage: 'https://www.socialnews.xyz/wp-content/uploads/2019/09/29/Megastar-Chiranjeevi-Ultra-HD-Stills-from-Sye-Raa-Narasimha-Reddy-Movie-.jpg',
//     posterImage: 'https://www.filmibeat.com/fanimg/movie/16347/sye-raa-narasimha-reddy-photos-images-66127.jpeg',
//     trailerUrl: 'https://www.youtube.com/embed/KyhrrdpA2YA',
//   }
// ];


// const Button = ({ text, type = 'default', onClick }) => {
//   const buttonClass = type === 'primary' ? 'button-primary' : 'button-default';
//   return (
//     <button className={`button ${buttonClass}`} onClick={onClick}>
//       {text}
//     </button>
//   );
// };

// const Header = ({ currentTheme, onThemeChange }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
//   const handleThemeSelect = (theme) => {
//     onThemeChange(theme);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <header className="header">
//       <div className="logo"><span>t</span>Movies</div>
//       <nav className="nav-links">
//         <a href="#" className="nav-item active">Home</a>
//         <a href="#" className="nav-item">Movies</a>
//         <a href="#" className="nav-item">TV Series</a>
//         <div className="theme-switcher-container">
//           <button className="theme-toggle-button" onClick={toggleDropdown}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor">
//               <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
//             </svg>
//           </button>
//           {isDropdownOpen && (
//             <div className="theme-dropdown">
//               {['dark', 'light', 'system'].map((mode) => (
//                 <button
//                   key={mode}
//                   className={`dropdown-item ${currentTheme === mode ? 'selected' : ''}`}
//                   onClick={() => handleThemeSelect(mode)}
//                 >
//                   {mode.charAt(0).toUpperCase() + mode.slice(1)}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// const HeroSection = ({ movie, onWatchTrailer }) => (
//   <section className="hero-section" style={{ backgroundImage: `url(${movie.backgroundImage})` }}>
//     <div className="hero-overlay"></div>
//     <div className="hero-content-container">
//       <div className="hero-text-content">
//         <h1 className="hero-title">{movie.title}</h1>
//         <p className="hero-description">{movie.description}</p>
//         <div className="hero-button-group">
//           <Button text="Watch trailer" onClick={() => onWatchTrailer(movie.trailerUrl)} />
//           <Button text="Watch now" type="primary" onClick={() => alert("Now playing!")} />
//         </div>
//       </div>
//       <div className="hero-poster-container">
//         <img
//           src={movie.posterImage}
//           alt={`${movie.title} Poster`}
//           className="hero-poster-image"
//         />
//       </div>
//     </div>
//   </section>
// );

// const App = () => {
//   const [theme, setTheme] = useState(() => {
//     const stored = localStorage.getItem('theme');
//     if (stored) return stored;
//     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//   });

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [trailerUrl, setTrailerUrl] = useState(null);

//   useEffect(() => {
//     const root = document.documentElement;
//     if (theme === 'dark') {
//       root.classList.add('dark-theme');
//       localStorage.setItem('theme', 'dark');
//     } else if (theme === 'light') {
//       root.classList.remove('dark-theme');
//       localStorage.setItem('theme', 'light');
//     } else {
//       const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//       prefersDark ? root.classList.add('dark-theme') : root.classList.remove('dark-theme');
//       localStorage.removeItem('theme');
//     }
//   }, [theme]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % movies.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="app-container">
//       <Header currentTheme={theme} onThemeChange={setTheme} />
//       <HeroSection movie={movies1[currentIndex]} onWatchTrailer={setTrailerUrl} />
//       {trailerUrl && (
//         <div className="trailer-modal" onClick={() => setTrailerUrl(null)}>
//           <div className="trailer-content" onClick={(e) => e.stopPropagation()}>
//             <iframe
//               width="800"
//               height="450"
//               src={trailerUrl}
//               title="YouTube Trailer"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//             <button className="close-button" onClick={() => setTrailerUrl(null)}>×</button>
//           </div>
//         </div>

        
//       )}



//        <Router>
//       <Routes>
//         <Route path="/" element={<MovieList />} />
//         <Route path="/movie/:id" element={<MovieDetail />} />
//       </Routes>
//     </Router>

    
//     </div>




    
//   );
// };
  

// export default App;





import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/Movielist/Movielist";
import MovieDetail from "./components/MovieDetail/MovieDetail";

const movies1 = [
  {
    title: 'ISHQ',
    description: '“Ishq” is a feel-good romantic thriller that follows Rahul, a charming and carefree young man, and Priya, an independent and sweet-natured girl.',
    backgroundImage: 'https://i.ytimg.com/vi/0gMJTCuR60U/maxresdefault.jpg',
    posterImage: 'https://images.filmibeat.com/ph-big/2011/12/ishq_13250487818.jpg',
    trailerUrl: 'https://www.youtube.com/embed/_eoiB7wq3Kg',
  },
  {
    title: 'IDDARAMMAYILATHO',
    description: '“Iddarammayilatho” is a stylish romantic action drama centered around Sanju Reddy, a talented guitarist living in Spain.',
    backgroundImage: 'https://wallpaperaccess.com/full/2784972.jpg',
    posterImage: 'http://4.bp.blogspot.com/-YkUZtkU76UQ/UX5dOFSPfQI/AAAAAAAAZv8/lucxgVzoa8w/s1600/Iddarammayilatho+Movie+Audio+Released+Special+Wallpapers+12.jpg',
    trailerUrl: 'https://www.youtube.com/embed/b3Ya6RdGZGc',
  },
  {
    title: 'PANDAGA CHESKO',
    description: 'Pandaga Chesko is a high-energy Telugu action-comedy film directed by Gopichand Malineni and stars Ram Pothineni, Rakul Preet Singh, and Sonal Chauhan.',
    backgroundImage: 'https://wallpapercave.com/wp/wp2929413.jpg',
    posterImage: 'https://www.chitramala.in/wp-content/uploads/2015/05/Ram-Pandaga-Chesko-Movie-Censor.jpg',
    trailerUrl: 'https://www.youtube.com/embed/WlhuYvrE3vA',
  },
  {
    title: 'RUDHRAMADEVI',
    description: '"Rudhramadevi" is a historical Telugu epic based on the life of Queen Rudrama Devi, one of the few women to rule in Indian history.',
    backgroundImage: 'https://www.wallpaperbetter.com/wallpaper/608/759/788/anushka-shetty-in-rudramadevi-movie-2K-wallpaper.jpg',
    posterImage: 'http://www.idlebrain.com/images5/still-rudramadevi3.jpg',
    trailerUrl: 'https://www.youtube.com/embed/Fc0QmDnNy3U',
  },
  {
    title: 'SYE RAA NARASIMHA REDDY',
    description: '"Sye Raa Narasimha Reddy" is a historical action drama based on the life of Uyyalawada Narasimha Reddy, a fearless freedom fighter who led a rebellion against British rule in pre-independence India.',
    backgroundImage: 'https://www.socialnews.xyz/wp-content/uploads/2019/09/29/Megastar-Chiranjeevi-Ultra-HD-Stills-from-Sye-Raa-Narasimha-Reddy-Movie-.jpg',
    posterImage: 'https://www.filmibeat.com/fanimg/movie/16347/sye-raa-narasimha-reddy-photos-images-66127.jpeg',
    trailerUrl: 'https://www.youtube.com/embed/KyhrrdpA2YA',
  }
];

const Button = ({ text, type = 'default', onClick }) => {
  const buttonClass = type === 'primary' ? 'button-primary' : 'button-default';
  return (
    <button className={`button ${buttonClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

const Header = ({ currentTheme, onThemeChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleThemeSelect = (theme) => {
    onThemeChange(theme);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="logo"><span>t</span>Movies</div>
      <nav className="nav-links">
        <a href="#" className="nav-item active">Home</a>
        <a href="#" className="nav-item">Movies</a>
        <a href="#" className="nav-item">TV Series</a>
        <div className="theme-switcher-container">
          <button className="theme-toggle-button" onClick={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="theme-dropdown">
              {['dark', 'light', 'system'].map((mode) => (
                <button
                  key={mode}
                  className={`dropdown-item ${currentTheme === mode ? 'selected' : ''}`}
                  onClick={() => handleThemeSelect(mode)}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

const HeroSection = ({ movie, onWatchTrailer }) => (
  <section className="hero-section" style={{ backgroundImage: `url(${movie.backgroundImage})` }}>
    <div className="hero-overlay"></div>
    <div className="hero-content-container">
      <div className="hero-text-content">
        <h1 className="hero-title">{movie.title}</h1>
        <p className="hero-description">{movie.description}</p>
        <div className="hero-button-group">
          <Button text="Watch trailer" onClick={() => onWatchTrailer(movie.trailerUrl)} />
          <Button text="Watch now" type="primary" onClick={() => alert("Now playing!")} />
        </div>
      </div>
      <div className="hero-poster-container">
        <img
          src={movie.posterImage}
          alt={`${movie.title} Poster`}
          className="hero-poster-image"
        />
      </div>
    </div>
  </section>
);

const App = () => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      root.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      prefersDark ? root.classList.add('dark-theme') : root.classList.remove('dark-theme');
      localStorage.removeItem('theme');
    }
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies1.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header currentTheme={theme} onThemeChange={setTheme} />
        <HeroSection movie={movies1[currentIndex]} onWatchTrailer={setTrailerUrl} />

        {trailerUrl && (
          <div className="trailer-modal" onClick={() => setTrailerUrl(null)}>
            <div className="trailer-content" onClick={(e) => e.stopPropagation()}>
              <iframe
                width="800"
                height="450"
                src={trailerUrl}
                title="YouTube Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button className="close-button" onClick={() => setTrailerUrl(null)}>×</button>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
