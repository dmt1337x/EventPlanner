export interface ParticipantDTO {
  readonly id: string;
  readonly eventId: string;
  readonly email: string;
  readonly confirmed: boolean;
}
