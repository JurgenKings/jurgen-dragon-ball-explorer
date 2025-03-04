"use client"
import React from "react"
import { motion } from "motion/react"
import { FiSearch, FiPlus, FiFilter } from "react-icons/fi"

interface SearchBarWithActionsProps {
  handleFilterToggle: () => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

function SearchBarWithActions({ handleFilterToggle, searchQuery, setSearchQuery }: SearchBarWithActionsProps): React.JSX.Element {

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
            placeholder="Buscar por nombre..."
            value={searchQuery}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-600 transition-colors"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      <div className="flex md:space-x-4 flex-col gap-4 md:flex-row md:gap-0">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex w-full sm:w-auto items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          onClick={handleFilterToggle}
        >
          <FiFilter className="mr-2" />
          Filtros
        </motion.button>
      </div>
    </div>
  )
}

export default SearchBarWithActions