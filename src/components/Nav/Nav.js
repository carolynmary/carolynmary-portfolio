import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import Bird from "../Icons/Bird.js"

const Nav = ({ collapsed, handleCollapsedChange }) => {
	return (
		<ProSidebar
			collapsed={collapsed}
			breakPoint="sm"
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
					<MenuItem icon="" >Portfolio<Link to={["/", "/portfolio"]} /></MenuItem>
					<MenuItem icon="" >About<Link to="/about" /></MenuItem>
					<MenuItem icon="" >Contact<Link to="/contact" /></MenuItem>
				</Menu>
			</SidebarContent>

		</ProSidebar>
	);
};

export default Nav;

