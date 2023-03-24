import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



const ProductCard = ( ) => {

    // const product = productDetails

    return (
        <Card sx={{ borderStyle: "solid", borderColor: "#999999", borderRadius: "10px", borderWidth: "1.9px", p:2, m:1}}>
            {/* Product Image, Sponsored */}
            <CardMedia
                sx={{ height: 200, width: "auto", borderRadius: "10px" }}
                image={"https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"}
                title="product"
            >
                {/* {product.sponsored === "yes" || product.sponsored === "Yes" ?
                    <Box sx={{ maxWidth: "30%", borderRadius: "40px", borderWidth: "1.9px", backgroundColor: "#999999" }}>
                        <Typography variant="body2" color="inherit" sx={{ p: 0.5, textAlign: "center" }}> Sponsored </Typography>
                    </Box>
                    :
                    <></>} */}
            </CardMedia>

            {/* Product Name, Price, Description */}
            <CardContent sx={{ height: 120 }}>
                <Typography gutterBottom variant="h6" >Green Shoes</Typography>
                <Typography gutterBottom variant="h6" > KES 2,500 </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary"> This is the description of the product</Typography>
                <Rating value={4} readOnly  />
            </CardContent>

            <CardActions>
                <Button size="small" variant="contained" color="inherit" startIcon={<EditIcon />} 
                // onClick={() => handleEdit(product)} 
                >Edit</Button>
                <Button size="small" variant="contained" color="inherit" 
                startIcon={<DeleteIcon />} 
                // onClick={() => handleDelete(product._id)}
                 >Delete</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard