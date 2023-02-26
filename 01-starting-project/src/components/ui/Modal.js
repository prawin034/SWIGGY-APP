import { Fragment, React } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';
const Backdrop = () => {
  const dispatch = useDispatch();
  const closehandler = () => {
    dispatch(uiActions.toggleclose());
  };
  return <div className={classes.backdrop} onClick={closehandler} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </Fragment>
  );
};
export default Modal;
