import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <Stack textAlign={"center"} sx={{mt: 1}}>
      {" "}
      <Typography variant="h4">{date.toLocaleDateString()}</Typography>
      <Typography variant="h4">{date.toLocaleTimeString()}</Typography>
    </Stack>
  );
};

export default DateTime;
