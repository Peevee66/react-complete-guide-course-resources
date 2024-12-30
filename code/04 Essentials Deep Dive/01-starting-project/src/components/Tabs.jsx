import React from 'react';

const Tabs = ({children, isSelected, ...props }) => {
  return (
     <li>
       <button className={isSelected ? 'active': undefined} {...props}>
       {children}
        </button>
     </li>
  );
};

export default Tabs;