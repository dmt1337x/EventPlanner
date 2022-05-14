export interface ParticipantDTO {
  readonly id: string;
  readonly name: string;
  readonly lastName: string;
  readonly email: string;
  readonly eventId: string;
  readonly dietId: string | null;
  readonly transportId: string | null;
  readonly attractionId: string | null;
  readonly confirmed: boolean;
  readonly roomType: number | null;
  readonly roomId: string | null;
}
