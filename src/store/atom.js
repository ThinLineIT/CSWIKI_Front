import { atom, selector } from "recoil";

export const List = atom({
  key: "noteList",
  default: [],
});

export const noteNumber = atom({
  key: "noteNumber",
  default: 0,
});

export const MyToggle = atom({
  key: "toggle",
  default: "",
});

export const HeaderBar = atom({
  key: "head_title",
  default: "현재 모아진 아이디어",
});

export const ModalUpdate = atom({
  key: "not_approved_modal",
  default: true,
});

export const noteModal = atom({
  key: "add_note_modal",
  default: true,
});

export const isJwtActive = atom({
  key: "json_web_token",
  default: false,
});

export const email = atom({
  key: "email",
  default: "",
});

export const password = atom({
  key: "password",
  default: "",
});

export const passwordCheck = atom({
  key: "passwordCheck",
  default: "",
});

export const nickName = atom({
  key: "nickName",
  default: "",
});

export const authCode = atom({
  key: "AuthCode",
  default: "",
});

export const isOverlaped = atom({
  key: "isOverlaped",
  default: false,
});

export const isNickOverlaped = atom({
  key: "isNickOverlaped",
  default: "",
});

export const isPwValidated = atom({
  key: "isPwValidated",
  default: "",
});

// Note Detail

export const detailTitle = atom({
  key: "detail_title",
  default: "",
});

export const noteDetailData = atom({
  key: "note_detail_data",
  default: "",
});

export const menuPageX = atom({
  key: "menu_pageX",
  default: "0px",
});

export const menuPageY = atom({
  key: "menu_pageY",
  default: "0px",
});

export const contextMenuActive = atom({
  key: "context_menu_active",
  default: false,
});

export const contextMenuToggle = atom({
  key: "context_menu_toggle",
  default: false,
});

export const topicIndex = atom({
  key: "topic_index",
  default: 1,
});

export const pageList = atom({
  key: "page_list",
  default: [],
});

export const pageContent = atom({
  key: "page_content",
  default: [],
});

// Modal components...

export const modalRequestState = atom({
  key: "modal_request_state",
  default: "",
});

export const modalRequest = atom({
  key: "modal_request",
  default: "요청",
});

export const name = atom({
  key: "name",
  default: "",
});

export const modalTitleKo = atom({
  key: "modal_title_ko",
  default: "",
});

export const modalTitleEn = atom({
  key: "modal_title_en",
  default: "note",
});

export const modalTitleSyntax = atom({
  key: "modal_title_syntax",
  default: "",
});

export const buttonOk = atom({
  key: "button_ok",
  default: "OK",
});

export const buttonCancel = atom({
  key: "button_cancel",
  default: "CANCEL",
});

export const modalActive = atom({
  key: "modal_active",
  default: true,
});

export const requestNoteTitle = atom({
  key: "request_note_title",
  default: "",
});

export const requestNoteContent = atom({
  key: "request_note_content",
  default: "",
});

export const userRequestNoteTextarea = atom({
  key: "user_request_note",
  default: {},
});

export const rightSpanName = atom({
  key: "right_span_name",
  default: "이름",
});

export const rightSpanContent = selector({
  key: "right_span_selector",
  get: ({ get }) => {
    return `${get(rightSpanName)} 수정`;
  },
  set: ({ set }, newValue) => {
    set(rightSpanName, newValue);
  },
});

export const modalTitleSelector = selector({
  key: "modal_title_selector",
  get: ({ get }) => {
    return `${get(modalTitleKo)} ${get(name)} ${get(modalRequestState)} 요청`;
  },
  set: ({ set }, newValue) => {
    set(modalTitleKo, newValue);
  },
});

export const modalSecondTitle = selector({
  key: "modal_second_title",
  get: ({ get }) => {
    return `${get(modalTitleKo)}${get(modalTitleSyntax)} ${get(
      modalRequestState
    )}하시겠습니까?`;
  },
  set: ({ set }, newValue) => {
    set(modalTitleKo, newValue);
  },
});

export const modalInputPlaceholder = selector({
  key: "modal_input_placeholder",
  get: ({ get }) => {
    return `${get(modalTitleEn)} title`;
  },
  set: ({ set }, newValue) => {
    set(modalTitleEn, newValue);
  },
});

export const modalTextAreaPlaceholder = selector({
  key: "modal_textarea_placeholder",
  get: ({ get }) => {
    return `${get(modalRequestState)} 요청 사유`;
  },
  set: ({ set }, newValue) => {
    set(modalRequestState, newValue);
  },
});

export const modalContent = selector({
  key: "modal_content",
  get: ({ get }) => {
    return `${get(name)} ${get(modalRequestState)} ${get(
      modalRequest
    )}이 노트 owner에게 전달됩니다.`;
  },
});

// users request data

export const addNote = atom({
  key: "add_note",
  default: "ADD NOTE",
});

export const userRequestDataList = atom({
  key: "user_request_data_list",
  default: [
    {
      noteName: "운영체제",
      title: "노트 이름 수정 요청",
      requestTitle: "운용 체제",
      requestContent: "이재용도 석방됬는데 운용체제라고 리네임하는건 어때요?",
    },
    {
      noteName: "이산수학",
      title: "노트  삭제 요청",
      requestContent: "이산 수학이 뭐죠? 율곡 이이가 만든 산수인가요",
    },
  ],
});
