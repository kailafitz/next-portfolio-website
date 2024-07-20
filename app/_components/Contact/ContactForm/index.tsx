import { useForm, ValidationError } from "@formspree/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mleqvwwq");

  let action = "https://formspree.io/f/mleqvwwq";

  if (state.succeeded) {
    return (
      <Typography
        variant="body2"
        fontSize="h3.fontSize"
        color="common.white"
        align="center"
      >
        Your message has been sent!
      </Typography>
    );
  }

  return (
    <Stack
      component="form"
      action={action}
      method="POST"
      onSubmit={handleSubmit}
      direction="column"
      spacing={3}
    >
      <TextField
        variant="standard"
        color="light"
        id="email"
        type="email"
        label="Email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <TextField
        variant="standard"
        color="light"
        id="message"
        name="message"
        label="Message"
        multiline
        rows={4}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button
        variant="inset"
        color="secondary"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default ContactForm;
