#pragma checksum "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\App.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d2c1ac98c0fe03014ba41e282e9588d341591f42"
// <auto-generated/>
#pragma warning disable 1591
namespace CatchMe.Web.Client
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#line 1 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#line 2 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#line 3 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#line 4 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#line 5 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#line 6 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#line 7 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#line 8 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\_Imports.razor"
using CatchMe.Web.Client;

#line default
#line hidden
#line 9 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\_Imports.razor"
using CatchMe.Web.Client.Shared;

#line default
#line hidden
#line 11 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\_Imports.razor"
using Blazor.Auth0;

#line default
#line hidden
#line 12 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\_Imports.razor"
using Blazor.Auth0.Models;

#line default
#line hidden
#line 13 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\_Imports.razor"
using Blazor.Auth0.Models.Enumerations;

#line default
#line hidden
    public partial class App : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenComponent<Microsoft.AspNetCore.Components.Routing.Router>(0);
            __builder.AddAttribute(1, "AppAssembly", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Reflection.Assembly>(
#line 1 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\App.razor"
                      typeof(Program).Assembly

#line default
#line hidden
            ));
            __builder.AddAttribute(2, "Found", (Microsoft.AspNetCore.Components.RenderFragment<Microsoft.AspNetCore.Components.RouteData>)((routeData) => (__builder2) => {
                __builder2.AddMarkupContent(3, "\r\n        ");
                __builder2.OpenComponent<Microsoft.AspNetCore.Components.Authorization.AuthorizeRouteView>(4);
                __builder2.AddAttribute(5, "RouteData", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Microsoft.AspNetCore.Components.RouteData>(
#line 3 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\App.razor"
                                        routeData

#line default
#line hidden
                ));
                __builder2.AddAttribute(6, "DefaultLayout", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Type>(
#line 3 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\App.razor"
                                                                   typeof(MainLayout)

#line default
#line hidden
                ));
                __builder2.AddAttribute(7, "Authorizing", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddMarkupContent(8, "\r\n                ");
                    __builder3.AddMarkupContent(9, "<p>>Determining session state, please wait...</p>\r\n            ");
                }
                ));
                __builder2.AddAttribute(10, "NotAuthorized", (Microsoft.AspNetCore.Components.RenderFragment<Microsoft.AspNetCore.Components.Authorization.AuthenticationState>)((context) => (__builder3) => {
                    __builder3.AddMarkupContent(11, "\r\n                ");
                    __builder3.AddMarkupContent(12, "<h1>Sorry</h1>\r\n                ");
                    __builder3.AddMarkupContent(13, "<p>You\'re not authorized to reach this page. You may need to log in as a different user.</p>\r\n            ");
                }
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(14, "\r\n    ");
            }
            ));
            __builder.AddAttribute(15, "NotFound", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(16, "\r\n        ");
                __builder2.AddMarkupContent(17, "<p>Sorry, there\'s nothing at this address.</p>\r\n    ");
            }
            ));
            __builder.CloseComponent();
        }
        #pragma warning restore 1998
    }
}
#pragma warning restore 1591
