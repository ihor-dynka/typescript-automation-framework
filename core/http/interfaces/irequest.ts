export interface IRequest<T> {
    url: string
    requiresToken: boolean
    payload?: T
  }