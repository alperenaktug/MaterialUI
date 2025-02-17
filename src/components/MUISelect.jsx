import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { useState } from "react";

function MUISelect() {
  const [currency, setCurrency] = useState("");
  console.log(currency);
  return (
    <div>
      <FormControl sx={{ width: "150px" }}>
        <InputLabel>Para Birimi</InputLabel>
        <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <MenuItem value="TRY">Türk Lirası</MenuItem>
          <MenuItem value="USD">Dolar</MenuItem>
          <MenuItem value="EUR">Euro</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default MUISelect;
