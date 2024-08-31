import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react';

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export default function Reveal({ children, width = "100%" }: Props) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controller = useAnimation();

    useEffect(() => {
        if (isInView) {
            controller.start("visible");
        }
    }, [isInView])

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden", maxWidth: "700px", zIndex:"100" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={controller}
                transition={{ duration: 0.30, delay: 0.42 }}
            >
                {children}
            </motion.div>
        </div>
    )
}
