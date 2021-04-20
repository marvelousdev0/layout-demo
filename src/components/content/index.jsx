import { useEffect, useLayoutEffect, useState } from 'react';
import DocSidebar from '../doc-sidebar';
import Sidebar from '../sidebar';
import { contentHtml } from '../../constants/content-html';

const hasDocSidebar = true;

const Content = () => {
  const [docNavNodes, setDocNavNodes] = useState([]);
  const [currentActiveItem, setCurrentActiveItem] = useState('');

  useEffect(() => {
    window && window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    const initiate = () =>
      setTimeout(() => {
        const nodes = document.querySelectorAll('#markdown-body section');
        const firstId = nodes[0].getAttribute('id').split('-')[0];
        setCurrentActiveItem(firstId);
        const elements = [];
        nodes.forEach((node) => {
          elements.push({ id: node.firstElementChild.id, label: node.firstElementChild.textContent });
        });
        setDocNavNodes(elements);
      }, 1000);

    document && document.querySelectorAll('#markdown-body section').length > 0 && initiate();

    const sections = document.querySelectorAll('section');
    const firstId = sections[0].getAttribute('id').split('-')[0];

    window.addEventListener('scroll', () => {
      let current = '';
      const pageYOffset = window.pageYOffset;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 112;
        if (pageYOffset > sectionTop) {
          current = section.getAttribute('id').split('-')[0];
        }
      });
      setCurrentActiveItem(current || firstId);
    });
  }, []);

  const handleNavClick = (id) => {
    const nodes = document.querySelectorAll('#markdown-body section');
    const selectedNode = Array.prototype.filter.call(nodes, (node) => node.id === `${id}-section`)[0];
    if (selectedNode) {
      setCurrentActiveItem(id);
      const y = selectedNode.offsetTop - 96;
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Sidebar />
      <main className='content'>
        <div id='markdown-body' dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
      {hasDocSidebar && (
        <DocSidebar currentActiveItem={currentActiveItem} navNodes={docNavNodes} handleNavClick={handleNavClick} />
      )}
    </>
  );
};

export default Content;
