import { IProduct } from "./IProduct";

export interface IPagenation {
    pageIndex: number;
    pageSize: number;
    count: number;
    productsDtos: IProduct[];
}