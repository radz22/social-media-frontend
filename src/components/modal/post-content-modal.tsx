import React, { useState, useEffect } from "react";
import { PostContentModalProps } from "../../types/postmodalprops";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import GetPostById from "../../services/post/get-id-post";
import GetProfile from "../../services/profile/get-profile-token";
import Picker, { EmojiClickData } from "emoji-picker-react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { commenttype } from "../../types/comment-type";
import CreateCommentHook from "../../hooks/comment/create-comment-hook";
import DeleteCommentHook from "../../hooks/comment/delete-comment-hook";
import { deletecommenttype } from "../../types/delete-comment-type";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 650,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
};

const PostContentModal: React.FC<PostContentModalProps> = ({
  id,
  handleClose,
  open,
}) => {
  const { handleComment } = CreateCommentHook();
  const { post, loading } = GetPostById(id);
  const { profile } = GetProfile();
  const { handleDelete } = DeleteCommentHook();
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const onEmojiClick = (emojiObject: EmojiClickData) => {
    setInputValue((prev) => prev + emojiObject.emoji);
  };
  const comments = post?.comments ?? {};
  const handleAddComment = () => {
    const commentData: commenttype = {
      id: id,
      userid: profile?.userid,
      photo: profile?.profile,
      username: profile?.name,
      text: inputValue,
    };
    handleComment(commentData);
    setInputValue("");
    setShowPicker(false);
  };

  const handleDeleteComment = (commentId: string) => {
    const deleteDataId = {
      postId: id,
      commentId: commentId,
    };
    handleDelete(deleteDataId);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 0 }}>
            <>
              {loading ? (
                <div className="w-full  flex items-center justify-center flex-col h-[630px]">
                  <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="circular" width={60} height={60} />

                    <Skeleton variant="rectangular" width={600} height={70} />
                    <Skeleton variant="rounded" width={600} height={70} />
                  </Stack>
                </div>
              ) : (
                <div className="w-full flex gap-2">
                  <div className="w-[70%]">
                    <div>
                      <div
                        className="w-fit bg-[#cfcfcf] p-2 rounded-full"
                        onClick={handleClose}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="text-lg cursor-pointer"
                        >
                          <rect width="24" height="24" fill="none" />
                          <path
                            fill="currentColor"
                            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-center ">
                      <img src={post?.photo} className="w-[80%] h-[550px]	" />
                    </div>
                  </div>
                  <div className="w-[30%] relative">
                    <div className="mt-12 flex gap-2 items-center">
                      <div>
                        <img
                          src={post?.userphoto}
                          className="w-[40px] h-[40px] rounded-full"
                        />
                      </div>
                      <div>
                        <h1 className="font-bold">{post?.name} </h1>
                      </div>
                    </div>

                    <div className="mt-2 h-[40px] overflow-auto">
                      <h1 className="text-sm font-mono font-normal">
                        {post?.text}
                      </h1>
                    </div>
                    <div className="border-b-[1px] border-[#dddddd] mt-2 "></div>
                    <div className="flex items-center gap-1 border-b-[1px] border-[#dddddd] py-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 32 32"
                          className="text-xl "
                        >
                          <path
                            fill="#f8312f"
                            d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64"
                          />
                        </svg>
                      </div>
                      <div>
                        <h1 className="text-sm text-[#878787]">10</h1>
                      </div>
                    </div>

                    <div className="mt-5 w-full h-[330px] overflow-y-auto">
                      <div>
                        {Object.keys(comments).length > 0 ? (
                          Object.keys(comments).map((key) => {
                            const comment = comments[key];
                            const isCommentByCurrentUser =
                              comment.userid === profile?.userid;
                            return (
                              <div className="mt-4">
                                <div className="w-full flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div>
                                      <img
                                        src={comment.photo}
                                        className="w-[30px] h-[30px] rounded-full"
                                      />
                                    </div>
                                    <div>
                                      <h1 className="text-sm">
                                        {comment.username}
                                      </h1>
                                    </div>
                                  </div>
                                  <div>
                                    {isCommentByCurrentUser ? (
                                      <div
                                        onClick={() => handleDeleteComment(key)}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1em"
                                          height="1em"
                                          viewBox="0 0 24 24"
                                          className="text-xl text-red-500"
                                        >
                                          <rect
                                            width="24"
                                            height="24"
                                            fill="none"
                                          />
                                          <path
                                            fill="currentColor"
                                            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                                          />
                                        </svg>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                                <div className="ml-10">
                                  <p className="text-sm font-normal font-serif	text-[#1b1b1b]">
                                    {comment.text}
                                  </p>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <li>No comments available</li>
                        )}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="relative">
                        <div className="flex items-center gap-2">
                          <div>
                            <img
                              src={profile?.profile}
                              className="w-[30px] h-[30px] rounded-full"
                            />
                          </div>
                          <div className="w-full">
                            <input
                              type="text"
                              className="font-semibold w-full px-2 py-2   border-2 border-[#e9e9e9]  text-[#1b1b1b] rounded-md		 placeholder-[#adb5bd] text-sm"
                              placeholder={`Comment as ${profile?.name}`}
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between ml-8 mt-2">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              className="text-2xl cursor-pointer"
                              onClick={() => setShowPicker((val) => !val)}
                            >
                              <rect width="24" height="24" fill="none" />
                              <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M4.5 12a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18m-2.75 7.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M16 9.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m-7.3 4.476l-.004-.008a.75.75 0 0 0-1.391.56L8 14c-.696.278-.696.279-.696.28l.001.002l.002.004l.004.011a2 2 0 0 0 .063.138a5.3 5.3 0 0 0 .97 1.345c.74.739 1.922 1.47 3.656 1.47s2.917-.731 3.655-1.47a5.2 5.2 0 0 0 .785-1.003a5 5 0 0 0 .249-.48l.004-.011l.002-.004v-.002h.001c0-.001 0-.002-.696-.28l.696.278a.75.75 0 0 0-1.39-.56l-.004.008l-.025.054a3.8 3.8 0 0 1-.682.94c-.512.511-1.33 1.03-2.595 1.03s-2.083-.519-2.595-1.03a3.8 3.8 0 0 1-.681-.94z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <div onClick={handleAddComment}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              className="text-2xl"
                            >
                              <rect width="24" height="24" fill="none" />
                              <path
                                fill="currentColor"
                                d="M4 18.5v-5.154L9.846 12L4 10.654V5.5L19.423 12z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-20">
                        {showPicker && (
                          <Picker
                            width={300}
                            height={350}
                            onEmojiClick={onEmojiClick}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default PostContentModal;
