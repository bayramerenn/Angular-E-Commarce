import { IProduct } from "./IProduct";

export interface IPagenation {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IProduct[];
}