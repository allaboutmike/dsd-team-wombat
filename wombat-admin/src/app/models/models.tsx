type User = {
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    image: {
        img1: string,
        img2: string,
        img3: string,
        img4: string,
        img5: string
    },
    role: string,
    department: string,
    registeredByAdmin: string, //admin username
    registerDay: string,
    registerTime: string,

}

type UserVisit = {
    id: number,
    checkInDay: string,
    checkInHour: string,
    checkOutDay: string,
    access: null | boolean,
    accessType: string, // default or manual
    status: boolean // present or absent
    accessGivenBy: string // admin username
}

type Admin = {
    id: number,
    username: string
}