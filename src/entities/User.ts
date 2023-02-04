export interface User {
    type?: string;
    id?: string;
    name?: string;
    fullname?: string;
    email?: string;
    emailVerified?: boolean;
    plan?: string;
    canPay?: boolean;
    isPro?: boolean;
    periodEnd?: null;
    avatarUrl?: string;
    orgs?: any[];
    auth?: Auth;
}

export interface Auth {
    type?: string;
    accessToken?: AccessToken;
}

export interface AccessToken {
    displayName?: string;
    role?: string;
}
