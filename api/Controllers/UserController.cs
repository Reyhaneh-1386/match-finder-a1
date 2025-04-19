using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
     [ApiController]
     [Route("api/[controller]")]
     public class UserController(IUserRepository UserRepository) : ControllerBase
     {
          [HttpPost("register")]
          public async Task<ActionResult<LoggedInDto>> Register(AppUser userInput, CancellationToken cancellationToken)
          {
               if (userInput.Password != userInput.ConfirmPassword)
                    return BadRequest("Your Password do not match !");

               LoggedInDto? loggedInDto = await UserRepository.RegisterAsync(userInput, cancellationToken);

               if (loggedInDto is null)
                    return BadRequest("This email is already taken.");

               return Ok(loggedInDto);
          }

          [HttpGet]
          public async Task<ActionResult<List<MemberDto>>> GetAll(CancellationToken cancellationToken)
          {
               List<AppUser>? appUsers = await UserRepository.GetAllAsync(cancellationToken);

               if (appUsers is null)
                    return NoContent();

               List<MemberDto> memberDtos = [];

               foreach (AppUser user in appUsers)
               {
                    MemberDto memberDto = new(
                         Email: user.Email,
                         UserName: user.UserName,
                         Age: user.Age,
                         City: user.City,
                          Country: user.Country
                    );
                    
                    memberDtos.Add(memberDto);
               }

               return memberDtos;
          }

          [HttpPut("update/{userId}")]
          public async Task<ActionResult<UpdateDto>> UpdateBYId(string userId, AppUser userInput, CancellationToken cancellationToken)
          {
               UpdateDto? updateDto = await UserRepository.UpdatByIdAsync(userId,userInput,cancellationToken);

               if(updateDto is null)
               return BadRequest("Operation failed.");

               return updateDto;
          }

          [HttpDelete("delete/{userId}")]
          public async Task<ActionResult<DeleteResult>> DeleteById(string userId,CancellationToken cancellationToken)
          {
               DeleteResult? deleteResult=await UserRepository.DeletByIdAsync(userId,cancellationToken);

               if(deleteResult is null)
               return BadRequest("Operation failed");

               return  deleteResult;
          }
     }
}