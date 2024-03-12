using Microsoft.AspNetCore.Mvc;
using BLL.Implementations;
using BLL.Interfaces;
using DAL.Database;
using Domain.Models;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization.Infrastructure;




namespace api.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;



        public UserController(IUserService userService, AppDbContext context)
        {
            _userService = userService;
        }


        /*
           //Explenation
              Getting all existing users
       */
        [Route("All")]
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_userService.GetAllUsers());
        }

        /*
            //Explenation
            Get user By ID
        */
        [Route("{UserName}")]
        [HttpGet]
        public IActionResult GetUserById(string UserName)
        {
            var _user = _userService.GetUserbyUserName(UserName);

            if (_user == null)
                return NotFound("No existing page");

            return Ok(_user);
        }

        [Route("Register")]
        [HttpPost]
        public ActionResult<UserRegisterDTO> CreateUser([FromBody] UserRegisterDTO User)
        {
            try
            {
                User CreateUser = _userService.RegisterUser(User.UserName, User.Name, User.Email, User.Password);

                var Token = CreateToken(CreateUser);

                return Ok(Token);
            }
            catch (Exception e)
            {
                ModelState.AddModelError("Error", e.Message);
                return BadRequest(ValidationProblem(ModelState));
            }
        }


        [Route("Login")]
        [HttpPost]
        public ActionResult<UserRegisterDTO> LoginUser([FromBody] UserLogin _User)
        {

            //Call Service
            try
            {
                User LoginUserCredentials = _userService.LoginUser(_User.UserName, _User.Password);
                var Token = CreateToken(LoginUserCredentials);

                return Ok(Token);
            }
            catch (Exception e)
            {
                ModelState.AddModelError("Error", e.Message);
                return BadRequest(ValidationProblem(ModelState));
            }
            //return Ok();
        }


        private string CreateToken(User user)
        {

            List<Claim> _claims = new List<Claim>()
            {
                 new Claim("Name", user.Name),
                 new Claim("UserName", user.UserName),
                 new Claim("Email", user.Email),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("A_CityTeacherEPSGroepProjectFun I have to write a longer Key I guess"));

            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                signingCredentials: cred,
                claims: _claims,
                expires: DateTime.Now.AddDays(1)

            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }
    }
}