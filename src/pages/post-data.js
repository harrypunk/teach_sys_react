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

function makePost(id, mask, summary, details) {
  return {
    id,
    mask,
    summary,
    details,
  };
}

const posts = [
  makePost(1001, TEACHER, "teacher 1", "cousre 1 617"),
  makePost(1002, STUDENT, "student 1", "cousre 1 617"),
  makePost(1003, TEACHER, "teacher 1", "cousre 1 617"),
  makePost(1004, TEACHER, "teacher 1", "cousre 1 617"),
  makePost(1005, STUDENT, "student 2", "cousre 1 617"),
  makePost(1006, TEACHER, "teacher 1", "cousre 1 617"),
];

export { posts, getMask, postTypeMap, ALL };
