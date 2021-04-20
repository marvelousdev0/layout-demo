import { memo } from 'react';
import cx from 'classnames';

const DocSidebar = ({ currentActiveItem, navNodes, handleNavClick }) => {
  return (
    <aside className='doc-sidebar'>
      <ul className='unstyled-list'>
        {navNodes &&
          navNodes.length > 0 &&
          navNodes.map((node, index) => (
            <li
              key={node.id}
              id={node.id}
              className={cx('doc-sidebar__navitem', { 'navitem-active': currentActiveItem === node.id })}
              onClick={() => handleNavClick(node.id)}
            >
              {node.label}
            </li>
          ))}
          {navNodes &&
          navNodes.length > 0 &&
          navNodes.map((node, index) => (
            <li
              key={node.id}
              id={node.id}
              className={cx('doc-sidebar__navitem', { 'navitem-active': currentActiveItem === node.id })}
              onClick={() => handleNavClick(node.id)}
            >
              {node.label}
            </li>
          ))}
          {navNodes &&
          navNodes.length > 0 &&
          navNodes.map((node, index) => (
            <li
              key={node.id}
              id={node.id}
              className={cx('doc-sidebar__navitem', { 'navitem-active': currentActiveItem === node.id })}
              onClick={() => handleNavClick(node.id)}
            >
              {node.label}
            </li>
          ))}
          {navNodes &&
          navNodes.length > 0 &&
          navNodes.map((node, index) => (
            <li
              key={node.id}
              id={node.id}
              className={cx('doc-sidebar__navitem', { 'navitem-active': currentActiveItem === node.id })}
              onClick={() => handleNavClick(node.id)}
            >
              {node.label}
            </li>
          ))}
          {navNodes &&
          navNodes.length > 0 &&
          navNodes.map((node, index) => (
            <li
              key={node.id}
              id={node.id}
              className={cx('doc-sidebar__navitem', { 'navitem-active': currentActiveItem === node.id })}
              onClick={() => handleNavClick(node.id)}
            >
              {node.label}
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default memo(DocSidebar);
