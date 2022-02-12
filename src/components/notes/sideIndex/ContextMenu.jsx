import { useState, memo } from 'react';
import styled from 'styled-components';
import DetailModal from '../../items/modal/DetailModal';
import PreparingModal from '../../items/modal/PreparingModal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  contextMenuName,
  addNewPage,
  ModifyPageContent,
  pageupdate,
} from '../../../store/atom';

function ContextMenu({
  previosTitle,
  noteId,
  NOTE,
  x,
  y,
  topicId,
  setShowMenu,
}) {
  const useContextMenuName = useRecoilValue(contextMenuName);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // 모달창을 열고 닫는 상태값입니다.

  let modalData = {
    mainTitle: `${NOTE ? '노트' : '토픽'} 이름 수정 요청`,
    previosTitle: previosTitle,
    status: NOTE ? 'Note' : 'Topic',
  };

  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setupdtepage = useSetRecoilState(pageupdate);
  const setAddNewPageContent = useSetRecoilState(addNewPage);

  const onModify = () => {
    if (useContextMenuName === '이름 수정') {
      setIsDetailModalOpen(true);
    } else if (useContextMenuName === '내용 수정') {
      setAddNewPageContent(false);
      setupdtepage(true);
      setModifyPage(true);
    }
  };

  const [showPreparingModal, setShowPreparingModal] = useState(false);
  const onDelete = () => {
    setShowPreparingModal(true);
  };

  return (
    <ContextContainer x={x} y={y}>
      <span onClick={onModify}>{useContextMenuName}</span>
      <span onClick={onDelete}>삭제 요청</span>
      {isDetailModalOpen && (
        <DetailModal
          noteId={noteId}
          topicId={topicId}
          modalData={modalData}
          setShowMenu={setShowMenu}
          setIsDetailModalOpen={setIsDetailModalOpen}
        />
      )}
      {showPreparingModal && (
        <PreparingModal
          setShowPreparingModal={setShowPreparingModal}
          setShowMenu={setShowMenu}
        />
      )}
    </ContextContainer>
  );
}

export default memo(ContextMenu);

const ContextContainer = styled.div`
  position: absolute;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
  width: 120px;
  height: 5em;
  font-size: 1.1rem;
  background: white;
  border: 0.2px solid rgba(185, 185, 185, 0.315);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  cursor: pointer;

  & > span {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    &:hover {
      background-color: #b5bdff;
    }
  }
`;
