import {Sidebar} from './Sidebar';
import { StoreContext } from '../../StoreContext';


export const SidebarContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        return <Sidebar state={store.getState().dialogs.dialogsData}/>;
      }}
    </StoreContext.Consumer>
  );
};
