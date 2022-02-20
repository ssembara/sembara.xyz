import { motion } from "framer-motion";
import { Box, BoxProps, chakra, shouldForwardProp } from "@chakra-ui/react";
import React, { ReactNode } from "react";

// const StyledDiv = chakra(motion.div, {
//   shouldForwardProp: (prop) => {
//     return shouldForwardProp(prop) || prop === "transition";
//   },
// });

export const MotionBox = motion<BoxProps>(Box);

interface SectionProps {
  childern?: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => (
  <MotionBox
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring" }}
    mb={6}
  >
    {children}
  </MotionBox>
);

export default Section;
