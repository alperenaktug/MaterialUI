import TextField from "@mui/material/TextField";

function MUITextField() {
  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <TextField label="isim" variant="outlined" color="warning" />
        <TextField label="isim" variant="filled" color="success" />
        <TextField label="isim" variant="standard" />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <TextField
          label="isim"
          variant="outlined"
          color="secondary"
          helperText="isminizi giriniz"
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField
          label="isim"
          variant="outlined"
          color="secondary"
          helperText="isminizi giriniz"
          disabled="true"
        />
      </div>
    </>
  );
}

export default MUITextField;
