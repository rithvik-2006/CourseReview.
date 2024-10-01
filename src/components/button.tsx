// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"

// export default function Button(name: any) {
//     return (
//         <div>
//             <Link href="/MainPage">
//            <motion.button
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     className={`px-8 py-3 rounded-full text-lg font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 shadow-lg`}
//     style={{
//       boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
//     }}
//   >
//     {name}
    
//   </motion.button>
//   </Link>
//         </div>
//     )
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  name: string;
}

export default function Button({ name }: ButtonProps) {
  return (
    <div>
      
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-3 rounded-full text-lg font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 shadow-lg`}
          style={{
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          {name}
        </motion.button>
      
    </div>
  );
}
