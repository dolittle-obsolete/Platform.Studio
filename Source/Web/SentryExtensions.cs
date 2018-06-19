using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace Web
{
    /// <summary>
    /// 
    /// </summary>
    public static class SentryExtensions
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="services"></param>
        /// <param name="hosting_environment"></param>
        /// <param name="tenant_id"></param>
        /// <param name="application_name"></param>
        /// <param name="client_id"></param>
        public static void AddSentry(this IServiceCollection services, IHostingEnvironment hosting_environment, string tenant_id, string application_name, string client_id)
        {
            services.AddAuthentication(options =>
                {
                    options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
                })
                .AddCookie()
                .AddOpenIdConnect(OpenIdConnectDefaults.AuthenticationScheme, options =>
                {
                    options.Authority = $"https://dolittle.online/{tenant_id}/{application_name}";
                    options.ClientId = client_id;

                    options.Events.OnRedirectToIdentityProvider = async(context)=>
                    {
                        if (!hosting_environment.IsDevelopment())
                            context.ProtocolMessage.RedirectUri = context.ProtocolMessage.RedirectUri.Replace("http", "https");

                        await Task.CompletedTask;

                    };
                });
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        public static void UseSentry(this IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseAuthentication();

            if (!env.IsDevelopment())
            {
                app.Use(async(httpContext, next)=>
                {
                    try
                    { 
                        var authenticated = httpContext.User?.Identity?.IsAuthenticated ?? false;
                        if (!httpContext.User.Identity.IsAuthenticated)
                        {
                            await httpContext.ChallengeAsync(OpenIdConnectDefaults.AuthenticationScheme, new AuthenticationProperties {
                                RedirectUri = "/"
                            });
                        } else await next();
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Exception : "+ex.Message+" - "+ex.StackTrace);
                    }
                });
            }
        }
    }
}
