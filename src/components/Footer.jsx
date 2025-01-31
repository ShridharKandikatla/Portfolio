import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { LinkedIn, GitHub, X } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'background.paper', 
        color: 'text.primary',
        py: 3,
        mt: 'auto',
        borderTop: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.3s ease',
      }}
    >
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} Shridhar Kandikatla. All rights reserved.
      </Typography>
      <Box textAlign="center" mt={1}>
        <IconButton 
          href="https://www.linkedin.com/in/shridhar-kandikatla/" 
          target="_blank"
          color="inherit"
          sx={{
            '&:hover': {
              color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
            }
          }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton 
          href="https://github.com/ShridharKandikatla" 
          target="_blank"
          color="inherit"
          sx={{
            '&:hover': {
              color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
            }
          }}
        >
          <GitHub />
        </IconButton>
        <IconButton 
          href="https://x.com/Shridhar2001" 
          target="_blank"
          color="inherit"
          sx={{
            '&:hover': {
              color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
            }
          }}
        >
          <X />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;