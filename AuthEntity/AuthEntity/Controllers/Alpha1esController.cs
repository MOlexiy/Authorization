using AuthEntity;
using Microsoft.AspNetCore.Mvc;

namespace AuhorizationEntity.Controller
{
  [Route("api/[controller]")]
  [ApiController]
  public class Alpha1esController : ControllerBase
  {
    private readonly MyDbContext _context;


    public Alpha1esController(MyDbContext context)
    {
      _context = context;
    }

    [HttpGet("{emailAddr}/{password}")]
    public async Task<ActionResult<int[]>> CheckAuthorization(string emailAddr, string password)
    {
      //var name = "SSnapp";
      //var name = "qatesting@aquaphoenixsci.com";
      //var password = "pnYVnFXkgp";
      int countEmail = 0;
      int lockAcount = 0;
      int nowLockAcount = 0;
      int invalidCred = 0;
      int tempPassword = 0;
      int loginSuccess = 0;

      List<Alpha1s> emails = _context.Alpha1s
          .Where(b => b.user_email == emailAddr || b.user_id == emailAddr)
          .ToList();
      if (emails.Count > 0)
      {
        foreach (var email in emails)
        {
          if (emails.Count > 1) // YES
          {
            countEmail = 1; // Error message: "Unable to login. This email address is associated with more than one user account."
          }
          else // NO
          {
            if (email.user_active == 1 && email.login_attempts != "5" ) // YES
            {
              if (email.pwd_salt != password) // NO
              {
                if (email.login_attempts == "4") // YES
                {
                  var tempLoginAtt = (int.Parse(email.login_attempts) + 1).ToString();
                  email.login_attempts = tempLoginAtt;
                  await _context.SaveChangesAsync();
                  nowLockAcount = 1; // Error message: "Invalid credentials. This account is now locked after 5 unsuccessful login attemps."
                }
                else if (email.login_attempts == "NULL") // NULL AND NO
                {
                  var tempLoginAtt = "1";
                  email.login_attempts = tempLoginAtt;
                  await _context.SaveChangesAsync();
                  invalidCred = 1; // Error message: "Unable to login. Invalid credentials."
                }
                else if (Int32.Parse(email.login_attempts) < 4) // NO
                {
                  var tempLoginAtt = (int.Parse(email.login_attempts) + 1).ToString();
                  email.login_attempts = tempLoginAtt;
                  await _context.SaveChangesAsync();
                  invalidCred = 1; // Error message: "Unable to login. Invalid credentials."
                }
              }
              else // YES
              {
                if (email.pwd_last_updated.ToString() == "")
                {
                  tempPassword = 0;
                }
                if (email.pwd_last_updated < DateTime.Today.AddMonths(-3))
                {
                  tempPassword = 0; // Please input a new password:
                }
                else
                {
                  loginSuccess = 1; // Login Success
                }
              }
            }
            else // NO
            {
              lockAcount = 1; // Error message: "Unable to login. This user account is either locked or inactive."
            }
          }
        }
      }
      

      int[] rezult = { countEmail, lockAcount, nowLockAcount, invalidCred, tempPassword, loginSuccess };

      return rezult;
    }

    [HttpPut("{emailAddr}/{oldPass}/{newPassword}")]
    public async Task<ActionResult<int>> ChangePassword(string emailAddr, string oldPass, string newPassword)
    {
      List<Alpha1s> emails = _context.Alpha1s
          .Where(b => b.user_email == emailAddr || b.user_id == emailAddr)
          .ToList();
      int rezult = 0;
      foreach (var email in emails)
      {
        if (email.pwd_salt == oldPass)
        {
          email.pwd_salt = newPassword;
          await _context.SaveChangesAsync();
          rezult = 1;
        }
      }
      return rezult;
    }
  }
}
