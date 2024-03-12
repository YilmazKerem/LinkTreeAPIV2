using Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;


namespace DAL.interfaces
{


    public interface IUserRepository
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int UserID);
        User LoginUser(string _UserName);
        User RegisterUser(string _UserName, string _Name, string _Email, string _PasswordHash);
        User GetUserByUserName(string UserName);

    }

}
