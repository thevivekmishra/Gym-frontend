import React from 'react'

const Gallery = () => {
  const gallery = [
    "/img1.webp","/img2.jpg","/img3.jpg","/img4.jpg","/img5.jpg","/img6.jpg","/img7.jpg","/img8.jpg","/pricing.jpg",
  ]
  return (
    <section className='gallery'>
      <h1>Better Beats Best</h1>
      <div className='images'>
        <div>
          {gallery.slice(0,3).map((element,index) => (
            <img key= {index} src={element} alt="image_gallery"/>
          ))}
        </div>

        <div>
          {gallery.slice(3,6).map((element,index) => (
            <img key= {index} src={element} alt="image_gallery"/>
          ))}
        </div>

        <div>
          {gallery.slice(6,9).map((element,index) => (
            <img key= {index} src={element} alt="image_gallery"/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery