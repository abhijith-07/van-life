import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Vans() {
    const [vansImg, setVansImg] = useState([])
    
    useEffect(() => {
        fetch("/api/van-data/vans/")
        .then(res => res.json())
        .then(json => setVansImg(json.images))
    }, [])

    return(
        <VanContainer>
            {
                vansImg.map((img, idx) => (
                    <Card>
                        <img src={img.url} key={idx} alt="" />
                        <h6>Van {idx + 1}</h6>
                    </Card>
                ))
            }
        </VanContainer>
    )
}


const VanContainer = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    padding: 1rem 0 70px 0;
`

const Card = styled.div`
    width: 100%;
    
    img {
        border-radius: 1em 1em 0 0;
        width: 100%;
    }

    h6 {
        text-align: center;
    }
`