import React, { useEffect, useState } from 'react'
import { getGifs } from './../lib/getGifs'
import { GifCard } from './GifCard'

export const GiftGrid = ({ category }) => {
    const [images, setImages] = useState([])
    const getImages = async () => {
        const newImages = await getGifs(10, category);
        setImages(newImages)
    }
    useEffect(() => {
        getImages();

    }, [])

    return (

        <>
            <h2> {category} </h2>
            <div className='card-grid'>

                {
                    images.map(({ id, title, url }) => (
                        <GifCard key={id} title={title} url={url} />
                    ))
                }
            </div>
        </>
    )
}
