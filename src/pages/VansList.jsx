import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function VansList() {
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
                    <Link to={`/vans/van/${img.id}`} key={idx} >
                        <Card>
                            <img src={img.url} alt="" />
                            <h6>Van {img.id}</h6>
                        </Card>
                    </Link>
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

    a{
        cursor: pointer;
    }
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