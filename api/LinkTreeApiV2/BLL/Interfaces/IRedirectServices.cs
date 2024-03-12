using Domain.Models;

namespace BLL.Interfaces
{

    public interface IRedirectService
    {
        IEnumerable<RedirectUrl> GetAllUrls();

    }


}