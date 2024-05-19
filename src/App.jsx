import './App.css'
import ContentOne from './components/ContentOne'
import ContentThree from './components/ContentThree'
import ContentTwo from './components/ContentTwo'
import Header from './components/Header'
import { motion } from "framer-motion";

function App() {

  return (
    <>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
     <Header />
     <ContentOne />
     <ContentTwo />
     <ContentThree />
     </motion.div>
    </>
  )
}

export default App
