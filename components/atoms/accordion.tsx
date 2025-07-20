"use client"

import React, { useState, useMemo, useCallback, memo } from 'react';

// --- Type Definitions for the component ---
interface AccordionItemData {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItemData[];
}

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
  isLast: boolean;
}

// --- Optimized Internal Accordion Item Component ---
const AccordionItem = memo(function AccordionItem({
  title,
  content,
  isOpen,
  onClick,
  isLast,
}: AccordionItemProps) {
  // Memoize unique ID generation to avoid recalculation on every render
  const uniqueId = useMemo(() => title.replace(/\s+/g, '-'), [title]);

  // Memoize CSS classes to prevent string concatenation on every render
  const containerClasses = useMemo(() => 
    !isLast ? 'border-b border-gray-200 dark:border-slate-700' : '', 
    [isLast]
  );

  const buttonClasses = useMemo(() => 
    'w-full flex justify-between items-center p-5 text-left text-lg font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75 transition-colors duration-300',
    []
  );

  const iconClasses = useMemo(() => 
    `w-6 h-6 text-black transform transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`,
    [isOpen]
  );

  const contentClasses = useMemo(() => 
    `grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`,
    [isOpen]
  );

  return (
    <div className={containerClasses}>
      <button
        type='button'
        className={buttonClasses}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${uniqueId}`}
        id={`accordion-header-${uniqueId}`}
      >
        <span>{title}</span>
        <div className='w-6 h-6 flex-shrink-0 flex items-center justify-center'>
          <svg
            className={iconClasses}
            xmlns='http://www.w3.org/2000/svg'
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <div
        id={`accordion-content-${uniqueId}`}
        role='region'
        aria-labelledby={`accordion-header-${uniqueId}`}
        className={contentClasses}
      >
        <div className='overflow-hidden'>
          <div className='p-5 pt-2 text-black bg-gray-300'>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

// --- Main Reusable Accordion Component ---
export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Memoize the click handler to prevent unnecessary re-renders of child components
  const handleClick = useCallback((index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  }, []);

  // Memoize the container classes
  const containerClasses = useMemo(() => 
    'rounded-xl shadow-lg bg-white border border-gray-200 dark:border-slate-700',
    []
  );

  return (
    <div className={containerClasses}>
      {items.map((item, index) => (
        <AccordionItem
          key={`${item.title}-${index}`} // More stable key for better reconciliation
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
} 
