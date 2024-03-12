using Domain.Models;

namespace BLL.Interfaces
{

    public interface IUserService
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int UserID);
        User RegisterUser(string _UserName, string _Name, string _Email, string _Password);
        User LoginUser(string _UserName, string _Password);
        User GetUserbyUserName(string UserName);


    }


}