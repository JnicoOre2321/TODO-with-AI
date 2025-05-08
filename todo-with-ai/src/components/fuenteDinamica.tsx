import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TituloDinamico = ({titulo}: {titulo: string}) => {
    const [fuente, setFuente] = useState("Arial");

    useEffect(() => {
        const interval = setInterval(() => {
            const fuentes = ["Arial", "Times New Roman", "Courier New", "Georgia", "Verdana"];
            setFuente(fuentes[Math.floor(Math.random() * fuentes.length)]);
        }, 600);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6 flex flex-col items-center gap-4">
            <motion.h1 
                className="text-4xl font-bold transition-all duration-100"
                style={{ fontFamily: fuente }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
                {titulo}
            </motion.h1>
        </div>
    );
};

export default TituloDinamico;
