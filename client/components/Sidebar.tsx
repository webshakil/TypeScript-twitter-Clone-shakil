import {
  BellIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from '@heroicons/react/outline';
import React from 'react';
import { SidebarRow } from './SidebarRow';

const Sidebar = () => {
  return (
    <div className='flex flex-col'>
      <img className='h-10 w-10' src='https://links.papareact.com/drq' alt='' />
      <SidebarRow Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={HashtagIcon} title='Explore' />
      <SidebarRow Icon={BellIcon} title='Notification' />
      <SidebarRow Icon={MailIcon} title='Message' />
      <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
      <SidebarRow Icon={CollectionIcon} title='Lists' />
      <SidebarRow Icon={UserIcon} title='Sign In' />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title='More' />
    </div>
  );
};

export default Sidebar;
