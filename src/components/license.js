import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const LicenseComponent = () => {
  const licenses = [
    { type: 'Mp3 Lease', price: '$29.99', title:'Mp3 instant access' },
    { type: 'Wav Lease', price: '$49.99', title:'Mp3 instant access' },
    { type: 'Trackout ', price: '$79.99', title:'Mp3 instant access' },
    { type: 'Unlimited License', price: '$99.99', title:'Mp3 instant access' },
  ];

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Licenses
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {licenses.map((license) => (
          <Grid item key={license.type}>
              <Typography variant="h6" align="center" gutterBottom>
                  {license.type}
                </Typography>
                <Typography variant="h4" align="center">
                  {license.price}
                </Typography>
                <Typography variant="h6" align="center">
                  {license.title}
                </Typography>
            <Card>
              <CardContent>
               
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LicenseComponent;