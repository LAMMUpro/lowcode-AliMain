import { AppVersionDtoCreate } from "../dto/AppVersion";

export namespace SpaceAppVersionDto {


  export interface create extends AppVersionDtoCreate {
    /** 需要继承的version */
    extendVersionId: number
  }
}