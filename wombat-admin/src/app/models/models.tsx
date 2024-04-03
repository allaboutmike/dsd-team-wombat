type User = {
    id: number,
    firstName: string,
    lastName: string,
    image: string,
    role: string,
    department: string,
    registeredByAdmin: string,
    registerDay: string,
    registerTime: string,
    checkInDay: string,
    checkInHour: string,
    checkOutDay: string,
    access: null | boolean,
    accessType: string, // default or manual
    status: boolean // present or absent
}