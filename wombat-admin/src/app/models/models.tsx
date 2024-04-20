export type User = {
  userId: number,
  firstName: string,
  lastName: string,
  username: string,
  userImage: string,
  role: string,
  department: string,
  registeredByAdmin: number, //admin id
  registerDay: string,
  registerTime: string,
  accessLevel: string,
  lastActive: string
}

type UserVisit = {
  id: number;
  checkInDay: string;
  checkInHour: string;
  checkOutDay: string;
  access: null | boolean;
  accessType: boolean; // default or manual
  status: boolean; // present or absent
  accessGivenBy: number; // admin id
};


type Admin = {
  id: number;
  username: string;
};

type requestState = "AUTOMATED" | "MANUAL_OVERRIDE_REQUESTED" | "MANUAL_OVERRIDE_ACTIONED" | "MANUAL_OVERRIDE_TIMEOUT"
type accessType = "DEFAULT" | "MANUAL"
type approvalStatus = "APPROVED" | "DENIED"

export type IncomingRequest = {
  id: string,
  requestId: string,
  userId: number,
  date: string,
  approvalStatus: approvalStatus,
  base64Image: string,
  state: requestState,
  ttl: string
}