using DAL.Database;
using DAL.interfaces;
using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.implementationRepository
{

    public class RedirectRepository : IRedirectRepository
    {
        AppDbContext _context;

        public RedirectRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<RedirectUrl> GetAllUrls()
        {
            return _context.RedirectUrl;
        }

        public List<RedirectUrl> GetLinksFromLinkTreeID(int LTDID)
        {

            return _context.RedirectUrl.Where(p => p.LinkTreeDetailID == LTDID).ToList();
            
        }

    }
}
