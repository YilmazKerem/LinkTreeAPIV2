export interface Userinfo
{
    userId: number;
    linkTreeDetail: LinkTreeDetail;
    name: string;
    userName: string;
    email: string;
    profile_Picture: string;
    passwordHash: string;
}

export interface LinkTreeDetail
{
    linkTreeID: number;
    urls2: Urls2[];
    userID: number;
    backgroundColor: string;
    hoverColor: string;
    description: string;
}

export interface Urls2
{
    urlID: number;
    url: string;
    image_url: string;
    urldescription: string;
    order: number;
    linkTreeDetailID: number;
}


export interface IUserRegisterDTO
{
    userName: string,
    name: string,
    password: string,
    CheckPassword: string,
    email: string;
}

export interface IUserLoginDTO
{
    userName: string,
    password: string,
}