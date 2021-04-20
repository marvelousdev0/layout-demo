import { useState } from 'react';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <nav className={`${collapsed ? 'sidebar-collapsed' : 'sidebar'}`}>
      <div className={`sidebar-toggle ${collapsed ? 'sidebar-toggle__rotate' : ''}`} onClick={handleCollapse}>
        <ArrowLeft />
      </div>
      {collapsed ? (
        ''
      ) : (
        <div>
          <h1>Sidebar</h1>
          <hr />
          <ul className="unstyled-list overflow-y">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((item) => (
              <li className='sidebar__navitem'>{`Sidebar Item - ${item}`}</li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
