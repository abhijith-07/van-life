import { useOutletContext } from "react-router-dom"
import styled from "styled-components"

export default function HostVanInfo() {
    const {vanDetails} = useOutletContext()
    return(
        <Info>
            <p> <b>Name:</b> {vanDetails.name} </p> <br />
            <p> <b>Category:</b> {vanDetails.type} </p> <br />
            <Description> <b>Description:</b> {vanDetails.description} </Description>
        </Info>
    )
}

const Info = styled.div`
    margin: 1.5rem;
`

const Description = styled.p`
    line-height: 1.5rem;
    text-align: justify;
    letter-spacing: .15rem;
`