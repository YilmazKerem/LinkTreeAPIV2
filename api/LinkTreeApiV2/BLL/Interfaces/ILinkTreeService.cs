using Domain.Models;

namespace BLL.Interfaces
{

    public interface ILinkTreeService
    {
        IEnumerable<LinkTreeDetail> GetAllLinkTrees();

    }


}