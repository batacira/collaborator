export interface CompanyType {
    company: {
        id: number;
        companyName: string;
        img: string;
        from: string | undefined;
        ceo: string;
    }[];
}
