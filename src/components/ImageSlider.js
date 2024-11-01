import React,{useState} from 'react'

const data = [
   "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  " https://hatrabbits.com/wp-content/uploads/2017/01/random-word-1.jpg",
  "https://hatrabbits.com/wp-content/uploads/2017/01/tafel-1.jpg",
  "https://hatrabbits.com/wp-content/uploads/2017/01/slurf-1.jpg",
  "https://www.shutterstock.com/image-vector/random-chaotic-lines-hand-drawing-260nw-2113143038.jpg"
]

const ImageSlider = () =>{
     
    let [activeImageIndex,setActiveImageIndex] = useState(0)

     const handleNextClick = () =>{
        setActiveImageIndex((activeImageIndex+1) % data.length);
     }

     const handlePreviousClick = () =>{
          setActiveImageIndex(!activeImageIndex ? data.length-1 : activeImageIndex-1)

        // if(activeImageIndex === 0) setActiveImageIndex(data.length-1)
        //  else setActiveImageIndex(activeImageIndex-1);
     }

    return(
        <>
           <div className='flex justify-center'> 
            <button type="button" className='m-2 p-2 font-bold' onClick={handlePreviousClick}>Previous</button>
             {data.map((url,i)=> ( <img className={'w-[400px] h-[200px] object-contain ' +
                    (activeImageIndex === i ? "block" : "hidden")
                  } src={url} alt="Wallpaper" />
            ))}
            <button type="button" className='m-2 p-2 font-bold' onClick={handleNextClick}>Next</button>
           </div>
        </>
    )
}

export default ImageSlider