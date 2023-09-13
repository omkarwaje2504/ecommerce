import { ReactNode } from "react";

export interface Home {
    children: ReactNode;
}

export interface About {
    productId: number;
    ProductImagepath: string;
    ProductName: string;
    ProductPrice: number;
    ProductDescription: string;
}