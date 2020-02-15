using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace CatchMe.Web.Client.Services
{
    public class LocationService
    {
        [JSInvokable("RefreshCurrentUserAsync")]
        public async Task RefreshCurrentUserAsync(dynamic position)
        {
            Console.WriteLine("qualcuno mi ha chiamato");
            //Console.WriteLine("position is Longitude: " + position.Longitude + " latitude: " + position.Latitude);
        }
    }
}
