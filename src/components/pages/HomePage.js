import { motion } from 'framer-motion';
import './HomePage.css';
import { useEffect, useState } from 'react';
import { AnimacaoOlaMundo } from '../AnimacaoOlaMundo/AnimacaoOlaMundo';

export default function HomePage() {
    const [showTitle, setShowTitle] = useState(true);

    useEffect(() => {
        // Remove o título após 3 segundos (ajuste o tempo conforme necessário)
        const timer = setTimeout(() => {
            setShowTitle(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="homePage">
            <AnimacaoOlaMundo />
            {/* <HomePage /> */}
            <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 2, ease: 'easeOut', delay: 4.2 }}
                className="menu"
            >
                <h2 className="text-xl font-bold ">Menu</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                </ul>
            </motion.aside>
            <motion.div
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 5 }}
                className="titulo"
            >
                <h1 className="">Projetos</h1>
            </motion.div>
            <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 5 }}
                className=""
            >
                <div className="flex">
                    <div>Projeto 1</div>
                    <div>Projeto 2</div>
                    <div>Projeto 3</div>
                </div>
            </motion.div>
        </div>
    );
}
