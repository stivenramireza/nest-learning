export let name: string = 'Stiven';
export const age: number = 24;
export const isValid: boolean = true;

name = 'Melissa';
// name = 123;
// name = true;

export const templateString = ` This a multiline string
that can have "", '', inject values ${name}, 
expressions: ${1 + 1}
numbers ${age}
booleans: ${isValid}
`;

console.log(templateString);
