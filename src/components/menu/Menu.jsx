import React,{useState} from 'react'
import { Link } from "react-router-dom"
import './menuItem.css'
//import react-icons
import {FaHeart,FaHome,FaBars,FaTimes,FaBloggerB,FaPenFancy,FaCss3} from "react-icons/fa"
import {MdOutlineArticle,MdProductionQuantityLimits} from "react-icons/md"


//import styled
import { NavabarContainer, NavbarWrapper,IconLogo,MenuUl, MenuItem,MenuItemLink, IconLogoMobile,LinkUrl} from './Menu.element'


function Menu() {

  const [modalMovil, setModalMovil] = useState(false)

  const handleModal = () =>{
    setModalMovil(!modalMovil)
  }

  return (
    <>
          <NavabarContainer>
              <NavbarWrapper>
              <LinkUrl>
                  <IconLogo>
                        <Link className="linkUrl" to = "/andres-tech/">
                            <FaHeart className="crz-tech"/> AndresTech
                        </Link>
                  </IconLogo>
              </LinkUrl>
                <IconLogoMobile onClick={handleModal} >
                  {
                    modalMovil ?  <FaTimes/> : <FaBars/>
                  }
                </IconLogoMobile>

                <MenuUl modal={modalMovil}>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink className="menuItemLink"><Link className="menuItemLink" to = "/about"><FaHome/>Acerca</Link></MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink className="menuItemLink"><Link className="menuItemLink" to ="/proyect"><MdOutlineArticle/>Proyectos</Link></MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink className="menuItemLink"><Link className="menuItemLink" to ="/Blogs"><FaBloggerB/>Blogs</Link></MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink className="menuItemLink"><Link className="menuItemLink" to ="/Dis"><FaPenFancy/>Diseño</Link></MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink className="menuItemLink"><Link className="menuItemLink" to ="/CssView"><FaCss3/>Css Animations</Link></MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink className="menuItemLink"><Link className="menuItemLink" to ="/Productos"><MdProductionQuantityLimits/>Productos</Link></MenuItemLink>
                  </MenuItem>
                  
                </MenuUl>
              </NavbarWrapper>
            </NavabarContainer>
    </>
  )
}

export default Menu