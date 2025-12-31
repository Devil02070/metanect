'use client';

import { useEffect, useRef } from 'react';

interface HorizontalBinaryRainProps {
    className?: string;
    fontSize?: number;
    speed?: number;
    changeSpeed?: number;
    columnsPerRow?: number;
}

type Cell = {
    text: string;
    color: string;
};

export default function Matrix({
    className = '',
    fontSize = 16,
    speed = 30,
    changeSpeed = 120,
    columnsPerRow,
}: HorizontalBinaryRainProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const CHARS = '01';
    const WORDS = ['0'];
    const COLORS = ['#ffffff90', '#ffffff50', 'red'];

    const createCell = (): Cell => {
        const useWord = Math.random() < 0.1;
        return {
            text: useWord
                ? WORDS[Math.floor(Math.random() * WORDS.length)]
                : CHARS[Math.floor(Math.random() * CHARS.length)],
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let rows = 0;
        let columns = 0;

        let grid: Cell[][] = [];
        let rowOffsets: number[] = [];
        let rowSpeeds: number[] = [];

        const cellSpacing = fontSize;

        const setCanvasSize = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            rows = Math.floor(rect.height / fontSize);
            columns = columnsPerRow || Math.ceil(rect.width / cellSpacing);

            grid = [];
            rowOffsets = [];
            rowSpeeds = [];

            for (let y = 0; y < rows; y++) {
                grid[y] = [];
                for (let x = 0; x < columns; x++) {
                    grid[y][x] = createCell();
                }
                rowOffsets[y] = Math.random() * cellSpacing;
                rowSpeeds[y] = 0.4 + Math.random() * 1;
            }
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        let lastChangeTime = Date.now();

        const draw = () => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;
            ctx.textBaseline = 'top';

            const extraCols = 2;

            for (let y = 0; y < rows; y++) {
                // move row smoothly
                rowOffsets[y] += rowSpeeds[y];

                while (rowOffsets[y] >= cellSpacing) {
                    rowOffsets[y] -= cellSpacing;
                    grid[y].shift();
                    grid[y].push(createCell());
                }

                for (let x = -extraCols; x < columns + extraCols; x++) {
                    const cellIndex = (x + columns) % columns;
                    const cell = grid[y][cellIndex];

                    const displayX = x * cellSpacing - rowOffsets[y];
                    const displayY = y * fontSize;

                    ctx.fillStyle = cell.color;
                    ctx.fillText(cell.text, displayX, displayY);
                }
            }

            // mutate random cells
            const now = Date.now();
            if (now - lastChangeTime > changeSpeed) {
                lastChangeTime = now;
                const changes = Math.floor(rows * columns * 0.05);

                for (let i = 0; i < changes; i++) {
                    const ry = Math.floor(Math.random() * rows);
                    const rx = Math.floor(Math.random() * columns);
                    grid[ry][rx] = createCell();
                }
            }
        };

        const interval = setInterval(draw, speed);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, [fontSize, speed, changeSpeed, columnsPerRow]);

    return (
        <canvas
            ref={canvasRef}
            className={`w-90 h-screen ${className}`}
            style={{ background: '#000', display: 'block' }}
        />
    );
}