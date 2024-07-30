import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ItemGroupsManager.css';
import { useAuth } from './AuthContext';

const ItemGroupsManager = ({ items }) => {
  const [expandedGroups, setExpandedGroups] = useState({});
  const [groups, setGroups] = useState(items?.groups || {});
  const { user } = useAuth(); 

  useEffect(() => {
    console.log('Groups:', groups);
  }, [groups]);

  const toggleGroup = (groupName) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  const deleteGroup = (groupName) => {
    const updatedGroups = { ...groups };
    delete updatedGroups[groupName];
    setGroups(updatedGroups);
  };

  return (
    <div className="item-groups-manager">
      <h1>Item Groups</h1>
      <ul>
        {Object.keys(groups).map((groupName, index) => (
          <li key={index}>
            <div className="group-header">
              <div className="group-name" onClick={() => toggleGroup(groupName)}>
                {groupName}
              </div>
              {user === 'admin' && 
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteGroup(groupName)}
                className="delete-button"
              >
                {user === 'admin' && <DeleteIcon />}
              </IconButton>
              }
            </div>
            {expandedGroups[groupName] && (
              <ul className="group-items">
                {groups[groupName].length > 0 ? (
                  groups[groupName].map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.productName} - {item.productSKU} - {item.productPrice} - {item.description}
                    </li>
                  ))
                ) : (
                  <li>No items available</li>
                )}
              </ul>
            )}  
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemGroupsManager;
