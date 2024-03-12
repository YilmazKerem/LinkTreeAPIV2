using BLL.Interfaces;
using Domain.Models;
using DAL.interfaces;

namespace BLL.Implementations
{


    public class RedirectService : IRedirectService
    {


        private IRedirectRepository _redirectRepository;
        public RedirectService(IRedirectRepository redirectRepository)
        {
            _redirectRepository = redirectRepository;
        }

        public IEnumerable<RedirectUrl> GetAllUrls()
        {
            return _redirectRepository.GetAllUrls();
        }
    }
}