export interface comments {
  text: string;
  photo: string;
  userid: string;
  username: string;
}
export interface Post {
  id: string;
  name: string;
  userid: string;
  cloudinaryid: string;
  userphoto: string;
  text: string;
  photo: string;
  countheart: number;
  userheart: string[];
  comments: { [key: string]: comments };
}
