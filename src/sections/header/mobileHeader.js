import React from "react";
import Modal from "react-modal";
import data from "./header.data";
import Link from "next/link";
import Hamburger from "hamburger-react";

const MobileHeader = ({ isOpen, setOpen }) => {
  return (
    <Modal
      shouldCloseOnEsc={true}
      onRequestClose={() => setOpen(false)}
      ariaHideApp={false}
      shouldFocusAfterRender={true}
      shouldCloseOnOverlayClick={true}
      isOpen={isOpen}
      style={styles.modal}
    >
      <div className="flex justify-end w-full mt-6 items-end">
        <Hamburger
          size={40}
          toggled={isOpen}
          toggle={() => setOpen(!isOpen)}
          color="white"
        />
      </div>
      <div className=" h-full w-full pb-6 flex flex-col justify-center items-center">
        {data.map((item, index) => (
          <Link key={index} href={item.path}>
            <a>
              <p className="text-white py-5 font-extrabold text-4xl hvr-underline-from-left">
                {item.label}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </Modal>
  );
};

const styles = {
  modal: {
    overlay: {
      position: "fixed",
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 1)",
    },
    content: {
      position: "fixed",

      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      background: "",
      overflow: "hidden",
      WebkitOverflowScrolling: "touch",
      outline: "none",
      border: "none",
    },
  },
};

export default MobileHeader;
