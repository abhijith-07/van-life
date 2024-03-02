import { useEffect } from "react"
import { useParams } from "react-router-dom"


export default function Van() {
    const params = useParams()

    useEffect(() => {
        fetch(`/api/van-data/vid/${params.id}`)
        .then(res => res.json())
        .then(json => console.log(json))
    },[])

    return(
        <h2>{params.id}</h2>
    )
}