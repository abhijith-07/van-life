import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import styled from "styled-components"

export default function VansList() {
    const [vansImg, setVansImg] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()
    
    const typeFilter = searchParams.get("type")

    function searchFilter(event) {
        const params = event.target
        console.log(params)
    }

    const displayedVans = typeFilter 
    ? vansImg.filter(van => van.type === typeFilter)
    : vansImg

    useEffect(() => {
        fetch("/api/van-data/vans/")
        .then(res => res.json())
        .then(json => {
            setVansImg(json.images)
        })
    }, [])

    return(
        <>
        <ExploreHead>Explore Our Van Options</ExploreHead>
        <VanFilters>
            <Link>Simple</Link>
            <Link>Luxury</Link>
            <Link>Rugged</Link>
            <p className="clear">Clear Filters</p>
        </VanFilters>
        <VanContainer>
            {
                displayedVans.map((img, idx) => (
                    <Link to={`/vans/van/${img.id}`} key={idx} >
                        <Card>
                            <img src={img.url} alt="" />
                            <div>
                                <h6>Van {img.id}</h6>
                                <p className= {`type-${img.type}`} > {img.type.charAt(0).toUpperCase() + img.type.slice(1)} </p>
                            </div>
                        </Card>
                    </Link>
                ))
            }
        </VanContainer>
        </>
    )
}

const ExploreHead = styled.h1`
    margin: 1em 0;
`

const VanFilters = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1em 0;
    padding: 1em 0 ;
    border-top: 1px solid #cd5302;
    border-bottom: 1px solid #cd5302;

    a {
        padding: 0.25em 1em;
        color: #fffafa;
        background-color: #cd5302;
        cursor: pointer;
    }

    p.clear {
        background-color: transparent;
        color: #000;
        text-decoration: underline;
        padding: 0.25em 0;
        font-size: 0.8rem;
    }
`

const VanContainer = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    padding: 1rem 0;

    a{
        cursor: pointer;
        text-decoration: none;
        color: #000;
    }
`

const Card = styled.div`
    width: 100%;
    
    img {
        border-radius: 1em 1em 0 0;
        width: 100%;
    }

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    div h6 {
        text-align: center;
        font-size: 1rem;
    }

    div p {
        padding: 0.5em 1em;
        color: #fff;
        border-radius: 0.25em;
    }

    .type-simple {
        background-color: green;
    }

    .type-luxury {
        background-color: #e49400;
    }

    .type-rugged {
        background-color: #c8015b;
    }
`