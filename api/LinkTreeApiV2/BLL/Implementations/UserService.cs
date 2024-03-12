using BLL.Interfaces;
using Domain.Models;
using DAL.interfaces;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Linq.Expressions;
using BCrypt.Net;
using Microsoft.AspNetCore.Server.IIS.Core;

namespace BLL.Implementations
{


    public class UserService : IUserService
    {


        private IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public User RegisterUser(string _UserName, string _Name, string _Email, string _Password)
        {
            //Check if username exist. If exist return Error of User Exist.
            //Send check To Repository
            try
            {

                //Has given password.
                string _PasswordHash = BCrypt.Net.BCrypt.HashPassword(_Password);
                var UserResult = _userRepository.RegisterUser(_UserName, _Name, _Email, _PasswordHash);

                return UserResult;
            }

            catch (Exception e)
            {
                throw new Exception(e.Message);
                throw;
            }
        }

        public User GetUserById(int UserID)
        {
            //UserName
            return _userRepository.GetUserById(UserID);

        }

        public User GetUserbyUserName(string UserName)
        {
            return _userRepository.GetUserByUserName(UserName);
        }


        IEnumerable<User> IUserService.GetAllUsers()
        {
            return _userRepository.GetAllUsers();
        }

        public User LoginUser(string _UserName, string _Password)
        {
            try
            {
                User UserResult = _userRepository.LoginUser(_UserName);
                string _PasswordHash = BCrypt.Net.BCrypt.HashPassword(_Password);
                if (!BCrypt.Net.BCrypt.Verify(_Password, UserResult.PasswordHash))
                {
                    throw new ArgumentException("Username or password is wrong");
                }

                return UserResult;


            }

            catch (Exception e)
            {
                throw new Exception(e.Message);
            }

        }




        // private string CreateToken(User user)
        // {

        //     List<Claim> _claims = new List<Claim>()
        //     {
        //          new Claim("Name", user.Name),
        //          new Claim("UserName", user.UserName),
        //          new Claim("Email", user.Email),
        //     };

        //     var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("A_CityTeacherEPSGroepProjectFun I have to write a longer Key I guess"));

        //     var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        //     var token = new JwtSecurityToken(
        //         signingCredentials: cred,
        //         claims: _claims,
        //         expires: DateTime.Now.AddDays(1)

        //     );

        //     var jwt = new JwtSecurityTokenHandler().WriteToken(token);
        //     return jwt;
        // }


    }
}