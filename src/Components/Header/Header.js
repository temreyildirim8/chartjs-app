import React from "react";
// import Modal from 'react-modal';

import "./HeaderStyles.css";

const Header = () => {
  // const customStyles = {
  //   content : {
  //     top                   : '50%',
  //     left                  : '50%',
  //     right                 : '0',
  //     bottom                : 'auto',
  //     marginRight           : '-50%',
  //     transform             : 'translate(-50%, -50%)'
  //   }
  // };

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => {
  //   setIsModalOpen(true);
  // }
 
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // }

  return (
    <div className="header_wrapper">
      <div className="header_left">
        <img src={require("../../Assets/Img/hedwig-logo.png")} alt="" />
      </div>
      <div className="header_right">
        <img src={require("../../Assets/Icon/user-circle-solid.svg")} alt="" />
        {/* <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <div>I am a modal</div>
        </Modal> */}
      </div>
    </div>
  );
};

export default Header;
