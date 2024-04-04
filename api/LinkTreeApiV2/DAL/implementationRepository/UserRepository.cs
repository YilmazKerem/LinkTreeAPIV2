using DAL.Database;
using DAL.interfaces;
using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.implementationRepository
{

    public class UserRepository : IUserRepository
    {
        AppDbContext _context;


        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _context.User.Include(p => p.LinkTreeDetail);//.ThenInclude(p => p.Urls2);
        }

        public User GetUserById(int UserID)
        {
            var _user = _context.User.Where(p => p.UserId == UserID)
           .Include(p => p.LinkTreeDetail).ThenInclude(p => p.Urls2).SingleOrDefault();

            return _user;
        }

        public User GetUserByUserName(string UserName)
        {
            var _user = _context.User.Where(p => p.UserName == UserName)
            .Include(p => p.LinkTreeDetail).ThenInclude(p => p.Urls2).SingleOrDefault();

            return _user;
        }

        public User LoginUser(string _UserName)
        {
            //Controlleren of de User bestaat
            //Login Username.
            //Sturen van gevonden gegevens.

            User _User = _context.User.Where(p => p.UserName == _UserName).SingleOrDefault();

            // if (_User == null)
            // {
            //     throw new ArgumentException("Given username does not exist");
            // }
            return _User;
        }

        public User RegisterUser(string _UserName, string _Name, string _Email, string _PasswordHash)
        {
            //Check Or UserName Exist

            if (_context.User.Where(p => p.UserName.ToLower() == _UserName.ToLower()).SingleOrDefault() != null)
            {
                throw new ArgumentException("User already exists");
            }

            if (_context.User.Where(p => p.Email.ToLower() == _Email.ToLower()).SingleOrDefault() != null)
            {
                throw new ArgumentException("Existing User with this email");
            }

            LinkTreeDetail _linkTreeDetail = new LinkTreeDetail();

            User __user = new User()
            {
                UserId = _context.User.Count(),
                Name = _Name,
                UserName = _UserName,
                LinkTreeDetail = _linkTreeDetail,
                Email = _Email,
                PasswordHash = _PasswordHash

            };
            _context.User.Add(__user);
            _context.SaveChanges();
            return __user;
        }
    }
}
