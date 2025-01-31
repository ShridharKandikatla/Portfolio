import emailjs from 'emailjs-com';

import { Typography, Button, Grid } from '@mui/material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'YOUR_EMAILJS_SERVICE_ID',
      'YOUR_EMAILJS_TEMPLATE_ID',
      e.target,
      'YOUR_EMAILJS_USER_ID'
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    );
    
    e.target.reset();
  };

  return (
    <section id="contact">
      <Typography variant="h4" gutterBottom py={2} sx={{ fontWeight: 600, color: 'primary.main' }}>Contact Me</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Typography paragraph>
            To reach me, you can call me at +91 7385346092 or send me an email at shridharkandikatla@gmail.com
      </Typography>
            <Button 
              type="submit" 
              variant="contained" 
              size="large" 
              href='tel:+91 7385346092'
              sx={{ mt: 2 }}
            >
              Call Me
            </Button>
            <Button 
              type="submit" 
              variant="contained" 
              size="large" 
              href='mailto:shridharkandikatla@gmail.com'
              sx={{ mt: 2 , ml: 2 }}
            >
              Mail Me
            </Button>
          </form>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;