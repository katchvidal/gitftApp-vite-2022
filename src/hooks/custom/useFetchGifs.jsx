import React, { useEffect, useState } from 'react'
import { getGifs } from '../../lib/getGifs'

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const getImages = async () => {
        const newImages = await getGifs(10, category);
        setImages(newImages)
        setTimeout(() => {
            setisLoading(false)
        }, 2000);
    }
    useEffect(() => {
        getImages();

    }, [])
    return {
        images,
        isLoading
    }
}
