/**
 * Template Literal Types
 */
type Color = 'red' | 'blue' | 'green';
type Animal = 'dog' | 'cat' | 'bird';
export type ColoredAnimal = `${Color}-${Animal}`;

