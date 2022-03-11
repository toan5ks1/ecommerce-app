import React from 'react'
import {SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute
}from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                        <SidebarLink to='tracking' onClick={toggle}>Theo dõi vận đơn</SidebarLink>
                        <SidebarLink to='services' onClick={toggle}>Dịch vụ</SidebarLink>
                        <SidebarLink to='contact' onClick={toggle}>Liên hệ</SidebarLink>
                        <SidebarLink to='signup' onClick={toggle}>Đăng ký</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Đăng nhập</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    
    )
}
export default Sidebar;