import { useOutletContext } from "react-router-dom"
import styled from "styled-components"

export default function HostVanPricing() {

    const { vanDetails } = useOutletContext()

    return(
        <Price> &#8377; {vanDetails.price}/Day </Price>
    )
}


const Price = styled.p`
    margin: 2rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    border: 1px solid black;
    padding: 1rem;
`