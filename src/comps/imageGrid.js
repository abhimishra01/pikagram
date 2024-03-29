import React from "react";
import useFirestore from "../hooks/useFirestore";
import LikeButton from "./likeBtn";
import DeleteBtn from "./deleteButton";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const ImageGrid = ({
  setComments,
  setSelectedImg,
  setSelectedCmtBtn,
  setimgId,
}) => {
  // const [likes, setLikes] = useState(0);
  // const handleLikeEvt = (id) =>{

  //      }
  const { currentUser } = useAuth();
  // console.log(currentUser.email);
  const { doc } = useFirestore(currentUser.email);
  // console.log(doc);
  return (
    <div className="img-grid">
      {doc &&
        doc.map((docs) => (
          <div className="imgCont">
            <motion.div
              //    this attribute works whenever the images are shifted when new pic gets uploaded
              layout
              // hover effect on image
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImg(docs.url)}
              className="image-wrap"
              key={docs.id}
            >
              <motion.img
                class="img"
                src={docs.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
            <div className="crudBtns">
              <LikeButton id={docs.id} likes={docs.likes} />
              {/* <CommentsBtn
                 setComments={setComments}
                 comments={docs.comments}
                 imgid={docs.id}
                 setSelectedCmtBtn={setSelectedCmtBtn}
                 setimgId={setimgId}
                 /> */}
              <DeleteBtn id={docs.id} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
