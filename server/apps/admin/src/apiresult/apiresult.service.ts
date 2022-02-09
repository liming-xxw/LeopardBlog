import { Injectable } from '@nestjs/common';

class Paging {
  data: any;

  total: number;

  lastPage: number;

  page: number;
}



@Injectable()
export class ApiresultService {
  async message(code:number,message:string) {
    return {
      message: message,
      code: code,
    };
  }

  MESSAGE(code:number,message:string,data) {
    return {
      message: message,
      code: code,
      data,
    };
  }


  paging({ data, total, lastPage, page }: Paging) {
    return {
      total: total,
      data,
      lastPage: lastPage,
      page: page || 1,
    };
  }
}
