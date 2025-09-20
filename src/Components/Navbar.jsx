import { Link, useMatch, useResolvedPath, useLocation} from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    const renderNavbar = () => {
        switch (location.pathname) {
            case '/':
                return <LandingNavbar />
            default:
                return <NormalNavbar />
        }
    }

    return renderNavbar();
}

function LandingNavbar(){
    return (
        <div className='landing-navbar-container'>
            <h1 className = 'welcome'>
                Welcome To My Website!
            </h1>
            <nav className= 'landing-nav'>
                <Link to='/about'>About Me</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact Me</Link>
            </nav>
        </div>
    )
}
function NormalNavbar(){
    return (
        <div className='navbar-container'>
            <nav className= 'nav'>
                <Link to='/'>
                    <img src={import.meta.env.BASE_URL + 'logo192.png'} alt="Logo" className="nav-logo" />
                </Link>
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