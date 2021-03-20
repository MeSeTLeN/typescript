//* Init Types

function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('Maksym')

function throwError(message: string): never {
  throw new Error(message)
}

function infinite(): never {
  while (true) {}
}
