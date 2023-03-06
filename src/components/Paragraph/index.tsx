import { Box, Typography } from "@mui/material"

interface Props {
    title: string,
    content: string

}

const Paragraph = ({title, content}: Props) => {

    return(
        <>
            {content && <Box width='60%' pt="3rem" display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" fontWeight='600'>
                {title}
            </Typography>
            <Typography variant="body1" fontWeight='600' p="1.5rem">
                {content}
            </Typography>
            </Box>}
        </>
    )
} 

export default Paragraph;