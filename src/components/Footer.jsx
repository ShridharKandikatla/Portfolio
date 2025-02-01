import { Box, Typography, IconButton, useTheme, SvgIcon } from '@mui/material';
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
        <IconButton 
          href="https://stackoverflow.com/users/13819276/shridhar-kandikatla" 
          target="_blank"
          color="inherit"
          sx={{
            '&:hover': {
              color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
            }
          }}
        >
          <SvgIcon viewBox="0 0 24 24">
                  <path d="M17.2 19.7V14.8H19V21H4V14.8H5.8V19.7H17.2ZM7.2 18.3H16V16.5H7.2V18.3ZM7.3 14.9L15.1 16.2L15.3 14.4L7.6 13L7.3 14.9ZM8.2 11.1L15.5 13.7L16.1 12L8.9 9.4L8.2 11.1ZM9.8 7.1L16.6 11.2L17.5 9.6L10.8 5.5L9.8 7.1ZM12.3 2L11 3.5L17.7 8.5L19 7L12.3 2Z" />
                </SvgIcon>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;