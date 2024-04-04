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
using Microsoft.AspNetCore.Authorization;




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
        //[Authorize]
        [Route("All")]
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_userService.GetAllUsers());
        }

        /*
            //Explenation
            TO USE FOR EVERYONE
            Get user By UserName
        */

        [Authorize]
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

                //ModelState.AddModelError("Bearer", Token);

                return Ok(StatusCode(200));
            }
            catch (Exception e)
            {
                ModelState.AddModelError("Error", e.Message);
                return BadRequest(ValidationProblem(ModelState));
            }
        }


        [Route("Login")]
        [HttpPost]
        public ActionResult<TokenDTO> LoginUser([FromBody] UserLogin _User)
        {

            //Call Service
            try
            {
                User LoginUserCredentials = _userService.LoginUser(_User.UserName, _User.Password);
                var GetToken = CreateToken(LoginUserCredentials);

                TokenDTO _token = new TokenDTO()
                {
                    Token = GetToken
                };

                return Ok(_token);
            }
            catch (Exception e)
            {
                ModelState.AddModelError("Error", e.Message);
                return BadRequest(ValidationProblem(ModelState));
            }
            //return Ok();
        }


        [Authorize]
        [Route("{userName}")]
        [HttpPost]
        public ActionResult AddUrl([FromBody] string RedirectInformation, string userName)
        {
            try
            {

            }

            catch (Exception e)
            {

            }

            return NotFound();
        }
















        private string CreateToken(User user)
        {

            List<Claim> _claims = new List<Claim>()
            {
                 new Claim("Name", user.Name),
                 new Claim("UserName", user.UserName),
                 new Claim("Email", user.Email),
                 new Claim("UserID", user.UserId.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("A_CityTeacherEPSGroepProjectFun I have to write a longer Key I guess"));

            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                signingCredentials: cred,
                claims: _claims,
                expires: DateTime.Now.AddDays(+1)

            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }
    }
}