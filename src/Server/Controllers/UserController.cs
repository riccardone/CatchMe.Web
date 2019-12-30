using CatchMe.Web.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CatchMe.Web.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<FriendsController> logger;

        public UserController(ILogger<FriendsController> logger)
        {
            this.logger = logger;
        }

        [HttpGet]
        [Authorize]
        public IEnumerable<Friend> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Friend($"test {index}", new Position(1, 2), false, false,
                    0, string.Empty, false, string.Empty, 0, 0, 0, DateTime.MinValue, DateTime.MinValue, false, false))
                .ToArray();
        }
    }
}
