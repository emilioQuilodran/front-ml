export interface Price {
    amount: number;
    currency: string;
}
export interface Product {
    id: string;
    title: string;
    price?: Price;
    image: string;
    condition: string;
    free_shipping: boolean;
    state_name: string;
    description?: string;
}
