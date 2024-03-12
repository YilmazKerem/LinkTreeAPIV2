using BLL.Interfaces;
using Domain.Models;
using DAL.interfaces;


namespace BLL.Implementations
{


    public class LinkTreeService : ILinkTreeService
    {


        private ILinkTreeRepository _linkTreeRepository;
        public LinkTreeService(ILinkTreeRepository linkTreeService)
        {
            _linkTreeRepository = linkTreeService;
        }

        public IEnumerable<LinkTreeDetail> GetAllLinkTrees()
        {
            throw new NotImplementedException();
        }
    }
}