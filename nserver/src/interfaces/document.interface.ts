export interface IDocument {
    id?: number,
    name: string,
    file: Blob,
    date: Date,
    status: number,
    idCourse: number,
    idSession: number
} 