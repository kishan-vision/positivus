import { AlignJustify } from 'lucide-react';

const SidebarButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="p-2.5 hover:bg-neutral-100 rounded-lg transition-colors duration-200 focus:outline-none"
            aria-label="Open menu"
        >
            <AlignJustify className='h-8 w-8' />
        </button>
    );
};

export default SidebarButton;