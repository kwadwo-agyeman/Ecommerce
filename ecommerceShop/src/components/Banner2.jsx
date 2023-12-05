import { Typography } from '@mui/material'
import React from 'react'

function Banner2() {
  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          color: "black",
          fontWeight: 600,
          fontSize: { xs: "50px", sm: "60px" },
        }}
      >
        NEW SHOE ARRIVALS
      </Typography>
    </div>
  )
}

export default Banner2
