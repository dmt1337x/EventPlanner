import { UserEventIdDTO } from './user-event-id.dto';

export interface UserDTO {
  readonly id: string;
  userName: string;
  userLastName: string;
  userEmail: string;
  eventId: Array<UserEventIdDTO>;
}
