using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WindowsService
{
    public partial class Service1 : ServiceBase
    {
        public Service1()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
          
        }

        protected override void OnStop()
        {
        }

        Authorization authorization = new Authorization();
        [HttpGet]
        [Route("api/Aplpha1s/check/{email}/{password}")]
        public int[] CheckAuthorization(string email, string password)
        {
          return authorization.CheckAuthorization(email, password);
        }

  }
}
