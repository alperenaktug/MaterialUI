import { Button } from "@mui/material";
import AddCommentIcon from "@mui/icons-material/AddComment";

function MUIButton() {
  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <Button variant="text">Welcome</Button>
        <Button variant="contained">Welcome</Button>
        <Button variant="outlined">Welcome</Button>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Button color="error">Freelance</Button>
        <Button color="info">Freelance</Button>
        <Button color="inherit">Freelance</Button>
        <Button color="secondary">Freelance</Button>
        <Button color="success">Freelance</Button>
        <Button color="warning">Freelance</Button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <Button size="small" variant="contained">
          Sherlock
        </Button>
        <Button size="medium" variant="contained" color="success">
          Sherlock
        </Button>
        <Button size="large " variant="contained" color="warning">
          Sherlock
        </Button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <Button
          size="medium"
          variant="contained"
          color="warning"
          startIcon={<AddCommentIcon />}
        >
          Pardon
        </Button>
        <Button
          size="medium"
          variant="contained"
          color="warning"
          endIcon={<AddCommentIcon />}
        >
          Pardon
        </Button>
      </div>
    </div>
  );
}

export default MUIButton;
