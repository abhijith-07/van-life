import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const {vanDetails} = useOutletContext()

    return(
        <img src={vanDetails.url} alt="" width="200px"/>
    )
}

