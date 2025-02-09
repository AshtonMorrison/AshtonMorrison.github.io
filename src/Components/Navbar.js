import { Link, useMatch, useResolvedPath} from 'react-router-dom';
import './ComponentStyles.css'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <nav className= 'nav'>
                <Link to='/' className='site-title'>Home</Link>
                <ul>
                    <DisplayActive to='/about'>About Me</DisplayActive>
                    <DisplayActive to='/projects'>Projects</DisplayActive>
                    <DisplayActive to='/contact'>Contact Me</DisplayActive>
                </ul>
            </nav>
        </div>
    )
}

function DisplayActive({ to, children, ...props}){

    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true});

    return (
        <li className={isActive ? 'active': ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}