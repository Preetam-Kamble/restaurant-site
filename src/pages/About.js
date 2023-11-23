import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: "center",
        p: 2,
        "& h4":{
          fontWeight:"bold",
          my: 2,
          fontSize: "2rem",
        },
        "& p":{
          textAlign:"justify",
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4":{
            fontSize:"1.5rem",
          }
        }
        
      }}>
        <Typography variant="h4">
          Welcome to our Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem magni iure! Veritatis aut repudiandae omnis ipsum nemo repellendus vel, tempora mollitia ullam maxime aliquam. Placeat nulla repellat nihil. Facere, commodi quas quos accusamus cumque, vel beatae itaque debitis tenetur expedita inventore error dolores ipsa culpa modi quae, ipsam earum vero temporibus repudiandae suscipit. Excepturi atque exercitationem consequatur saepe nihil, autem porro dolor, ea nulla temporibus laboriosam tempora debitis. Nisi perspiciatis tempore repudiandae tenetur, voluptas eveniet soluta corrupti, veniam iure atque, sit possimus. Pariatur obcaecati quam enim. Sit nulla enim accusamus totam iure in voluptatum, ex fugit, amet adipisci repellendus!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor explicabo perferendis quae maxime illum corrupti veniam sed atque hic saepe harum nulla laboriosam, earum architecto vero amet deserunt. Facere unde a eveniet, soluta aspernatur dolorum, quasi asperiores illum perspiciatis sit ab rerum ipsa fuga illo consequatur debitis autem eius inventore similique, aliquid doloribus sequi laboriosam aliquam ducimus? Adipisci ab enim vero consequuntur earum autem quas, perspiciatis quidem ad nulla. Beatae neque reprehenderit culpa quia dignissimos quod officia provident doloremque sint fugit natus distinctio tenetur nobis ad aliquid voluptatum, rerum dolorem ab! Ratione excepturi nemo nostrum possimus quos explicabo hic cum.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
