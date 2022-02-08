import ReactDOM from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

import './Sidebar.css';

interface SidebarProps {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ sidebar, setSidebar }: SidebarProps) => {
  return ReactDOM.createPortal(
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <h3 className="sidebar__header-heading">Settings</h3>
          <AiOutlineClose
            className="menu-btn sidebar__header-close"
            onClick={() => setSidebar(false)}
            fontSize={36}
          />
        </div>
        <div className="sidebar__content">
          <input
            type="number"
            name="timer"
            className="input sidebar__input-timer"
            placeholder="Change Timer"
            min={0}
          />
          <input
            type="number"
            name="short-break"
            className="input sidebar__input-shortbreak"
            placeholder="Change Short Break"
            min={0}
          />
          <input
            type="number"
            name="long-break"
            className="input sidebar__input-longbreak"
            placeholder="Change Long Break"
            min={0}
          />
        </div>
        <div className="sidebar__footer">
          <button className="btn btn--primary">Save</button>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Sidebar;
