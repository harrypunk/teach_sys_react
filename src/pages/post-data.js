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
  makePost(1001, TEACHER, "英语辅导 3年经验", "男，xx区高级教师, 13500001234"),
  makePost(1002, STUDENT, "需求物理老师 高1", "xx高中学生，需要补习力学，男性"),
  makePost(1003, TEACHER, "10年特级教师 数学", "女，周末辅导"),
  makePost(1004, TEACHER, "化学，xx大学", "大学在学，可以晚上上课"),
  makePost(1005, STUDENT, "求 日语老师", "需要一个日语老师"),
  makePost(1006, TEACHER, "英语教师 周末已满", "上课时间请联系后台，工作日夜间"),
];

export { posts, getMask, postTypeMap, ALL };
