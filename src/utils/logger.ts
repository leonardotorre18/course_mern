import colors from 'colors';

export const logSuccess = (message: string) => {
  console.log(colors.green(`Success: ${message}`))
}
export const logError = (message: string) => {
  console.log(colors.red(`Error: ${message}`))
}
export const logWarning = (message: string) => {
  console.log(colors.yellow(`Warning: ${message}`))
}
export const logInfo = (message: string) => {
  console.log(colors.blue(`Info: ${message}`))
}