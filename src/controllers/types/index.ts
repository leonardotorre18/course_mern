/**
 * Basic JSON response for Controllers
 */
export type BasicResponse = {
  message: string
}

/**
 * Date JSON response for Controllers
 */
export type DateResponse = {
  message: string
  Date: Date
}

/**
 * Error JSON response for Controllers
 */
export type ErrorResponse = {
  error: string,
  message: string
}