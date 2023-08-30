import { AppEnv } from "@prisma/client";
export type AppEnvDto = AppEnv;
export declare class AppEnvDtoCreate implements Omit<AppEnv, 'id' | 'canDelete' | 'version'> {
    applicationId: AppEnv['applicationId'];
    env: AppEnv['env'];
    envCh: AppEnv['envCh'];
    canDelete?: AppEnv['canDelete'];
    appVersionId: AppEnv['appVersionId'];
    version?: AppEnv['version'];
    isDeleted: AppEnv['isDeleted'];
}
export declare class AppEnvDtoDelete implements Pick<AppEnv, 'id'> {
    id: AppEnv['id'];
}
export declare class AppEnvDtoFindUnique implements Pick<AppEnv, 'id'> {
    id: AppEnv['id'];
}
export declare class AppEnvDtoFindAll {
}
export declare class AppEnvDtoFindBatch implements PageInfo {
    pageSize: number;
    currentPage: number;
    totalCount?: number;
}
export declare class AppEnvDtoUpdate {
    applicationId?: AppEnv['applicationId'];
    env?: AppEnv['env'];
    envCh?: AppEnv['envCh'];
    canDelete?: AppEnv['canDelete'];
    appVersionId?: AppEnv['appVersionId'];
    version?: AppEnv['version'];
}
