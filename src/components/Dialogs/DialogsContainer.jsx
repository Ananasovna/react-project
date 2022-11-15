import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogsReducer";
import { StoreContext } from "../../StoreContext";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let messages = store.getState().dialogs.messagesData;
        let dialogs = store.getState().dialogs.dialogsData;
        let newMessageText = store.getState().dialogs.newMessageText;

        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let changeMessageText = (event) => {
          let action = updateNewMessageTextActionCreator(event);
          store.dispatch(action);
        };

        return (
          <Dialogs
            addMessage={addMessage}
            changeMessageText={changeMessageText}
            newMessageText={newMessageText}
            messages={messages}
            dialogs={dialogs}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
