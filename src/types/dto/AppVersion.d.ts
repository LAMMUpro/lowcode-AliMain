import { AppVersion } from "@prisma/client";
export type AppVersionDto = AppVersion;
export declare class AppVersionDtoCreate implements Omit<AppVersion, 'id' | 'version' | 'isAuditing' | 'isPass' | 'auditContent' | 'isDeleted'> {
    applicationId: AppVersion['applicationId'];
    version?: AppVersion['version'];
    isAuditing?: AppVersion['isAuditing'];
    isPass?: AppVersion['isPass'];
    auditContent?: AppVersion['auditContent'];
    isDeleted?: AppVersion['isDeleted'];
}
export declare class AppVersionDtoDelete implements Pick<AppVersion, 'id'> {
    id: AppVersion['id'];
}
export declare class AppVersionDtoFindUnique implements Pick<AppVersion, 'id'> {
    id: AppVersion['id'];
}
export declare class AppVersionDtoFindAll {
}
export declare class AppVersionDtoFindBatch implements PageInfo {
    pageSize: number;
    currentPage: number;
    totalCount?: number;
}
export declare class AppVersionDtoUpdate {
    applicationId?: AppVersion['applicationId'];
    version?: AppVersion['version'];
    isAuditing?: AppVersion['isAuditing'];
    isPass?: AppVersion['isPass'];
    auditContent?: AppVersion['auditContent'];
}
