using System;
using System.ComponentModel.DataAnnotations;

namespace WindowsService
{
  public class Alpha3s
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
    public DateTime? pwd_last_updated { get; set; }
    public string version { get; set; }
    public double? phone_format_id { get; set; }
    public double? login_date { get; set; }
    public double? login_attempts { get; set; }
    public double? language_id { get; set; }
    public DateTime? last_login_attempt { get; set; }
    public string start_page { get; set; }
    public string fav_rpt_phrase { get; set; }
    public string closing_signature { get; set; }
    public string closing_signature_image_attach_id { get; set; }
    public string user_private_key { get; set; }
    public string user_profileimage { get; set; }
    public string userGUID { get; set; }
  }
}
