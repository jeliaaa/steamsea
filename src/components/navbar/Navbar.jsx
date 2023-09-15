import React, { useEffect, useRef } from 'react'
import { Nav } from 'react-bootstrap';
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/g-removebg-preview.png'
const Navbar = () => {
    const location = useLocation();
    const navRef1 = useRef(null);
    const navRef2 = useRef(null);
    const navRef3 = useRef(null);
    const refs = [navRef1, navRef2, navRef3];

    const handleColor = (ref) => {
        refs.map((ref) => ref.current.classList.remove('active'))
        ref.current.classList.toggle('active');
    }
    useEffect(() => {
        var pathLast = location.pathname;
        refs.map((ref) => ref.current.classList.remove('active'));
        var newPath = pathLast.split('/');
        if (pathLast === '/') {
            navRef1.current.classList.add('active');
        } else if (newPath[1] === 'buiokebi') {
            navRef1.current.classList.add('active');
        } else if (pathLast === '/about') {
            navRef2.current.classList.add('active');
        } else if (pathLast === '/contact') {
            navRef3.current.classList.add('active');
        }
    }, [location])

    return (
        <header>
            <div className='upper_header'>
                <div className="logo_wrapper">
                    <Link to={'/'}><img src={logo} alt="logo..." /></Link>
                </div>
                <div><h1>WAVEtoDay</h1></div>
            </div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item ref={navRef1} onClick={() => handleColor(navRef1)}>
                    <Link className='nav-link' to={'/'}>მთავარი</Link>
                </Nav.Item>
                <Nav.Item ref={navRef2} onClick={() => handleColor(navRef2)}>
                    <Link className='nav-link' to={'/about'}>ჩვენს შესახებ</Link>
                </Nav.Item>
                <Nav.Item ref={navRef3} onClick={() => handleColor(navRef3)}>
                    <Link className='nav-link' to={'/contact'}>კონტაქტები</Link>
                </Nav.Item>
            </Nav>
        </header>
    )
}

export default Navbar