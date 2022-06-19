namespace AuthEntity
{
  public class MyDbContext : DbContext
  {
    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }
    public DbSet<Alpha1s> Alpha1s { get; set; }
  }
}
