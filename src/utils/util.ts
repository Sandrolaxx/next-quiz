import { MultipleColors } from "react-countdown-circle-timer";

export function shuffleList(elements: any[]): any[] {
    return elements
        .map(element => ({ element, randomValue: Math.random() }))
        .sort((objOne, objTwo) => objOne.randomValue - objTwo.randomValue)
        .map(obj => obj.element);
}

export const colors = [
    "D0142A",
    "7915D1",
    "158FD1",
    "15D14D",
];

export const letters = [
    { value: "A", color: `#${colors[0]}` },
    { value: "B", color: `#${colors[1]}` },
    { value: "C", color: `#${colors[2]}` },
    { value: "D", color: `#${colors[3]}` }
];

export const timerColors: MultipleColors = {
    colors: [`#${colors[3]}`, `#${colors[2]}`, `#${colors[1]}`, `#${colors[0]}`],
    colorsTime: [8, 6, 5, 0]
}