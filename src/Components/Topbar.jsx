import React, { useState } from 'react';
import '../Styles/Topbar.css';
import { MdNotificationsNone } from 'react-icons/md';
import ToggleSwitch from '../Components/ToggleSwitch';
import { FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [showAllNotifications, setShowAllNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(5); 

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const notifications = [
    {
      id: 1,
      severity: 1, 
      text: 'assigned you to project:',
      project: 'Client Covfefe',
      time: '3 days ago',
    },
    {
      id: 2,
      severity: 2, 
      text: 'removed him/herself from your project:',
      project: '16:30',
      time: '3 days ago',
    },
    {
      id: 3,
      severity: 3, 
      text: 'updated the deadline for project:',
      project: 'XYZ Dashboard',
      time: '1 week ago',
    },
    {
      id: 4,
      severity: 1, 
      text: 'sent you a message regarding:',
      project: 'Project Alpha',
      time: '2 hours ago',
    },
    {
      id: 5,
      severity: 2, 
      text: 'marked your task as complete:',
      project: 'E-commerce Website',
      time: '5 hours ago',
    },
  ];

  const getBorderColor = (severity) => {
    switch (severity) {
      case 1:
        return 'red'; // Most important
      case 2:
        return 'blue'; // Medium importance
      case 3:
        return 'green'; // Least important
      default:
        return 'gray'; // Default color
    }
  };

  const visibleNotifications = showAllNotifications
    ? notifications
    : notifications.slice(0, 2); 

  return (
    <div>
      <div className="Topbar">
        <div className="notification-icon-container">
          <MdNotificationsNone className="bell-icon" onClick={toggleDropdown} />
          {notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}
        </div>
      </div>

      {open && (
        <div className="drop-down-container">
          <div className="drop-down-title-bar">
            <button className="All-btn" onClick={() => setShowAllNotifications(!showAllNotifications)}>
              {showAllNotifications ? 'Show Less' : 'All'}
            </button>
            <ToggleSwitch label="Only unread" />
          </div>
          <div className="drop-down-list">
            {visibleNotifications.map((notification) => (
              <div
                key={notification.id}
                className="notification-item"
                style={{ border: `2px solid ${getBorderColor(notification.severity)}` }}
              >
                
                <FaUserCircle className="profile-icon" />
                <div className="notification-text">
                  <p>
                    <strong>{notification.text}</strong> {notification.project}
                  </p>
                  <span>{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
