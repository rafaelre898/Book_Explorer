export interface APIError {
  success: false
  message?: string
  stack?: string
  errors?: APIFieldError[]
}

export interface APIFieldError {
  type: string
  value: string
  msg: string
  path: string
  location: string
}
