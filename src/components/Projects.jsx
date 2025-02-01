import {
  Grid,
  Chip,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Real-time Chat Application",
    description: "Built a real-time messaging platform utilizing the MERN stack and Socket.IO for efficient, low-latency communication.",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Material-UI",
      "Redux",
      "Node.js",
      "Socket.IO",
    ],
    demo: "https://chat-application-unpr.onrender.com",
    github: "https://github.com/ShridharKandikatla/Chat-Application",
    category: "Web App",
    image: "/live-chat.png",
  },
  {
    title: "Backend Template",
    description:
      "Developed a versatile backend template with integrated authentication, authorization, and user management functionalities.",
    tech: [
      "Prettier Configuration",
      "ES Lint Configuration",
      "VS Code Configuration",
      "Docker File",
    ],
    github:
      "https://drive.google.com/file/d/16IZTMu6D6sEU_wVEQFdKUWuQxCpDZqWD/view?usp=sharing",
    image: "/backend.jpg",
    category: "Open Source",
  },
  {
    title: "Video Chat Application",
    description: "Built a video chat application using the MERN stack and Socket.IO for real-time video communication.",
    tech: ["Express", "React", "Node.js", "Socket.IO", "WebRTC"],
    github: "https://github.com/ShridharKandikatla/Video-Chat-Application",
    category: "Web App",
    image: "/video-chat.png",
  },
  // Add other projects
];

const Projects = () => (
  <section id="projects">
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
      Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} md={6} key={index}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card sx={{borderRadius: 10}}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                  <Chip label={project.category} color="success" sx={{ m: 0.5 }} />
                  </Grid>
                </Grid>
                <Box mt={2}>
                  {project.tech.map((tech, i) => (
                    <Chip key={i} label={tech} sx={{ m: 0.5 }} />
                  ))}
                </Box>
                <Box mt={2}>
                  {project.demo && (
                    <Button
                      variant="contained"
                      href={project.demo}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      variant="outlined"
                      href={project.github}
                      target="_blank"
                      sx={{ ml: 2 }}
                    >
                      GitHub
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </section>
);

export default Projects;
