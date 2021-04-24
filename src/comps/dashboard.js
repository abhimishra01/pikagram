import React,{useState} from 'react';
import Title from './Title';
import UploadForm from './uploadForm';
import ImageGrid from './imageGrid'
import Modal from './modal';
import CmtModal from './commentsModal';

const Dashboard = ()=> {
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

export default Dashboard;
