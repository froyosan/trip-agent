"use client"


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- TypeScript Interfaces ---
type MasonryItem = {
    id: number
    imageSrc: string
    title: string
}

interface GridItemProps {
    item: MasonryItem
}

interface MasonryGridProps {
    items: MasonryItem[]
}

// --- Simplified mock data (no author info) ---
const initialItems = [
    { id: 1, imageSrc: '/sumba.jpeg', title: 'Sumba' },
    { id: 2, imageSrc: '/sumba.jpeg', title: 'Sumba' },
    { id: 3, imageSrc: '/sumba.jpeg', title: 'Sumba' },
    { id: 4, imageSrc: '/sumba.jpeg', title: 'Sumba' },
    { id: 5, imageSrc: '/sumba.jpeg', title: 'Sumba' },
    { id: 6, imageSrc: '/sumba.jpeg', title: 'Sumba' },
];

// --- GridItem Component ---
const GridItem: React.FC<GridItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="mb-4 break-inside-avoid relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img
        src={item.imageSrc}
        alt={item.title}
        className="w-full h-auto rounded-xl shadow-lg"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = `https://placehold.co/400x300/fecaca/333333?text=Image+Not+Found`;
        }}
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"
          >
            <div className="p-4 h-full flex flex-col justify-between">
                    <div className="flex justify-start gap-3">
                </div>
                <p className="text-white text-2xl font-bold truncate">{item.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- MasonryGrid Component ---
const MasonryGrid: React.FC<MasonryGridProps> = ({ items }) => {
  return (
    <div
      className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4"
      style={{ columnWidth: '360px' }}
    >
      {items.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    </div>
  );
};

// --- Main App Component ---
export default function CardPictures () {
  return (
    <div className="font-sans transition-colors">
      <div className="max-w-screen-2xl container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <main>
          <MasonryGrid items={initialItems} />
        </main>
      </div>
    </div>
  );
}
