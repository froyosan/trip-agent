    import { useState } from "react";
    import { ChevronDown } from "lucide-react";

    interface SubMenuItem {
    label: string
    href?: string
    }

    interface DropdownItem {
    label: string
    subItems?: SubMenuItem[]
    }

    interface LevelTwoDropdownProps {
    title: string
    items: DropdownItem[]
    active?: boolean
    }

    export default function LevelTwoDropdown({
    title,
    items,
    active = false,
    }: LevelTwoDropdownProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <button
            className={`px-4 py-2 font-semibold ${
            active ? " bg-white" : "text-gray-800"
            } hover:bg-blue-600 hover:text-white flex items-center gap-1`}>
            {title}
            <ChevronDown size={16}/>
        </button>

        {isHovered  && (
            <div className="absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-b z-50">
            {items.map((item, index) => (
                <div key={index} className="group relative">
                <div className="flex justify-between items-center hover:bg-blue-600 hover:text-white px-4 py-2 cursor-pointer">
                    {item.label}
                    {item.subItems && <ChevronDown size={14}/>}
                </div>

                {item.subItems && (
                    <div className="absolute left-full top-0 min-w-max bg-white shadow-lg z-50 hidden group-hover:block">
                    {item.subItems.map((sub, idx) => (
                        <a
                        key={idx}
                        href={sub.href =""}
                        className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100 text-gray-800"
                        >
                        {sub.label}
                        </a>
                    ))}
                    </div>
                )}
                </div>
            ))}
            </div>
        )}
        </div>
    );
}
