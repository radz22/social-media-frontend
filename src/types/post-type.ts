export interface Post {
  id: string;
  userid: string;
  userphoto: string;
  text: string;
  photo?: string;
  heart: number;
  comments: Comment[] | {}; // Can be an array of comments or an empty object
}
