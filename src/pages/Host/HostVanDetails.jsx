import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetails() {

    const [vanDetails, setVanDetails] = useState({});
    const {id} = useParams();
    
    useEffect(
        () => {
            fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVanDetails(data.vans))
        }
    ,[]);

    console.log(vanDetails.name)

    return(
        <>
        </>
    )
}