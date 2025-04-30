import Link from 'next/link';

const SidebarItem = ({ item, onSelect }) => {
  return (
    <li>
      <Link 
        href={item?.link}
        onClick={onSelect}
        className="flex items-center px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors group"
      >
        <span className="font-medium">{item?.label}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;