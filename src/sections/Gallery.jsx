const galleryImages = [

  "/NK-Web/assets/images/gallery/gallery1.jpg",
  "/NK-Web/assets/images/gallery/gallery2.jpg",
  "/NK-Web/assets/images/gallery/gallery3.jpg",
  "/NK-Web/assets/images/gallery/gallery4.jpg",
  "/NK-Web/assets/images/gallery/gallery5.jpg",
  "/NK-Web/assets/images/gallery/gallery6.jpg",
  "/NK-Web/assets/images/gallery/gallery7.jpg",
  "/NK-Web/assets/images/gallery/gallery8.jpg",
  "/NK-Web/assets/images/gallery/gallery9.jpg",
  "/NK-Web/assets/images/gallery/gallery10.jpg",
  "/NK-Web/assets/images/gallery/gallery11.jpg",

];

function Gallery(){

  return(

    <section
      id="gallery"
      className="section"
    >

      <h2 className="section-title">
        Gallery
      </h2>

      <div className="gallery-masonry">

        {

          galleryImages.map((image,index)=>(

            <div
              key={index}
              className="gallery-card glass"
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                className="gallery-image"
              />

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default Gallery;