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
  useMediaQuery,
  SvgIcon,
} from "@mui/material";
import { motion } from "framer-motion";

import { Email, Phone, LocationOn } from "@mui/icons-material";
import { LinkedIn, GitHub, X } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <section id="about">
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            
          >
            <Grid container>
              <Grid style={{ display: "flex", justifyContent: "center" }} item xs={12}>
                <Avatar
                  src="/profilepic2.jpg"
                  sx={{
                    width: 250,
                    height: 250,
                    boxShadow: 6,
                    // Add border for better visibility
                    border: "3px solid",
                    borderColor: "primary.main",
                    // Ensure image fills the avatar
                    "& .MuiAvatar-img": {
                      objectFit: "cover",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  py={2}
                  sx={{
                    fontWeight: 600,
                    color: "primary.main",
                    textAlign: "center",
                  }}
                >
                  Shridhar Kandikatla
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} md>
          <Typography
            variant="h5"
            py={2}
            sx={{
              fontWeight: 600,
              color: "primary.main",
              textAlign: isMobile ? "center" : "left",
            }}
            paragraph
          >
            Full Stack Web Developer
          </Typography>
          <Typography paragraph>
            Seeking opportunities in a vibrant workplace that promotes career
            advancement and achievement, utilizing expertise in Software
            Development & Web Development to contribute effectively within the
            IT Sector.
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
              <ListItemText primary="Solapur, Maharashtra, India" />
            </ListItem>
          </List>
          <Box ml={isMobile ? 0 : 8} textAlign={isMobile ? "center" : "left"}>
            <Button
              variant="outlined"
              size="large"
              href="https://drive.google.com/file/d/1UnAvAGsFmloghe3s-HlVAPQqRqHoqdhC/view?usp=drive_link"
              target="_blank"
              sx={{ mb: 3 }}
            >
              Download Resume
            </Button>

            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "center" : "left",
                gap: 2,
              }}
            >
              <Link
                href="https://www.linkedin.com/in/shridhar-kandikatla/"
                target="_blank"
              >
                <LinkedIn fontSize="large" color="primary" />
              </Link>
              <Link
                href="https://github.com/ShridharKandikatla"
                target="_blank"
              >
                <GitHub fontSize="large" color="primary" />
              </Link>
              <Link href="https://x.com/Shridhar2001" target="_blank">
                <X fontSize="large" color="primary" />
              </Link>
              <Link
                href="https://stackoverflow.com/users/13819276/shridhar-kandikatla"
                target="_blank"
              >
                <SvgIcon viewBox="0 0 24 24">
                  <path d="M17.2 19.7V14.8H19V21H4V14.8H5.8V19.7H17.2ZM7.2 18.3H16V16.5H7.2V18.3ZM7.3 14.9L15.1 16.2L15.3 14.4L7.6 13L7.3 14.9ZM8.2 11.1L15.5 13.7L16.1 12L8.9 9.4L8.2 11.1ZM9.8 7.1L16.6 11.2L17.5 9.6L10.8 5.5L9.8 7.1ZM12.3 2L11 3.5L17.7 8.5L19 7L12.3 2Z" />
                </SvgIcon>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
    </section>
  );
};

export default About;
