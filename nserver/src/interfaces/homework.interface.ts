export interface IHomework {
    id?: number,
    name: string,
    image: Blob,
    creation: Date,
    status: number,
    idStudent: number,
    idCourse: number,
    idSession: number
} 