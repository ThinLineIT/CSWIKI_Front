import ButtonIcon from './ButtonIcon/ButtonIcon';
import styles from '../../styles/markdown/editor.module.css';
import BtnsDict from '../../utils/useEditorBtns';

function EditorBtnItem({ icon, saveContents, inputRef }) {
  const btnsObj = new BtnsDict() ?? null;
  const addFuncButtons = (event, key) => {
    event.preventDefault();
    if (key === 'Image') {
      inputRef.current.click();
    }
    return btnsObj?.useElement(key, saveContents);
  };

  return (
    <button className={styles.btn} onClick={(e) => addFuncButtons(e, icon)}>
      <ButtonIcon name={icon} />
    </button>
  );
}

export default EditorBtnItem;
