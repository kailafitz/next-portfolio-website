import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";
import { FeedbackSnackbar } from "../../../_types";
import Link from "@mui/material/Link";
import NextLink from "next/link";

// https://www.reddit.com/r/reactjs/comments/oq1rtp/type_authors_author_is_not_assignable_to_type/

const UserFeedbackSnackbar = (props: FeedbackSnackbar) => {
  const [open, setOpen] = useState(props.show);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message=""
        action={action}
        sx={{ maxWidth: "80%" }}
      >
        <Alert
          onClose={handleClose}
          severity={props.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

UserFeedbackSnackbar.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.node,
  type: PropTypes.string,
};

export const SuccessFeedback = () => {
  return (
    <UserFeedbackSnackbar
      type="success"
      show={true}
      message={
        <>
          Your preferences have been successfully saved! To change your
          preferences, please visit our{" "}
          <Link
            component={NextLink}
            href="/privacy-policy"
            color="common.white"
            sx={{ fontWeight: 700 }}
          >
            Privacy Policy
          </Link>
        </>
      }
    ></UserFeedbackSnackbar>
  );
};

export const ErrorFeedback = () => {
  return (
    <UserFeedbackSnackbar
      type="error"
      show={true}
      message={
        <>
          Something has gone wrong. Please try again later or get in touch with
          me here at{" "}
          <Link
            href="mailto:mikhailafitzpatrick@gmail.com"
            color="common.white"
          >
            mikhailafitzpatrick@gmail.com
          </Link>
        </>
      }
    ></UserFeedbackSnackbar>
  );
};
