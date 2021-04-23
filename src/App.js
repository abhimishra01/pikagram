import React,{useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
import ImageGrid from './comps/imageGrid'
import Modal from './comps/modal';
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedCmtBtn, setSelectedCmtBtn] = useState(null);


  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}setSelectedCmtBtn={setSelectedCmtBtn} />
      {selectedImg && <Modal
      setSelectedImg={setSelectedImg}
      selectedImg={selectedImg}/>}
      {selectedCmtBtn && <CmtModal
      selectedCmtBtn={selectedCmtBtn}
      setSelectedCmtBtn={setSelectedCmtBtn}/>}
    </div>
  );
}

export default App;
