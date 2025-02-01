import { useState } from 'react';

import { Box, Typography, Chip, Tabs, Tab, Paper, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';

const skillsData = [
  { 
    category: 'Frontend', 
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Redux', 'Material-UI', 'Tailwind CSS', 'Bootstrap']
  },
  { 
    category: 'Backend', 
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST APIs', 'WebSockets']
  },
  { 
    category: 'Tools', 
    skills: ['Git', 'GitHub', 'Docker', 'AWS EC2', 'Nginx', 'PM2', 'Webpack', 'Vite']
  },
  {
    category: 'Soft Skills',
    skills: ['Communication', 'Problem Solving', 'Teamwork', 'Leadership', 'Time Management', 'Adaptability']
  }
];

const Skills = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <section id="skills">
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>Skills</Typography>
      <Tabs 
        value={tabValue} 
        onChange={(e, newValue) => setTabValue(newValue)}
        variant="scrollable"
        scrollButtons="auto"
      >
        {skillsData.map((category, index) => (
          <Tab label={category.category} key={index} />
        ))}
      </Tabs>
      <Box mt={2}>
        <Paper elevation={3} sx={{ p: 2 }}>
          {skillsData[tabValue].skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              color="primary"
              variant="outlined"
              sx={{ m: 0.5 }}
            />
          ))}
        </Paper>
      </Box>
      
      {/* Certifications */}
      <Box mt={4}>
  <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
    Certifications
  </Typography>
  
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3,
          height: '100%',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 6
          }
        }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <SchoolIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
          <Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Programming Fundamentals
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Coursera
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Chip 
            label="2 Months" 
            color="primary" 
            variant="outlined" 
            size="small" 
            sx={{ fontWeight: 500 }}
          />
          <Typography variant="caption" color="text.secondary">
            Issued: 2021
          </Typography>
        </Box>
      </Paper>
    </Grid>

    <Grid item xs={12} md={6}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3,
          height: '100%',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 6
          }
        }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <CodeIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
          <Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Full Stack Web Development
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              PrepInsta
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Chip 
            label="6 Months" 
            color="primary" 
            variant="outlined" 
            size="small" 
            sx={{ fontWeight: 500 }}
          />
          <Typography variant="caption" color="text.secondary">
            Issued: 2023
          </Typography>
        </Box>
      </Paper>
    </Grid>
  </Grid>
</Box>
    </section>
  );
};

export default Skills;