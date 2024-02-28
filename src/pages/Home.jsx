import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

export default function Home() {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch("/api/van-data")
        .then( (res) => res.json() )
        .then( (json) => {
            setImages(json.images)
        } )
    }, [])

    const [showImg, setShowImg] = useState(0);

    const nextImage = () => {
        setShowImg((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }

    useEffect(() => {
        const slideInterval = setInterval(nextImage, 3000);
        return () => clearInterval(slideInterval);
    }, [showImg]);

    return(
        <>
            <section className="hero">
                <h1>Welcome to Van Life - Your Gateway to Adventure!</h1>
                <button>Start Exploring</button>
            </section>
            <section className="features">
                {
                    images.map((image, index) => (
                            <Image src={image.url} alt="image" key={index} {...(showImg === index) ? {$status:"active"} : {$status:""} }/>
                    ))
                }
            </section>
        </>
    )
}

const Image = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    
    display: ${props => props.$status === "active" ? "block" : "none" };
`
