import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { getMask, posts, ALL, postTypeMap } from "./post-data";

export default function Posts() {
  const [postType, setPostType] = useState(ALL);
  return (
    <div>
      <PostTypeControl mask={postType} handleChange={setPostType} />
      {posts
        .filter((p) => p.mask & postType)
        .map((p) => (
          <PostItem key={p.id} summary={p.summary} details={p.details} />
        ))}
    </div>
  );
}

function PostItem({ summary, details }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="post-content"
        id="post-header"
      >
        <Typography>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

function PostTypeControl({ mask, handleChange }) {
  const val = postTypeMap[mask];
  return (
    <FormControl>
      <FormLabel id="select-post-type">帖子类型</FormLabel>
      <RadioGroup
        row
        value={val}
        onChange={(event, value) => {
          handleChange(getMask(value));
        }}
      >
        <FormControlLabel control={<Radio />} label="全部" value="all" />
        <FormControlLabel control={<Radio />} label="学生" value="student" />
        <FormControlLabel control={<Radio />} label="教师" value="teacher" />
      </RadioGroup>
    </FormControl>
  );
}
