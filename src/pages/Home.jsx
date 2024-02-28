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
                <Hero>Welcome to Van Life <span>- Your Gateway to Adventure!</span></Hero>
                <ExploreBtn>Start Exploring</ExploreBtn>
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

const Hero = styled.h1`
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    
    span {
        font-size: 1.5rem;
        font-weight: 400;
        white-space: nowrap;
    }
`

const ExploreBtn = styled.button`
    width: 100%;
    background-color: #ff8437;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: .125em;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 1em;
    margin: 1em 0;
`

const Image = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    
    display: ${props => props.$status === "active" ? "block" : "none" };
`
