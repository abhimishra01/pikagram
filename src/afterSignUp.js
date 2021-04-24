import {useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
import ImageGrid from './comps/imageGrid'
import Modal from './comps/modal';
import CmtModal from './comps/commentsModal';

const AfterSignUp = ()=> {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedCmtBtn, setSelectedCmtBtn] = useState(null);
  const [comments, setComments] = useState(null);
  const [imgId, setimgId] = useState(0)

  return (
    <div>
      <Title/>
      <UploadForm/>
      <ImageGrid 
      setComments={setComments}
      setimgId={setimgId}
      setSelectedImg={setSelectedImg}setSelectedCmtBtn={setSelectedCmtBtn} />
      {selectedImg && <Modal
      setSelectedImg={setSelectedImg}
      selectedImg={selectedImg}/>}

      {selectedCmtBtn && <CmtModal
      comments={comments}
      imgId={imgId}
      setSelectedCmtBtn={setSelectedCmtBtn}/>}
    </div>
  );
}

export default AfterSignUp;
