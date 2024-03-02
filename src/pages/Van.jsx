import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function Van() {
    const [vanDetails, setVanDetails] = useState({})
    const params = useParams()

    useEffect(() => {
        fetch(`/api/van-data/vid/${params.id}`)
        .then(res => res.json())
        .then(json => setVanDetails(json.vans))
    },[])

    console.log(vanDetails)

    return(
        <div>
            <h1>{vanDetails.name}</h1>
        </div>
    )
}