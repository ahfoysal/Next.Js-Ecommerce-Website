import React from 'react'

const ImagesContainer = ({images}) => {
  return (
    <div className="col-md-5 text-center">
  
                  {images?.slice(0,4).map((image, index) => (
                   
                   <img
          key={index}
          src={image?.src}
          className={index === 0 ? 'img-fluid mb-3' : 'border border-secondary me-2'}
          width={index === 0 ? '100%' : '75px'}
          alt={image?.alt}
        />
                    
      ))}
              </div>
  )
}

export default ImagesContainer