export interface ParticipantDTO {
  readonly id: string;
  readonly name: string;
  readonly lastName: string;
  readonly email: string;
  readonly eventId: string;
  readonly dietId: string;
  readonly transportid: string;
  readonly attractionId: string;
  readonly confirmed: boolean;
}
