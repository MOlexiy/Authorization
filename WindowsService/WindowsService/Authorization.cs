using System;
using System.Collections.Generic;
using System.Linq;

namespace WindowsService
{
  public class Authorization
  {
    public int[] CheckAuthorization(string email, string password)
    {
      try
      {
        return rezultAuthorization(email, password);
      }
      catch
      {
        return null;
      }
    }
    public int[] rezultAuthorization(string name, string password)
    {
      using (var context = new MyDbContext())
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

        List<Alpha1s> emails = context.Alpha1s
            .Where(b => b.user_email == name || b.user_id == name)
            .ToList();
        List<Alpha3s> emails2 = context.Alpha3s
            .Where(b => b.user_email == name || b.user_id == name)
            .ToList();
        List<QA2s> emails3 = context.QA2s
            .Where(b => b.user_email == name || b.user_id == name)
            .ToList();

        foreach (var email in emails)
        {
          if (emails.Count > 1 || emails2.Count > 1 || emails3.Count > 1) // YES
          {
            countEmail = 1; // Error message: "Unable to login. This email address is associated with more than one user account."
          }
          else // NO
          {
            if (email.user_active == 1 || Int32.Parse(email.login_attempts) != 5) // YES
            {

              if (email.pwd_salt != password) // NO
              {
                if (email.login_attempts == "4") // YES
                {
                  var tempLoginAtt = email.login_attempts + 1;
                  var user = new Alpha1s() { user_id = email.user_id, login_attempts = tempLoginAtt };
                  context.Alpha1s.Attach(user);
                  context.Entry(user).Property(x => x.login_attempts).IsModified = true;
                  context.SaveChanges();
                  nowLockAcount = 1; // Error message: "Invalid credentials. This account is now locked after 5 unsuccessful login attemps."
                }
                else if (email.login_attempts == "NULL") // NULL AND NO
                {
                  var tempLoginAtt = "1";
                  var user = new Alpha1s() { user_id = email.user_id, login_attempts = tempLoginAtt };
                  context.Alpha1s.Attach(user);
                  context.Entry(user).Property(x => x.login_attempts).IsModified = true;
                  context.SaveChanges();
                  invalidCred = 1; // Error message: "Unable to login. Invalid credentials."
                }
                else if (Int32.Parse(email.login_attempts) < 4) // NO
                {
                  var tempLoginAtt = email.login_attempts + 1;
                  var user = new Alpha1s() { user_id = email.user_id, login_attempts = tempLoginAtt };
                  context.Alpha1s.Attach(user);
                  context.Entry(user).Property(x => x.login_attempts).IsModified = true;
                  context.SaveChanges();
                  invalidCred = 1; // Error message: "Unable to login. Invalid credentials."
                }
              }
              else // YES
              {
                if (false)
                {
                  tempPassword = 1; // Please input a new password:
                  var newPassword = "qwerty";
                  var user = new Alpha1s() { user_id = email.user_id, pwd_salt = newPassword };
                  context.Alpha1s.Attach(user);
                  context.Entry(user).Property(x => x.pwd_salt).IsModified = true;
                  context.SaveChanges();
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

        int[] rezult = { countEmail, lockAcount, nowLockAcount, invalidCred, tempPassword, loginSuccess };

        return rezult;
      }
    }
  }
}
