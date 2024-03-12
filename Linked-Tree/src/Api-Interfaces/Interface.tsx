export interface Userinfo
{
    userId: number;
    linkTreeDetail: LinkTreeDetail;
    name: string;
    userName: string;
    email: string;
}

export interface LinkTreeDetail
{
    linkTreeID: number;
    urls: Url[];
    backgroundColor: string;
    hoverColor: string;
    description: string;
}

export interface Url
{
    urlID: number;
    url: string;
    image_url: string;
    urldescription: string;
}
