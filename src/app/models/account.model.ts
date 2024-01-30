import { PerfilAcesso, Role } from "./account-perfil.model";

export class Login {
    email: string = '';
    password: string = '';
}

export class Register {
    name: string = '';
    email: string = '';
    telefoneCelular: string = '';
    password: string = '';
    confirmPassword: string = '';
    acceptTerms: boolean = false;
}

export interface Account {
    id: number;
    name: string;
    telefoneCelular: string;
    email: string;
    created: Date;
    updated?: Date;
    isVerified: boolean;
    jwtToken: string;
    refreshToken: string;
    perfilAcesso_Id: number;
    perfilAcesso: PerfilAcesso;
    role?: Role;
    passwordReset?: Date;
}

export class Account {
    id: number = 0;
    name: string = '';
    telefoneCelular: string = '';
    email: string = '';
    role?: Role;
    created: Date = new Date;
    updated?: Date;
    isVerified: boolean = false;
    jwtToken: string = '';
    refreshToken: string = '';
    perfilAcesso_Id: number = undefined as unknown as number;
    perfilAcesso: PerfilAcesso = undefined as unknown as PerfilAcesso;
    passwordReset?: Date;
}

export class ResetPassword {
    token: string = '';
    password: string = '';
    confirmPassword: string = '';
}
export class ChangePassword {
    password: string = '';
    confirmPassword: string = '';
}


export class UpdateAccount {
    name: string = '';
    telefoneCelular: string = '';
    email: string = '';
}

