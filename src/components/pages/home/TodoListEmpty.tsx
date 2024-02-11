import React from 'react';
import { motion } from 'framer-motion';
import { FileOptions } from 'buffer';


const emptyState: any = {
  all: {
    illustration: '(^-^*)',
    heading: 'It seems empty in here',
    details: 'There are no tasks to show for now. Consider adding some...',
  },
  pending: {
    illustration: '(≧∇≦)ﾉ',
    heading: 'Hooray! No pending tasks',
    details: 'You don\'t have any pending tasks for now. Enjoy :)',
  },
  completed: {
    illustration: '(´･ω･`)?',
    heading: 'Hmmm. I don\'t see any completed tasks',
    details: 'It seems you have not completed any tasks so far...',
  },
}


type TFilterOptions = {filterOption: 'All' | 'Pending' | 'Completed'};

function TodoListEmpty({ filterOption }: TFilterOptions) {
  return (
    <motion.div
      key={filterOption}
      className="flex flex-col justify-center text-white items-center h-[50vh] text-center"
      animate={{
        scale: [1.2, 0.98, 1],
        opacity: [0, 1],
        transition: {
          duration: 0.5,
          type: 'spring',
        }
      }}
    >
      <div className="opacity-30 text-[clamp(1rem,6rem,15vw)]">
        {emptyState[filterOption?.toLowerCase()].illustration}
      </div>

      <h2 className="mt-[2em] mb-0">
        {emptyState[filterOption?.toLowerCase()].heading}
      </h2>

      <p className="">
        {emptyState[filterOption?.toLowerCase()].details}
      </p>
    </motion.div>
  )
}

export default TodoListEmpty;
