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
    <form onSubmit={handleSubmit} action={action} method="POST">
      <Stack
        direction="column"
        sx={{
          div: {
            mb: 3,
          },
        }}
      >
        <TextField
          variant="standard"
          color="white"
          id="email"
          type="email"
          label="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <TextField
          variant="standard"
          color="white"
          id="message"
          name="message"
          label="message"
          multiline
          rows={4}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button
          variant="inset"
          color="secondary"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;
