import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Paragraph from "../../components/Paragraph"



const Details = () => {

    const [details, setDetails] = useState({
        title: '',
        image_id: '',
        exhibition_history: '',
        artist_title: '',
        dimensions: '',
        provenance_text: '',
        publication_history: '',
        medium_display: '',
    })

    const { id } = useParams()
    useEffect(() =>{
        const fetchData = async () => {
            try {
                const detail = await axios.get(`https://api.artic.edu/api/v1/artworks/${id}`)
                setDetails({
                    title: detail.data.data.title,
                    image_id: detail.data.data.image_id,
                    exhibition_history: detail.data.data.exhibition_history,
                    artist_title: detail.data.data.artist_title,
                    dimensions: detail.data.data.dimensions,
                    provenance_text: detail.data.data.provenance_text,
                    publication_history: detail.data.data.publication_history,
                    medium_display: detail.data.data.medium_display,
                }) 
                console.log(detail.data.data)           
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])

    return(
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:"center", paddingTop: '20px'}}>
            <Typography align="center" fontWeight='600' pt='1.5rem' variant='h4' component='h1'>
                {details.title}
            </Typography>
            <Typography align="center" variant='h6'>
               {`Author: ${details.artist_title || "Unkonwn"}`}
            </Typography>
            <img style={{paddingTop: '3rem'}}
                src={`https://www.artic.edu/iiif/2/${details.image_id}/full/843,/0/default.jpg?w=248&fit=crop&auto=format`}
                srcSet={`https://www.artic.edu/iiif/2/${details.image_id}/full/843,/0/default.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                // src={`https://www.artic.edu/iiif/2/${details.image_id}/full/843,/0/default.jpg`} />
                alt={details.image_id}
                loading="lazy"
            />
            {details.dimensions && <Box width='60%'display="flex" flexDirection="column" alignItems="center">
                <Typography variant="body1" fontWeight='600' p="1.5rem">
                    {details.dimensions}
                </Typography>
            </Box>}
            <Paragraph title="Exhibition History" content={details.exhibition_history} />
            <Paragraph title="Provenance" content={details.provenance_text} />
            <Paragraph title="Publication History" content={details.publication_history} />
            <Paragraph title="Medium" content={details.medium_display} />
        </Box>
    )
}

export default Details;