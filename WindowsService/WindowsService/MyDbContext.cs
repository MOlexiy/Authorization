using System;
using System.Data.Entity;

namespace WindowsService
{
  public class MyDbContext : DbContext
  {
    public MyDbContext() : base("workdbEntities") { }

    public DbSet<Alpha1s> Alpha1s { get; set; }
    public DbSet<Alpha3s> Alpha3s { get; set; }
    public DbSet<QA2s> QA2s { get; set; }
  }
}
