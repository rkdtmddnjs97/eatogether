import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationStyle = {
    textAlign : "center",
    marginTop : "240px",
}

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} style={PaginationStyle}>
      <Typography>Page: {page}</Typography>
      <Pagination count={5} page={page} onChange={handleChange} />
    </Stack>
  );
}
