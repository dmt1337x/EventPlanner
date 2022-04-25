export interface UserDTO {
  readonly id: string;
  readonly userName: string;
  readonly userLastName: string;
  readonly userEmail: string;
  // readonly userPassword: string;
  readonly eventId: string;
  readonly confirmed: boolean;
}
