import React, { useEffect } from 'react';
import NotificationsScreenView from './view';
import { Props } from './connect';

const NotificationsScreenController = ({
  notifications,
  markNotificationsRead,
}: Props) => {
  useEffect(() => {
    markNotificationsRead();
  }, []);

  return <NotificationsScreenView notifications={notifications} />;
};

export default NotificationsScreenController;
