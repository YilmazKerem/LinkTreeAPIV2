using Domain.Models;


namespace DAL.interfaces
{


    public interface IRedirectRepository
    {
        IEnumerable<RedirectUrl> GetAllUrls();
        List<RedirectUrl> GetLinksFromLinkTreeID(int LTDID);



    }

}
