#pragma checksum "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\Pages\Friends.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5f9176bb3394cb54c2f44f2de7cf16201462d76d"
// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace CatchMe.Web.Client.Pages
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
#line 4 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\Pages\Friends.razor"
using CatchMe.Web.Shared;

#line default
#line hidden
#line 1 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\Pages\Friends.razor"
           [Authorize]

#line default
#line hidden
    [Microsoft.AspNetCore.Components.RouteAttribute("/friends")]
    public partial class Friends : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
        }
        #pragma warning restore 1998
#line 32 "C:\code\tests\CatchMe.Web\src\CatchMe.Web\CatchMe.Web\Client\Pages\Friends.razor"
       
    private Friend[] _friends;

    protected override async Task OnInitializedAsync()
    {
        _friends = await Http.GetJsonAsync<Friend[]>("Friends");
    }

#line default
#line hidden
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private HttpClient Http { get; set; }
    }
}
#pragma warning restore 1591
