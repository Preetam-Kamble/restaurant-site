import React from 'react';
import Layout from '../components/Layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my: 5, ml:10, "& h4":{fontWeight:"bold", mb: 2}}}>
        <Typography variant="h4">
          Contact to our Restaurant
        </Typography>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel vero iusto repudiandae. Quibusdam perspiciatis quis deleniti delectus id quod animi omnis, eligendi earum debitis fugiat ratione, dicta optio repellat? Tempora!</p>
      </Box>
      <Box sx={{m:3, width:"600px", ml:10, "@media (max-width:600px)":{
        width:"300px",
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"black", color:"white"}} align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:"red", pt:1}}/>1800-00-000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <EmailIcon sx={{color:"skyblue", pt:1}}/>my@resto.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <CallIcon sx={{color:"green", pt:1}}/>9596949850
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
