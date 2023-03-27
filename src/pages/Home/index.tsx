import { Box, Typography, ImageList, ImageListItem } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";


const Home = () => {

    interface DocId{
        image_id: string,
        id: string,
    }
    const [dataToRender, setDataToRender] = useState<DocId[]>([])

    const fetchData = async () => {
        try {
            const apiData = await axios.get(`https://api.artic.edu/api/v1/artworks?page=1&limit=100`)
            const data = apiData.data.data.filter((element: DocId ) => element.image_id !== null)
            setDataToRender(data)
        }
        catch(err){
            console.log(err)
        }
    }


   
    useEffect(() => {
        fetchData()
    },[fetchData]) 
    
    return (
        <Box  sx={{display: 'flex',flexDirection: 'column', alignItems:'center'}}>
            <Box  sx={{display: 'flex', width: 700, height: 450, flexDirection: 'column', alignItems:'center'}}>
                <Typography align="center" fontWeight='600' padding='20px' variant='h4' component='h1'>
                    Art Institute of Chicago
                </Typography>
                <ImageList role="image-list" variant="masonry" cols={3} gap={8}>
                    {dataToRender?.map((element: DocId) => {
                        if(element.image_id) return(
                            <ImageListItem key={element.image_id}>
                                <Link to={`/details/${element.id}`}>
                                    <img 
                                        role="images"
                                        src={`https://www.artic.edu/iiif/2/${element.image_id}/full/843,/0/default.jpg?w=248&fit=crop&auto=format`}
                                        srcSet={`https://www.artic.edu/iiif/2/${element.image_id}/full/843,/0/default.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        // src={`https://www.artic.edu/iiif/2/${element.image_id}/full/843,/0/default.jpg`} />
                                        alt=""
                                        loading="lazy"
                                    />
                                </Link>
                            </ImageListItem>
                        )
                        return <Typography role="no-image-text" align="center" paddingTop="1rem">No Available image for this piece</Typography>;
                    })}
                </ImageList>
            </Box>
        </Box>
    )
}

export default Home