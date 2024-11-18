export interface GroupingData  {
    name: string;
    type?: string
    quotes: number;
    quoteNB: number;
    quoteConversion: number;
    quoteNBPremium: number;
    averageNBPremium: number;
    pif: number;
    expiredPolicies: number;
    expiredPremium: number;
    retention: number;
    tenant: string;
}
