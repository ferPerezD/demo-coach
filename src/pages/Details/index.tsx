import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const Details = () => {

    const [details, setDetails] = useState({
        title: '',
        image_id: '',
        exhibition_history: '',
        artist_title: ''
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
                    artist_title: detail.data.data.artist_title
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
            <Typography data-testid="title-detail" align="center" fontWeight='600' pt='1.5rem' variant='h4' component='h1'>
                {details.title}
            </Typography>
            <Typography align="center" variant='h6'>
               {`Author: ${details.artist_title || "Unkonwn"}`}
            </Typography>
            <img style={{paddingTop: '3rem'}} role="img"
                src={`https://www.artic.edu/iiif/2/${details.image_id}/full/843,/0/default.jpg?w=248&fit=crop&auto=format`}
                srcSet={`https://www.artic.edu/iiif/2/${details.image_id}/full/843,/0/default.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                // src={`https://www.artic.edu/iiif/2/${details.image_id}/full/843,/0/default.jpg`} />
                alt="No image available"
                loading="lazy"
            />
            {details.exhibition_history && <Box width='60%' pt="3rem" display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h6" fontWeight='600'>
                    Exhibition History
                </Typography>
                <Typography variant="body1" fontWeight='600' p="1.5rem">
                    {details.exhibition_history}
                </Typography>
            </Box>}
        </Box>
    )
}

export default Details;