import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const experiencePoints = [
    "Spearheaded the development and deployment of dynamic web applications utilizing the MERN stack, ensuring high levels of performance and responsiveness across various devices.",
    "Enhanced application scalability and overall performance through meticulous code optimization and strategic API integrations, leading to improved user experiences.",
    "Collaborated closely with cross-functional teams, including designers and projectmanagers, to deliver robust, client-centric solutions that adhere to project timelines and specifications.",
    "Implemented version control practices using Git and GitHub, facilitating seamless collaboration among team members and maintaining a clear history of code changes.",
    "Conducted thorough testing and debugging processes to identify and resolve issues, ensuring the delivery of high-quality software products."
  ];

  return (
    <section id="experience">
      <Typography variant="h4" py={2} gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
        Experience
      </Typography>
      
      <Timeline position={isMobile ? 'right' : 'alternate'} sx={{
        padding: 0,
        '& .MuiTimelineItem-root:before': {
          flex: 0,
          padding: 0
        }
      }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" sx={{ mx: 1 }} />
            {!isMobile && <TimelineConnector />}
          </TimelineSeparator>
          
          <TimelineContent sx={{ 
            py: '12px',
            px: 2,
            // maxWidth: { xs: '100%', md: '50%' },
            marginLeft: isMobile ? 0 : 'auto'
          }}>
            <Box sx={{
              p: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 3,
              position: 'relative',
              overflow: 'visible',
              '&:before': {
                content: '""',
                position: 'absolute',
                left: isMobile ? -8 : 'auto',
                right: isMobile ? 'auto' : -8,
                top: 20,
                width: 16,
                height: 16,
                backgroundColor: 'background.paper',
                transform: 'rotate(45deg)',
                boxShadow: 3
              }
            }}>
              <Typography variant="h6" component="div">
                Software Developer - SumaSoft
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                May 2024 – December 2024 | Pune
              </Typography>

              {experiencePoints.map((text, index) => (
                <Box key={index} sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  mb: 1,
                  '&:last-child': { mb: 0 }
                }}>
                  <Typography 
                    variant="body1" 
                    sx={{
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      lineHeight: 1.5
                    }}
                  >
                    ■ {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
};

export default Experience;