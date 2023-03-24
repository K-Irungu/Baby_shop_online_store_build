import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button  from '@mui/material/Button'
import Paper  from '@mui/material/Paper'
import ProductCard from './ProductCard'


const MainPage = () => {
  return (
    <Grid >
      <Paper sx={{ mt: 8.5, p: 1.5 }}>

        <Box >
          {/* <Button color="inherit" variant="outlined" endIcon={<ControlPointIcon />} onClick={handleAddNewProduct}> Add new product  </Button> */}
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {/* {cards} */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </Box>

      </Paper>
    </Grid>

  )


}

export default MainPage