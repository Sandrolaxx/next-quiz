export function shuffleList(elements: any[]): any[] {
    return elements
        .map(element => ({ element, randomValue: Math.random() }))
        .sort((objOne, objTwo) => objOne.randomValue - objTwo.randomValue)
        .map(obj => obj.element);
}