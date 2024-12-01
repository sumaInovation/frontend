import React, { useContext } from 'react';
import { MachineDataContext } from '../contexr/MachineDataContext';
import { Paper, Typography, Grid, Card, CardContent } from '@mui/material';

const Dashboard = () => {
  const machineData = useContext(MachineDataContext);

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Machine Data Dashboard
      </Typography>
      <Grid container spacing={2}>
        {machineData.map((machine) => (
          <Grid item xs={12} sm={6} md={4} key={machine.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{machine.name}</Typography>
                <Typography>Status: {machine.status}</Typography>
                <Typography>Temperature: {machine.temperature}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Dashboard;
