import {
  Grid,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
  Divider,
  Link,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";

import { Email, Phone, LocationOn } from "@mui/icons-material";
import { LinkedIn, GitHub, X } from '@mui/icons-material';
import { useTheme } from "@emotion/react";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
return (
  <section id="about">
  <Grid container spacing={1} alignItems="center">
  <Grid item xs={12} md={3}>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Avatar
          src="/profilepic2.jpg"
          sx={{
            width: 250,
            height: 250,
            boxShadow: 6,
            // Add border for better visibility
            border: '3px solid',
            borderColor: 'primary.main',
            // Ensure image fills the avatar
            '& .MuiAvatar-img': {
              objectFit: 'cover'
            }
          }}
        />
      </motion.div>
    </Grid>
    <Grid item xs={12} md>
      <Typography variant="h4" py={2} sx={{ fontWeight: 600, color: 'primary.main' }} paragraph>
        Full Stack Web Developer
      </Typography>
      <Typography paragraph>
        Seeking opportunities in a vibrant workplace that promotes career
        advancement and achievement, utilizing expertise in Software
        Development & Web Development to contribute effectively within the IT
        Sector.
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Email color="primary" />
          </ListItemIcon>
          <ListItemText primary="shridharkandikatla@gmail.com" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Phone color="primary" />
          </ListItemIcon>
          <ListItemText primary="+91-7385346092" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocationOn color="primary" />
          </ListItemIcon>
          <ListItemText primary="New Paccha Peth, Solapur, Maharashtra, India" />
        </ListItem>
      </List>
      <Box ml={isMobile ? 0 : 8} textAlign={isMobile ? 'center' : 'left'}>
          <Button
            variant="outlined"
            size="large"
            href="https://drive.google.com/file/d/1UnAvAGsFmloghe3s-HlVAPQqRqHoqdhC/view?usp=drive_link"
            target="_blank"
            sx={{ mb: 3 }}
          >
            Download Resume
          </Button>
          
          <Box sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'left', gap: 2 }}>
            <Link href="https://www.linkedin.com/in/shridhar-kandikatla/" target="_blank">
              <LinkedIn fontSize="large" color="primary" />
            </Link>
            <Link href="https://github.com/ShridharKandikatla" target="_blank">
              <GitHub fontSize="large" color="primary" />
            </Link>
            <Link href="https://x.com/Shridhar2001" target="_blank">
              <X fontSize="large" color="primary" />
            </Link>
          </Box>
        </Box>
    </Grid>
  </Grid>
  <Divider sx={{ my: 2 }} />
</section>
)
};

export default About;
