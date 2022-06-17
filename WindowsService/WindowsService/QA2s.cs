using System;
using System.ComponentModel.DataAnnotations;

namespace WindowsService
{
  public class QA2s
  {
    [Key]
    public string user_id { get; set; }
    public double? cust_id { get; set; }
    public double? client_id { get; set; }
    public string user_lname { get; set; }
    public string user_fname { get; set; }
    public string user_mi { get; set; }
    public double? user_phone { get; set; }
    public string user_email { get; set; }
    public string pwd_salt { get; set; }
    public string user_pwd { get; set; }
    public double? user_active { get; set; }
    public string user_tree { get; set; }
    public string pwd_last_updated { get; set; }
    public string version { get; set; }
    public double? phone_format_id { get; set; }
    public DateTime? login_date { get; set; }
    public string login_attempts { get; set; }
    public double? language_id { get; set; }
    public string last_login_attempt { get; set; }
    public string start_page { get; set; }
  }
}
