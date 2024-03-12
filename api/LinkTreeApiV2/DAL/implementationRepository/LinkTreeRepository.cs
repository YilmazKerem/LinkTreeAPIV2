using DAL.Database;
using DAL.interfaces;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace DAL.implementationRepository
{

    public class LinkTreeRepository : ILinkTreeRepository
    {
        AppDbContext _context;

        public LinkTreeRepository(AppDbContext context)
        {
            _context = context;
        }

        public LinkTreeDetail GenerateLinkTree()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<LinkTreeDetail> GetAllLinkTrees()
        {
            return _context.LinkTreeDetail.Include(p => p.Urls2);
        }

        public LinkTreeDetail GetLinkTreeDetailByID(int LinktreeDetailID)
        {
            var LINKTREE = _context.LinkTreeDetail.Where(ltd => ltd.LinkTreeID == LinktreeDetailID).SingleOrDefault();
            return LINKTREE;
        }
    }
}
