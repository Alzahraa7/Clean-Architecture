import { Observable } from "rxjs";

export interface BaseUseCase <T, P=null> {
  execute(param: P): Observable<T>;
};
