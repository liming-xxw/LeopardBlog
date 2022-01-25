import { BlogFindById } from "../../service/blog";
import { get } from "../../utils/axios-request";
// import
// const data = async () => {
//   return await BlogFindById("1");
// };
// const todos = data;

// export default () => {
//   return todos;
// };

export default () => BlogFindById("1");
