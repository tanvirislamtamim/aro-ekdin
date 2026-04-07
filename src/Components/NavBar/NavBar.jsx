import { Link, NavLink } from "react-router";
import logo from "../../../public/Logo.jpeg"; 

const Navbar = () => {
    // Premium Active/Inactive Style with subtle glow
    const navItemStyle = ({ isActive }) =>
        `relative flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-2xl sm:rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isActive
                ? "text-[#ea580c] sm:bg-white/10 sm:text-white drop-shadow-[0_0_12px_rgba(234,88,12,0.4)]" 
                : "text-gray-400 hover:text-white hover:bg-white/5"
        }`;

    return (
        <nav className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-[95%] sm:w-auto z-50">
            {/* Glassmorphism Container with Optimized Spacing */}
            <div className="flex items-center justify-around sm:justify-center gap-1 sm:gap-4 bg-[#0a0a0a]/80 backdrop-blur-3xl px-3 py-2 rounded-[2.5rem] sm:rounded-full border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] w-full">

                {/* Left Side Items */}
                <div className="flex items-center gap-1 sm:gap-3">
                    <NavLink to="/" className={navItemStyle}>
                        {({ isActive }) => (
                            <>
                                <svg className={`w-6 h-6 sm:w-5 sm:h-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive ? 2.5 : 2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="text-[10px] sm:text-sm font-semibold tracking-wide">Home</span>
                            </>
                        )}
                    </NavLink>

                    <NavLink to="/players" className={navItemStyle}>
                        {({ isActive }) => (
                            <>
                                <svg className={`w-6 h-6 sm:w-5 sm:h-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive ? 2.5 : 2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="text-[10px] sm:text-sm font-semibold tracking-wide">Players</span>
                            </>
                        )}
                    </NavLink>
                </div>

                {/* Center Logo Section - Diamond/Circular Cut */}
                <Link to="/">
                <div className="relative mx-1 sm:mx-3 shrink-0">
                    <div className="absolute inset-0 bg-[#ea580c]/20 blur-xl rounded-full"></div>
                    <img
                        src={logo}
                        alt="Logo"
                        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/20 shadow-2xl transition-transform duration-500 hover:rotate-360"
                    />
                </div>
                </Link>

                {/* Right Side Items */}
                <div className="flex items-center gap-1 sm:gap-3">
                    <NavLink to="/gallery" className={navItemStyle}>
                        {({ isActive }) => (
                            <>
                                <svg className={`w-6 h-6 sm:w-5 sm:h-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive ? 2.5 : 2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-[10px] sm:text-sm font-semibold tracking-wide">Gallery</span>
                            </>
                        )}
                    </NavLink>

                    <NavLink to="/about" className={navItemStyle}>
                        {({ isActive }) => (
                            <>
                                <svg className={`w-6 h-6 sm:w-5 sm:h-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive ? 2.5 : 2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-[10px] sm:text-sm font-semibold tracking-wide">About</span>
                            </>
                        )}
                    </NavLink>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;