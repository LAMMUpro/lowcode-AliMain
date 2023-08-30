import { Application } from "@prisma/client";
export type ApplicationDto = Application;
export declare class ApplicationDtoCreate implements Omit<Application, 'id' | 'currentEditVersion'> {
    name: Application['name'];
    describe: Application['describe'];
    currentEditVersion?: Application['currentEditVersion'];
    isDeleted: Application['isDeleted'];
}
export declare class ApplicationDtoDelete implements Pick<Application, 'id'> {
    id: Application['id'];
}
export declare class ApplicationDtoFindUnique implements Pick<Application, 'id'> {
    id: Application['id'];
}
export declare class ApplicationDtoFindAll {
}
export declare class ApplicationDtoFindBatch implements PageInfo {
    pageSize: number;
    currentPage: number;
    totalCount?: number;
}
export declare class ApplicationDtoUpdate {
    name?: Application['name'];
    describe?: Application['describe'];
    currentEditVersion?: Application['currentEditVersion'];
}
