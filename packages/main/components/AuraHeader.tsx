import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Home, 
  Building2, 
  PenTool, 
  Wand2, 
  User, 
  LogOut, 
  LogIn, 
  Menu, 
  X,
  Search,
  Eye,
  Play,
  BookOpen,
  Sparkles
} from 'lucide-react';

interface NavLinkType {
  id: number | string;
  text: string;
  href: string;
  icon?: React.ComponentType<any>;
  subLinks?: NavLinkType[];
}

const navLinks: NavLinkType[] = [
  { id: 1, text: 'Home', href: '/', icon: Home },
  {
    id: 2,
    text: 'Josoor',
    href: '/josoor',
    icon: Building2,
    subLinks: [
      { id: 'j-vision', text: "Founder's Letter", href: '/josoor/vision', icon: BookOpen },
      { id: 'j-explore-architect', text: 'eXplore Architecture', href: '/josoor/explore/architect', icon: Search },
      { id: 'j-explore-systems', text: 'eXplore System', href: '/josoor/explore/systems', icon: Search },
      { id: 'j-experience-noor', text: 'eXperience Noor', href: '/josoor/experience/noor', icon: Eye },
      { id: 'j-experience-analytics', text: 'eXperience Analytics', href: '/josoor/experience/analytics', icon: Eye },
      { id: 'j-execute-ucs', text: 'eXecute Library', href: '/josoor/execute/use-cases', icon: Play },
      { id: 'j-execute-journey', text: 'eXecute UC001', href: '/josoor/execute/journey', icon: Play },
    ],
  },
  {
    id: 3,
    text: 'SketchApp',
    href: '/sketchapp',
    icon: PenTool,
    subLinks: [{ id: 's1', text: 'Designer', href: '/sketchapp/designer', icon: Sparkles }],
  },
  {
    id: 1755004664346,
    text: 'Aura',
    href: '/aura',
    icon: Wand2,
    subLinks: [{ id: 'a1', text: 'Project Manager', href: '/aura/projectmanager', icon: User }],
  },
];

const AuraHeader: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header className="shadow-md sticky top-0 z-50 text-white" style={{ backgroundColor: '#00122d' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/images/auralogonotext.png"
              alt="Aura"
              className="h-12 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                const IconComponent = link.icon;
                return (
                  <div key={link.id} className="relative group">
                    <Link
                      to={link.href}
                      className={`py-2 flex items-center gap-2 transition-colors duration-300 ${
                        isActive
                          ? 'text-electric-blue-400 font-semibold'
                          : 'text-gray-300 hover:text-electric-blue-400'
                      }`}
                    >
                      {IconComponent && <IconComponent className="w-4 h-4" />}
                      {link.text}
                    </Link>
                    {link.subLinks && (
                      <div className="absolute top-full left-0 pt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                        <div className="bg-gray-700 rounded-md shadow-lg p-2 w-max">
                          {link.subLinks.map((subLink) => {
                            const SubIconComponent = subLink.icon;
                            return (
                              <Link
                                key={subLink.id}
                                to={subLink.href}
                                className="block px-3 py-2 text-sm text-gray-300 hover:text-electric-blue-400 hover:bg-gray-600 rounded-md transition-colors duration-200 flex items-center gap-2"
                              >
                                {SubIconComponent && <SubIconComponent className="w-3 h-3" />}
                                {subLink.text}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-gray-300">Welcome, {user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 bg-electric-blue-600 text-white rounded-md hover:bg-electric-blue-700 transition-colors duration-300"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                const IconComponent = link.icon;
                return (
                  <div key={link.id}>
                    <Link
                      to={link.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 flex items-center gap-2 ${
                        isActive
                          ? 'text-electric-blue-400 bg-gray-700'
                          : 'text-gray-300 hover:text-electric-blue-400 hover:bg-gray-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {IconComponent && <IconComponent className="w-4 h-4" />}
                      {link.text}
                    </Link>
                    {link.subLinks && (
                      <div className="ml-4 space-y-1">
                        {link.subLinks.map((subLink) => {
                          const SubIconComponent = subLink.icon;
                          return (
                            <Link
                              key={subLink.id}
                              to={subLink.href}
                              className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-electric-blue-400 hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
                              onClick={() => setIsOpen(false)}
                            >
                              {SubIconComponent && <SubIconComponent className="w-3 h-3" />}
                              {subLink.text}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="border-t border-gray-700 pt-4">
                {user ? (
                  <>
                    <div className="px-3 py-2 text-gray-300">Welcome, {user.email}</div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default AuraHeader;
