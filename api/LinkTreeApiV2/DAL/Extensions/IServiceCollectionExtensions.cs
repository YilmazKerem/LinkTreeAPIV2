

using System.Diagnostics.CodeAnalysis;
using DAL.Database;
using DAL.implementationRepository;
using DAL.interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;


namespace DAL.Extensions
{
    [ExcludeFromCodeCoverage]
    public static class IServiceCollectionExtensions
    {
        public static IServiceCollection RegisterRepositories(this IServiceCollection services)
        {
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<ILinkTreeRepository, LinkTreeRepository>();
            services.AddTransient<IRedirectRepository, RedirectRepository>();

            return services;
        }

    }
}