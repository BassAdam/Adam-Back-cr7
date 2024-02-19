import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../assets/styles/home.css";
import goImage from "../assets/images/babyronaldo.jpg";
import goImage2 from "../assets/images/sportingcr7.jpg";
import goImage3 from "../assets/images/portugalcr7.jpeg";
import goImage4 from "../assets/images/manucr7.jpg";
import goImage5 from "../assets/images/realcr7.jpeg";
import goImage6 from "../assets/images/juventuscr7.jpg";
import goImage7 from "../assets/images/cr7manu22.jpeg";
import goImage8 from "../assets/images/alnasrcr7.jpeg";
import Image from "./Image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Middlepage from "./Middlepage";
import Alnasr from "./Alnasr";

function Home() {
  const [images, setImage] = useState([
    { id: 1, value: goImage },
    { id: 2, value: goImage2 },
    { id: 3, value: goImage3 },
    { id: 4, value: goImage4 },
    { id: 5, value: goImage5 },
    { id: 6, value: goImage6 },
    { id: 7, value: goImage7 },
    { id: 8, value: goImage8 },
  ]);

  // CAROUSEL
  useEffect(() => {
    const interval = setInterval(() => {
      // Défiler vers la droite
      const updatedImages = [...images.slice(1), images[0]];
      setImage(updatedImages);
    }, 1000); // Modifier la durée du défilement selon vos besoins

    return () => clearInterval(interval);
  }, [images]);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 6, // Ajustez le nombre de slides visibles à la fois
    slidesToScroll: 1,
    
   
  };


  return (
    <div className="bloc-home">
      <h1>Une carrière de footballeur honorable</h1>

      <Slider {...settings} className="images-home">
        {images.map((element) => (
          <div key={element.id}>
            <Image img={element.value} />
          </div>
        ))}
      </Slider>
      <Middlepage />
      <Alnasr />
    </div>
  );

}

export default Home;
