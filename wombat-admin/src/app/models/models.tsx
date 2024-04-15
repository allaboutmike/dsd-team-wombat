type User = {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  image: string,
  role: string,
  department: string,
  registeredByAdmin: string, //admin username
  registerDay: string,
  registerTime: string,

}

type UserVisit = {
  id: number;
  checkInDay: string;
  checkInHour: string;
  checkOutDay: string;
  access: null | boolean;
  accessType: string; // default or manual
  status: boolean; // present or absent
  accessGivenBy: string; // admin username
};


type Admin = {
  id: number;
  username: string;
};

export type IncomingRequest = {
  requestId: string,
  userId: number,
  date: string,
  approvalStatus: string,
  base64Image: string,
  state: string
}