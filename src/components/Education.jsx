import { motion } from "framer-motion";

import { Box, Typography, Grid, Paper, Chip } from "@mui/material";

const Education = () => {
  const education = [
    {
      degree: "B.Tech. in Computer Science and Engineering",
      institution: "NK Orchid College",
      location: "Solapur",
      duration: "June 2019 – June 2023",
      courses: [
        "Relevant Coursework: DBMS, OS, Blockchain, Cloud Computing, Machine Learning, AI, and Web Development.",
      ],
    },
    {
      degree: "12th in Science",
      institution: "SVCS Jr College",
      location: "Solapur",
      duration: "June 2017 – June 2019",
      courses: [
        "Relevant Coursework: Mathematics, Physics, Chemistry and Biology.",
      ],
    },
  ];

  return (
    <Box id="education" sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom py={2}  sx={{ mb: 3 , fontWeight: 600, color: 'primary.main' }}>
        Education
      </Typography>

      <Grid container spacing={3}>
        {education.map((edu, index) => (
          <Grid item xs={12} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {edu.degree}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
                  {edu.institution} | {edu.location}
                </Typography>
                <Chip
                  label={edu.duration}
                  color="primary"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                {edu.courses &&
                  edu.courses.map((course, i) => (
                    <Typography
                      key={i}
                      variant="body1"
                      paragraph
                      sx={{ ml: 2 }}
                    >
                      ■ {course}
                    </Typography>
                  ))}
                {edu.honors && (
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: "italic",
                      color: "primary.main",
                      mt: 1,
                    }}
                  >
                    {edu.honors}
                  </Typography>
                )}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;
