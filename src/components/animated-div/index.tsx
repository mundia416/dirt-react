import React from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedDivProps {
    children: React.ReactNode;
    className?: string
    onClick: () => void;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, className, onClick }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.div
            onClick={onClick}
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedDiv;