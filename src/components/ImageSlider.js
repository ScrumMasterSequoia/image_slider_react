import { SliderData } from './SliderData'
import { useState, useEffect } from 'react'

const ImageSlider = ({ slides }) => {
    const[current, setCurrent] = useState(0) //initial state is 0
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1) // incriment if not at end
    }

    console.log(current)

    const rotate = () => {
        window.setTimeout(() => {
            nextSlide()
        }, 4000)
        }

    useEffect(() => {
        rotate()
        console.log('use effect')
    },[current]) 

    if(!Array.isArray(slides) || slides.length<=0) {
        return null
    }

    return (
        <div>
            <section className="slider">
                {
                    SliderData.map((slide, index) => {
                        return(// only display the current slide using classes
                            <div className={index === current ? 'slide active' : 'slide'} key={index}> 
                                {index === current && (<img src={slide.image} alt="Failed to load" className="image"/>)}
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default ImageSlider




// Original application used arrow keys to change image


//import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

// <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
// <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/> */}

// const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1)
// }


// Sample showing how to use the map function with use state
{/* {
[1,2,3].map((num, index) => {
const useState(num)
const[number, setNumber] = useState(0)
return <div key={index} > {num}  </div>
}) 
} */}