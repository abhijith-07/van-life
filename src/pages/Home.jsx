import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

export default function Home() {
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
                <Image src="/images/nature-van.jpg" alt="" {...(showImg === 0) ? {$status:"active"} : {$status:""} }/>
                <Image src="/images/snow-van.jpg" alt="" {...(showImg === 1) ? {$status:"active"} : {$status:""} }/>
                <Image src="/images/couple-van.jpg" alt="" {...(showImg === 2) ? {$status:"active"} : {$status:""} }/>
                <Image src="/images/yellow-van.jpg" alt="" {...(showImg === 3) ? {$status:"active"} : {$status:""} }/>
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
