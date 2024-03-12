using System.Diagnostics.CodeAnalysis;
using BLL.Implementations;
using BLL.Interfaces;
using DAL.Extensions;
using Microsoft.Extensions.DependencyInjection;

namespace BLL.Extensions
{

    //Opzoeken ExcludeFromCodeCoverage  
    //[ExcludeFromCodeCoverage]
    public static class IServiceCollectionExtentions
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {
            //services.RegisterRepositories();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IRedirectService, RedirectService>();
            services.AddTransient<ILinkTreeService, LinkTreeService>();
            return services;
        }

    }
}