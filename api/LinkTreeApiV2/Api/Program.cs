using BLL.Extensions;
using DAL.Database;
using DAL.Extensions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;




var builder = WebApplication.CreateBuilder(args);


// Add services to the container.

builder.Services.AddDbContext<AppDbContext>();


builder.Services.RegisterServices();
builder.Services.RegisterRepositories();


builder.Services.AddControllersWithViews();

//builder.Services.AddDbContext

builder.Services.AddControllers();
builder.Services.AddCors();


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();




//Authentication 

builder.Services.AddAuthorization();
builder.Services.AddAuthentication().AddJwtBearer();





//Opzoeken Transient vs Scoped
var app = builder.Build();



app.UseAuthentication();
app.UseAuthorization();
app.UseCors(builder =>
            builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader());


//Authentication 


// Configure the HTTP request pipeline. 
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
