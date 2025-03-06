"use client"
import React from "react"
import { motion } from "motion/react"
import { FiSearch } from "react-icons/fi"

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  placeholder: string;
}

function SearchBar({ searchQuery, setSearchQuery, placeholder }: SearchBarProps): React.JSX.Element {

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex-1 relative z-0" 
      >
        <div className="relative z-0">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-0" />
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            className="w-full bg-bg-hover dark:bg-dark-bg-hover pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-db-orange dark:focus:border-db-blue transition-colors text-text-primary dark:text-dark-text-primary"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default SearchBar