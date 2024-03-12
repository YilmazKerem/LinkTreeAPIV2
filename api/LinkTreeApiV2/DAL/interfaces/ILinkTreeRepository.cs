using Domain.Models;


namespace DAL.interfaces
{


    public interface ILinkTreeRepository
    {
        IEnumerable<LinkTreeDetail> GetAllLinkTrees();
        LinkTreeDetail GetLinkTreeDetailByID(int LinktreeDetailID);
        LinkTreeDetail GenerateLinkTree();

    }

}
