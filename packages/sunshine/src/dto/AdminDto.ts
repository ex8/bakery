export interface IAdminFilterDto {
  firstName: string
  lastName: string
  email: string
  isEmailVerified: boolean
  createdAt: string
  updatedAt: string
}

export interface IAdminCreateDto {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface IAdminUpdateDto {
  firstName?: string
  lastName?: string
  password?: string
  isEmailVerified?: boolean
}
