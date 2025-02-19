import { animate, AnimatePresence, motion } from 'framer-motion'

//variants
const stairAnimation = {
    initial:{
        top:"0%"
    },
    animate:{
        top: "100%"
    },
    exit:{
        top: ["100%", "0%"]
    }
}

//caclulate reverse index for staggerd delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index -1;

}


const Stairs = () => {
  return (
    <>
        {/* render 6 motion divs each respresenting a step of the stairs 
        each div will have the same animation defined by the staircaseAnimation object
        The delay for each div is calculated dynamically based on its reverse index, creating s staggered effect with decreasing delay in each subsequent step*/}

        {[...Array(6)].map((_, index) =>{
            return(<motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
                duration:0.4,
                ease:'easeInOut',
                delay:reverseIndex(index) * 0.1,
            }}
            className='h-full w-full bg-white relative'
            />
        );
            
        })}
    </>
  )
}

export default Stairs