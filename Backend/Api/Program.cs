using Data;
using Domain.Entities;
using FastEndpoints;
using FastEndpoints.Swagger;
using Features;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddFastEndpoints(config =>
{
    config.Assemblies = new[]
    {
        typeof(EndpointsMarker).Assembly
    };
});
builder.Services.SwaggerDocument();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

app.UseDefaultExceptionHandler();
app.UseFastEndpoints();
app.UseSwaggerGen();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();

    if (!db.Users.Any())
    {
        db.Users.Add(new User { Id = Guid.NewGuid(), Email = "demo@local" });
        db.SaveChanges();
    }
}

app.Run();
