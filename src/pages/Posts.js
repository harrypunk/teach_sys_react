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

export default function Posts() {
  const [postType, setPostType] = useState(ALL);
  return (
    <div>
      <PostTypeControl mask={postType} handleChange={setPostType} />
      <PostItem summary={"one"} details={"lf teacher"} />
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
        <Typography>summary</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>details</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

const ALL = 0b111;
const TEACHER = 0b010;
const STUDENT = 0b001;

const postTypeMap = {
  [ALL]: "all",
  [TEACHER]: "teacher",
  [STUDENT]: "student",
};

function getMask(val) {
  return Object.keys(postTypeMap).find((key) => postTypeMap[key] === val);
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
        <FormControlLabel control={<Radio />} label="学生" value="teacher" />
        <FormControlLabel control={<Radio />} label="教师" value="student" />
      </RadioGroup>
    </FormControl>
  );
}
