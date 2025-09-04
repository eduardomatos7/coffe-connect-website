"use client";

interface MobileMenuButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, toggle }) => (
  <button
    className="focus:outline-none lg:hidden"
    onClick={toggle}
    aria-label="Toggle Menu"
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    <svg className="h-6 w-6 text-[#8b5e3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  </button>
);

export default MobileMenuButton;
