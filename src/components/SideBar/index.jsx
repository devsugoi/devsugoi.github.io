import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import {GiSkills} from "react-icons/gi";
import {MdWork} from "react-icons/md"
import {TiContacts} from "react-icons/ti"
import useDarkMode from '../../hooks/useDarkMode'

const SideBar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-white dark:bg-gray-900 text-white shadow-lg'>
            <div className='mt-5'></div>
            <SideBarIcon icon={<img src='https://cdn.discordapp.com/attachments/968930836583940157/968954569499475978/sample_ps.png' size="28" />} href="#about_me" text="About me" />
            <Divider />
            <SideBarIcon icon={<GiSkills size="32" />} href="#skills" text="Skills" />
            <SideBarIcon icon={<MdWork size="32" />} href="#preferred_jobs" text="Preferred jobs" />
            <SideBarIcon icon={<TiContacts size="37" />} href="#contact" text="Contact" />
            <Divider />
            <Theme icon={<ThemeIcon />} text="Theme" />
        </div>

    )
}

const SideBarIcon = ({ icon, href, text = 'tooltip 💡' }) => {
    return (
        <a className='sidebar-icon group' href={href}>
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </a>
    )
}

const Divider = () => <hr className="sidebar-hr" />;

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode}>
            {darkTheme ? (
                <FaSun size='37' className='top-navigation-icon' />
            ) : (
                <FaMoon size='37' className='top-navigation-icon' />
            )}
        </span>
    );
};

const Theme = ({ icon, text = 'tooltip 💡' }) => {
  return (
    <div className='sidebar-icon absolute inset-x-0 bottom-0 group mb-10'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
  )
}



export default SideBar