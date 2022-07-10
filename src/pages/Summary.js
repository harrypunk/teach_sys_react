import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Summary() {
  return (
    <React.Fragment>
      <Title>近期帖数</Title>
      <Typography component="p" variant="h4">
        263
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2022
      </Typography>
      <Typography  sx={{ flex: 1 }}>
        语文: 210
      </Typography>
      <Typography  sx={{ flex: 1 }}>
        English: 53
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          more
        </Link>
      </div>
    </React.Fragment>
  );
}
