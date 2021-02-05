import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import Bird from "../Icons/Bird"
import Clinic from "../Icons/Clinic"
import Info from "../Icons/Info"

const Nav = ({ collapsed, toggled, handleCollapsedChange, handleToggleSidebar }) => {
	return (
		<ProSidebar
			collapsed={collapsed}
			toggled={toggled}
			breakPoint="sm"
			onToggle={handleToggleSidebar}
		>

			<SidebarHeader>
				<div className="block ">
					<Switch
						height={16}
						width={30}
						checkedIcon={false}
						uncheckedIcon={false}
						onChange={handleCollapsedChange}
						checked={collapsed}
						onColor="#2b49c8"
						offColor="#bbbbbb"
					/>
					<p>collapsed</p>
				</div>
			</SidebarHeader>

			<SidebarContent>
				<Menu iconShape="circle">
					<MenuItem icon={<Bird />} >Spottings<Link to="/feed" /></MenuItem>
					<MenuItem icon={<Info />}>Info<Link to="/info" /></MenuItem>
					<MenuItem icon={<Clinic />}>Clinic<Link to="/clinic" /></MenuItem>
				</Menu>
			</SidebarContent>

		</ProSidebar>
	);
};

export default Nav;

