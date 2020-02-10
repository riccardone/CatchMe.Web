using System;
using System.Net.Http;
using Blazor.Auth0;
using Blazored.Localisation;
using CatchMe.Web.Client.Services;
using CatchMe.Web.Server.Protos;
using Microsoft.AspNetCore.Components.Builder;
using Microsoft.Extensions.DependencyInjection;
using Toolbelt.Blazor.Extensions.DependencyInjection;

namespace CatchMe.Web.Client
{
    public class Startup
    {
        public const string BackendUrl = "https://localhost:5001";
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddBlazorAuth0(options =>
            {
                // Required
                options.Domain = "catchmeapp.eu.auth0.com";

                // Required
                options.ClientId = "lpVF3QG7P586NprCEdlQrY8GQVETGHsj";

                // Required if you want to make use of Auth0's RBAC
                options.Audience = "https://catchmeapp.eu.auth0.com/api/v2/";

                // PLEASE! PLEASE! PLEASE! DO NOT USE SECRETS IN CLIENT-SIDE APPS... https://medium.com/chingu/protect-application-assets-how-to-secure-your-secrets-a4165550c5fb
                // options.ClientSecret = "NEVER!!";

                //// Uncomment the following line if you don't want your unauthenticated users to be automatically redirected to Auth0's Universal Login page 
                // options.RequireAuthenticatedUser = false;

                //// Uncomment the following line if you don't want your users to be automatically logged-off on token expiration
                // options.SlidingExpiration = true;

                //// Uncomment the following line if you want your users to log in via a pop-up window instead of being redirected
                // options.LoginMode = LoginModes.Popup;
            });

            // Policy based authorization, learn more here: https://docs.microsoft.com/en-us/aspnet/core/security/authorization/policies?view=aspnetcore-3.1
            services.AddAuthorizationCore(options =>
            {
                options.AddPolicy("read:weather_forecast", policy => policy.RequireClaim("permissions", "read:weather_forecast"));
                options.AddPolicy("execute:increment_counter", policy => policy.RequireClaim("permissions", "execute:increment_counter"));
            });
            services.AddI18nText<Startup>();
            services.AddScoped(serviceProvider =>
            {
                var httpClient = new HttpClient { BaseAddress = new Uri(BackendUrl) };
                return new CurrentUser.CurrentUserClient(new GrpcWebCallInvoker(httpClient));
            });
        }

        public void Configure(IComponentsApplicationBuilder app)
        {
            app.UseBlazoredLocalisation();
            app.AddComponent<App>("app");
        }
    }
}
